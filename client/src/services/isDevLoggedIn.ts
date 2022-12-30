import axios, { AxiosResponse } from "axios";

export default async function isDevLoggedIn(): Promise<null|AxiosResponse> {
    try {
        const res: AxiosResponse = await axios.get("/api/check")

        if (res.status == 200) {
            return res
        }

        return null
    } catch (error) {
        return null
    }
}