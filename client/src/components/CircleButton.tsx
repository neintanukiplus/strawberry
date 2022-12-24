import { IDefaultProps } from "../types/Components";

import style from "./styles/Button.module.css"

export default function CircleButton({ children }: IDefaultProps) {
    return (
        <div className={style["circle-btn"]}>
            <button>{children}</button>
        </div>
    )
}