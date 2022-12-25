import { IDefaultModal } from "../types/Components";
import Button from "./Button";
import Modal from "./Modal";

export default function RemoveRoomModal({ isShowing }: IDefaultModal) {
    return (
        <Modal isShowing={isShowing}>
            <header className="modal-header">
                <h1>💀 Warning</h1>
            </header>
            <section className="modal-body">
                <p>This action is irreversable. Are you really sure you want to <strong>remove this room</strong></p>
            </section>
            <footer className="modal-footer">
                <Button>Remove Room</Button>
            </footer>
        </Modal>
    )
}