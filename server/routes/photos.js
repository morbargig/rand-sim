
import { Router } from 'express'

import photosRestController from '../controllers/photos.rest-controller'

const router = Router()

router.get('/search/:term', photosRestController.searchPhotos.bind(photosRestController))
router.get('/:photo_id', photosRestController.fetchPhotoInfo.bind(photosRestController))

export default router

