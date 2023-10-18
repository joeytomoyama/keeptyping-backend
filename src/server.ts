import express from 'express'
import dotenv from 'dotenv'

import wordsRoute from './endpoints/words/wordsRoute'

// SETUP
dotenv.config()
const app = express()
app.use(express.json())

// ENDPOINTS
app.use('/api/words', wordsRoute)


app.listen(process.env.PORT, () => console.log(`Server is running at port: ${process.env.PORT}!`))