import axios, { AxiosResponse } from "axios";

export default async function isDevLoggedIn(): Promise<boolean> {
    try {
        const res: AxiosResponse = await axios.get("/api/check")

        return res.status == 200
    } catch (error) {
        return false
    }
}