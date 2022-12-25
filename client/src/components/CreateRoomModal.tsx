import { IDefaultModal } from "../types/Components";
import Button from "./Button";
import Modal from "./Modal";
import TextInput from "./TextInput";

export default function CreateRoomModal({ isShowing }: IDefaultModal) {
    return (
        <Modal isShowing={isShowing}>
            <header className="modal-head">
                <h2>👻 Create Room</h2>
            </header>
            <section className="modal-body">
                <TextInput value="ak" evt={() => {}} />
            </section>
            <footer className="modal-footer">
                <Button>Join Room</Button>
            </footer>
        </Modal>
    )
}