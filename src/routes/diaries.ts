import express from 'express' // ESModules
// const express= require('express') => commonjs
import * as diaryServices from '../services/diary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  res.send(diary)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  })

  res.json(newDiaryEntry)
})

export default router
