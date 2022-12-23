import { ChangeEvent, useState } from 'react'
import axios from 'axios'

import style from './styles/Homepage.module.css'

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import VersionInfo from '../components/VersionInfo'
import TopStripAlert from '../components/TopStripAlert'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const nav = useNavigate()
    const [developerKey, setDeveloperKey] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState({
        isDenied: false,
        msg: '',
        type: 'danger'
    })

    async function launch(e: ChangeEvent<HTMLFormElement> ) {
        e.preventDefault()

        setIsLoading(true)

        try {
            const res = await axios.post('/api/verify', {
                dev_key: developerKey
            })

            if (res.status == 200) {
                nav('/dashboard')
            }
        } catch (error: any) {
            if (error?.response) {
                const { data, status } = error.response
                
                if (status >= 400 && status < 500) {
                    setErr({
                        isDenied: true,
                        msg: data.message?? "Bad Request",
                        type: "danger"
                    })
                } else {
                    setErr({
                        isDenied: true,
                        msg: data.message ?? "Something went wrong",
                        type: "warning"
                    })
                }
            } else {
                setErr({
                    isDenied: true,
                    msg: "Check your connection",
                    type: "warning"
                })             
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className={style.homepage}>
            <form action="#" onSubmit={launch}>
                <header>
                    <h1 className='title'>🍓 Greetings!</h1>
                    <p className='subtitle'>This is a <strong>very early demo</strong> of the finished product. As the development goes by, many changes may occur. It's also worth keeping in mind that some features of the app may not work and could contain several bugs. <br /> For updates, join our discord</p>
                </header>
                <section>
                    <TextInput
                        placeholder='Developer Key'
                        value={developerKey}
                        evt={setDeveloperKey}
                        isError={err.isDenied}
                    />
                </section>
                <footer>
                    <Button isDisabled={isLoading}>Launch Application</Button>
                </footer>
            </form>

            <VersionInfo />

            { err.isDenied && <TopStripAlert type={err.type}>{err.msg}</TopStripAlert> }
        </main>
    )
}