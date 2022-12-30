import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isDevLoggedIn from "../services/isDevLoggedIn";
import { IDefaultProps } from "../types/Components";
import { ServerDataContext } from "../contexts/ServerDataContext";

export default function PrivateRoute({ children }: IDefaultProps) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        (async () => {
            const res: (AxiosResponse|null) = await isDevLoggedIn()

            if (!res) {
                setIsLoggedIn(false)
                navigate("/")
            } else {
                setData(res?.data.dev)
                setIsLoggedIn(true)
            }
        })()
    }, [])

    return (
        <>{ isLoggedIn && <ServerDataContext.Provider value={data}>{children}</ServerDataContext.Provider> }</>
    )
}