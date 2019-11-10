import UnsplashApiService from '../services/unsplash-api.service'
import ColorsApiService from '../services/colors-api.service'

class PhotosRestController {
    constructor() {
        this.unsplashApiService = new UnsplashApiService()
        this.colorsApiService = new ColorsApiService()
    }

    static removeHashFromHexCode(color) {
        return color.replace('#', '')
    }

    async fetchPhotosFromUnsplashApi(term, page) {
        const photos = await this.unsplashApiService.fetchPhotosFromUnsplashApi(term, page)

        const promises = []

        for (const photoItem of photos) {
            promises.push(this.fetchColor(photoItem.color))
        }

        const results = await Promise.all(promises)

        for (let i = 0; i < photos.length; i++) {
            photos[i].color = results[i]
        }

        return photos
    }

    async fetchColor(color) {
        const hex = PhotosRestController.removeHashFromHexCode(color)
        // console.log(color, hex)
        return await this.colorsApiService.fetchColorInfo(hex)
    }

    async searchPhotos(request, response) {
        // console.log(request)
        const page = request.query['page'] || 1
        const photos = await this.fetchPhotosFromUnsplashApi(request.params['term'], page)
        // console.log(request,page,photos)

        const canOrderBy = ['like', 'resolution']

        if (request.query['orderBy']) {
            const orderBy = request.query['orderBy']

            if (!canOrderBy.includes(orderBy)) {
                response.status(422)
                response.json({ error: 'Can not order by ' + orderBy })

                return
            }

            if (orderBy === 'likes') {
                // Sort by likes
                photos.sort()
            } else if (orderBy === 'resolution') {
                photos.sort((a, b) => a.width * a.height > b.width * b.height)
            }
        }

        response.send(photos.reverse())
    }

    async fetchPhotoInfo(request, response) {
        const info = await this.unsplashApiService.fetchPhotoInfo(request.params.photo_id)

        response.send(info)
    }
}

export default  new PhotosRestController()
