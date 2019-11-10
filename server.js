import 'dotenv/config'
import express from 'express'
import photosRouter from './server/routes/photos'
import mongoose from 'mongoose'

( async () => {
    const app = express()
    const PORT = process.env.PORT || 8989

    const DBname = "splash"

    const MONGO_URL = process.env.MONGODB_URI || `mongodb://localhost/${DBname}`

    const connection = await mongoose
        .connect( MONGO_URL, { useUnifiedTopology: true,
            useNewUrlParser: true } )
        .catch( err => console.error( 'Error connecting db:', err.message ) )

    // You can use this route to monitor if the server is working or not
    app.get( '/health', ( req, res ) => res.json( { UP: !!connection } ) )

    if ( !connection ) {
        app.use( ( req, res ) => {
            res.status( 500 )
            res.json( { error: 'Server is unavailable at the moment' } )
        } )
    }

    app.use( '/api/photos', photosRouter )

    app.listen( PORT, () => console.log( `Server is listening on port ${ PORT }` ) )
} )()