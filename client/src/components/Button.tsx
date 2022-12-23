import { MouseEvent } from "react"
import { IDefaultProps } from "../types/Components"

import { ThreeDots } from 'react-loader-spinner'

import style from './styles/Button.module.css'

interface Props extends IDefaultProps {
    evt?: (event: MouseEvent<HTMLButtonElement>) => void,
    isDisabled?: boolean
}

export default function Button({ children, evt, isDisabled = false }: Props) {
    return (
        <div className={style.btn}>
            <button onClick={evt} disabled={isDisabled}>
                { !isDisabled ? children : <ThreeDots width={15} height={15} color={"#fff"} /> }
            </button>
        </div>
    )
}