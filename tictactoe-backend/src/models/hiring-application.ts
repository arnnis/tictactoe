
import mongoose from 'mongoose'
import dbConnection from '../db'

const sessionSchema = new mongoose.Schema(
  {
    player1: { type: String, required: true, trim: true },
    player2: { type: String, required: true, trim: true },
    results: { type: Array, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

const Session = dbConnection.model('sessions', sessionSchema)

export default Session
