import express, { Express, Request, Response } from 'express'

import { getUsers, englishWords, germanWords } from './wordsService'

const app: Express = express()

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World!' })
})

app.get('/english', (request: Request, response: Response) => {
    return response.json({ words: englishWords })
})

app.get('/german', (request: Request, response: Response) => {
    return response.json({ words: germanWords })
})

app.get('/test', async (request: Request, response: Response) => {
    console.log(await getUsers())
    return response.json({ message: 'Hello Test!' })
})

export default app