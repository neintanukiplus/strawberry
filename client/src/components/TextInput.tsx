import { ChangeEvent } from "react"

import style from './styles/TextInput.module.css'

interface Props {
    name?: string,
    id?: string,
    placeholder?: string,
    value: string,
    evt: Function
}

export default function TextInput({
    name = 'text-input',
    id = 'text-input',
    placeholder,
    value,
    evt
}: Props) {

    function setEvt(e: ChangeEvent<HTMLInputElement>) {
        evt(e.target.value)
    }

    return (
        <div className={style["text-input"]}>
            <input
            type="text"
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={setEvt} />
        </div>
    )
}