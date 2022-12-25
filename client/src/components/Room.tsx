import style from './styles/Room.module.css'

import Button from "./Button";

export default function Room() {
    return (
        <div className={style.room}>
            <header>
                <h1>Demo Office</h1>
            </header>

            <footer>
                <div>
                    <p className="timestamp">Created at Jan. 14, 2023</p>
                </div>
                <div>
                    <Button>Join Meeting</Button>
                </div>
            </footer>
        </div>
    )
}