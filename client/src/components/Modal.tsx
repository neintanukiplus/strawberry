import style from './styles/Modal.module.css'

import { IDefaultProps } from "../types/Components";

interface Props extends IDefaultProps {
    isShowing: boolean
}

export default function Modal({ children, isShowing }: Props) {

    return (
        <>
            {
                isShowing &&
                <div className={style.modal}>
                    <div className={style.inner}>{ children }</div>
                </div>
            }
        </>
    )
}