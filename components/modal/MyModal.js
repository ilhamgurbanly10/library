import React, {useEffect, useState, useRef} from 'react';

const MyModal = ({children, show, setShow, closeOnBgClick = true, closeOnEsc = true, closeBtn: CloseBtn = () => { }}) => {

    const closeOnEscFunc = () => {
        document?.documentElement?.addEventListener('keyup', (e) => { if (e.keyCode == 27) setShow(false); })
    }

    useEffect(() => { if (closeOnEsc) closeOnEscFunc(); }, [])

    return (
        <div className={`my-modal ${show ? 'show' : ''}`} onClick={() => { if (closeOnBgClick) setShow(false) }}>
            <div onClick={(e) => { e.stopPropagation(); }} className="my-modal-content">{<CloseBtn/>}{children}</div>
        </div>
    )

}

export default MyModal;