import MyModal from '../../components/modal/MyModal'
import React, {useEffect, useState, useRef} from 'react';
const Index = () => {

    const [show, setShow] = useState(false);

    return (
        <div>

            <button onClick={() => { setShow(true); }}>
                Open Modal
            </button>

            <MyModal
                show={show}
                setShow={setShow}
                closeOnBgClick={true}
                closeOnEsc={true}
                closeBtn={() => { return <button onClick={() => { setShow(false); }} className="my-modal-close">Close</button>}}
            >
                <div>
                    Modal context is here
                </div>
            </MyModal>
            
        </div>
    )

}

export default Index;