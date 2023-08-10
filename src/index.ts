import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware que transforma la req. body a un json

// This line is important to ensure your app listens to the PORT env var
const PORT = process.env.PORT ?? 8080

app.get('/ping', (_req, res) => {
  console.log('someone ping here!! On date: ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
