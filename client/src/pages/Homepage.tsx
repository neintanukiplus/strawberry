import { ChangeEvent, useState } from 'react'

import style from './styles/Homepage.module.css'

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import VersionInfo from '../components/VersionInfo'

export default function Homepage() {
    const [developerKey, setDeveloperKey] = useState('')

    function launch(e: ChangeEvent<HTMLFormElement> ) {
        e.preventDefault()
    }


    return (
        <main className={style.homepage}>
            <form action="#">
                <header>
                    <h1 className='title'>🍓 Greetings!</h1>
                    <p className='subtitle'>This is a <strong>very early demo</strong> of the finished product. As the development goes by, many changes may occur. It's also worth keeping in mind that some features of the app may not work and could contain several bugs. <br /> For updates, join our discord</p>
                </header>
                <section>
                    <TextInput
                        placeholder='Developer Key'
                        value={developerKey}
                        evt={setDeveloperKey}
                    />
                </section>
                <footer>
                    <Button>Launch Dashboard</Button>
                </footer>
            </form>

            <VersionInfo />
        </main>
    )
}