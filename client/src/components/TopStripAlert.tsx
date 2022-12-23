import style from './styles/TopStripAlert.module.css'

import { IDefaultProps } from "../types/Components";

interface Props extends IDefaultProps {
    type: string
}

export default function TopStripAlert({ children, type }: Props) {

    return (
        <div className={`${style["strip-alert"]} ${style[type]}`}>{ children }</div>
    )
}