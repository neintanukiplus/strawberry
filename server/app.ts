import { Server } from "colyseus"
import { WebSocketTransport } from "@colyseus/ws-transport"
import express from 'express'
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'
import http from 'http'
import * as dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './controllers/auth'

dotenv.config()

const PORT: number = parseInt(process.env.PORT ?? '') ?? 3000
const DB_URI: string = process.env.DB_URI ?? ''

const app = express()
const server = http.createServer(app)
const gameServer = new Server({
    transport: new WebSocketTransport({
        server
    })
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)

mongoose.connect(DB_URI, err => {
    if (!err) {
        gameServer.listen(PORT)
        console.log(`[GameServer] Listening on Port: ${PORT}`)
    }
})