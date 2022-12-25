import CircleButton from '../components/CircleButton'
import ProfilePicture from '../components/ProfilePicture'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import style from './styles/Dashboard.module.css'
import Modal from '../components/Modal'
import CreateRoomModal from '../components/CreateRoomModal'
import RemoveRoomModal from '../components/RemoveRoomModal'
import Room from '../components/Room'

export default function Dashboard() {

    return (
        <main className={style.dashboard}>
            <div className={style["inner-container"]}>
                <nav><ProfilePicture value='Romero' size={30} />Romero</nav>
                <header>
                    <div className={style.left}>
                        <h1 className='title'>Dashboard</h1>
                        <p className='subtitle'>This is your dashboard. For now, you can only join, create, and remove rooms. More features will follow soon. Stay tuned!</p>
                    </div>
                
                    <div className={style.right}>
                        <CircleButton><FontAwesomeIcon icon={faPlus} size={"2x"} color={"#fff"} /></CircleButton>
                    </div>
                </header>

                <section className={style.rooms}>
                    <Room />
                    <Room />
                </section>
            </div>

            {/* <CreateRoomModal isShowing={true} /> */}
            {/* <RemoveRoomModal isShowing={true} /> */}
        </main>
    )
}