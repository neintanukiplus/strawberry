import { IDefaultProps } from "../types/Components"

import style from './styles/Button.module.css'

export default function Button({ children }: IDefaultProps) {
    return (
        <div className={style.btn}>
            <button>{ children }</button>
        </div>
    )
}