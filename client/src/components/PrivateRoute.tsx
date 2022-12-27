import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isDevLoggedIn from "../services/isDevLoggedIn";
import { IDefaultProps } from "../types/Components";

export default function PrivateRoute({ children }: IDefaultProps) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await isDevLoggedIn()
            setIsLoggedIn(res)

            if (!res) {
                navigate("/")
            }
        })()
    }, [])

    return (
        <>{ isLoggedIn && children }</>
    )
}