import axios from "axios"

interface Props {
    value: string,
    setLoading: Function,
    setError: Function
}

export default async function verifyDeveloper({ value, setLoading, setError }: Props): Promise<boolean> {
    setLoading(true)

    try {
        const res = await axios.post('/api/verify', {
            dev_key: value
        })

        if (res.status == 200) {
            return true
        }
    } catch (error: any) {
        if (error?.response) {
            const { data, status } = error.response
            
            if (status >= 400 && status < 500) {
                setError({
                    isDenied: true,
                    msg: data.message?? "Bad Request",
                    type: "danger"
                })
            } else {
                setError({
                    isDenied: true,
                    msg: data.message ?? "Something went wrong",
                    type: "warning"
                })
            }
        } else {
            setError({
                isDenied: true,
                msg: "Check your connection",
                type: "warning"
            })             
        }
    } finally {
        setLoading(false)
    }

    return false
}