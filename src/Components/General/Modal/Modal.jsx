import './Modal.scss'

const Modal = (props) => {
    return (
        <div className={props.active? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <span className={"modal__close"}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1.2959L1 17.2959M17 17.2959L1 1.2959L17 17.2959Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </span>
            <div className={"modal__content"} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;