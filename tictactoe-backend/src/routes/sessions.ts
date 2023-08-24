import { Router } from 'express'
import Session from '../models/hiring-application'

const router = Router()


router.post('/', async (req, res) => {
  const s = new Session()
  console.log('body', req.body)
  s.player1 = req.body.player1
  s.player2 = req.body.player2
  s.results = req.body.results

  await s.save()

  res.send({ ok: true })
})


router.get('/', async (req, res) => {
  let rows = await Session.find({}).sort({createdAt: -1})

  res.send(rows)
})


export default router
