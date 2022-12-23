import { ChangeEvent } from "react"

import style from './styles/TextInput.module.css'

interface Props {
    name?: string,
    id?: string,
    placeholder?: string,
    value: string,
    isError?: boolean,
    evt: Function
}

export default function TextInput({
    name = 'text-input',
    id = 'text-input',
    placeholder,
    value,
    isError = false,
    evt
}: Props) {

    function setEvt(e: ChangeEvent<HTMLInputElement>) {
        evt(e.target.value)
    }

    return (
        <div className={`${style["text-input"]} ${isError && style['error']}`}>
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