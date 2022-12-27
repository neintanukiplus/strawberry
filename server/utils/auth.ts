import jwt from 'jsonwebtoken'

export function createToken(id: string): string {
    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''

    return jwt.sign({ id }, PRIVATE_KEY, {
        expiresIn: "2 days"
    })
}

export function verifyToken(token: string, cb: Function) {
    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''

    try {
        const decoded = jwt.verify(token, PRIVATE_KEY)
        cb(decoded, null)
    } catch (error) {
        cb(null, error)        
    }
}