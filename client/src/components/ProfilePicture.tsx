import { toSvg } from 'jdenticon'

import style from './styles/ProfilePicture.module.css'

interface Props {
    value: string,
    size: number
}

export default function ProfilePicture({ value, size }: Props) {
    const svgString = toSvg(value, size)

    return (
        <div className={style["profile-picture"]} dangerouslySetInnerHTML={{__html: svgString}} />
    )
}