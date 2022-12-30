import {Request, Response, NextFunction} from "express";
import { verifyToken } from "../utils/auth";

import Developer from "../models/Developer";
import { IJWTToken } from "../types/auth";

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    const { token } = req.cookies

    if (token) {
        verifyToken(token, async (decoded: IJWTToken, err: Error) => {
            if (err) {
                res.status(400).end()
            } else {
                const { id } = decoded

                try {
                    const dev = await Developer.findById(id).select("-hash")

                    if (dev) {
                        res.locals.dev = dev
                        next()
                    } else {
                        res.status(401).end()
                    }
                } catch (error) {
                    res.status(401).end()
                }
            }
        })
    } else {
        res.status(401).end()
    }
}