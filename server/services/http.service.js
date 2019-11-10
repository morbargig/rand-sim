import { create } from 'axios'

class HttpService {
    constructor( baseURL, headers = {} ) {
        this.axiosInstance = create( {
            baseURL,
            timeout: 5000,
            headers
        } )
    }
}

export default  function ( baseURL, headers = {} ) {
    const service = new HttpService( baseURL, headers )

    return service.axiosInstance
}
