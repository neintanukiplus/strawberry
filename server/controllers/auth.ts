import { Router } from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const router = Router()

router.post('/api/verify', async (req, res) => {
    const body = req.body
    const dev_key: string = body?.dev_key
    const key: string = dev_key.split("-")[0]

    if (dev_key) {
        try {
            const db = mongoose.connection.db
            const developer = await db.collection('developers').findOne({ key })

            if (developer) {
                const isKeyMatched = await bcrypt.compare(dev_key, developer.hash)

                if (isKeyMatched) {
                    res.status(200).json({
                        message: "Access Granted"
                    })
                } else {
                    res.status(400).json({
                        message: 'Invalid developer key. Please try again'
                    })
                }
            } else {
                res.status(404).json({
                    message: "Developer not found"
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "Unresolved server error"
            })
        }
    } else {
        res.status(400).json({
            message: "Invalid developer key. Please try again"
        })
    }
})

export default router