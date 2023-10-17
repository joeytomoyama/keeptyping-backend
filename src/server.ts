import express from 'express'
import dotenv from 'dotenv'

import wordsRoute from './endpoints/words/wordsRoute'

dotenv.config()

const app = express()

app.use(express.json())


app.use('/api/words', wordsRoute)


app.listen(3333, () => console.log('Server is running!'))