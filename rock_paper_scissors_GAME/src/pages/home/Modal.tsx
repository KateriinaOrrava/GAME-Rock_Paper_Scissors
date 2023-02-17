import React, { ReactNode }  from 'react'
import styles from './Modal.module.css'
import  ReactDOM  from 'react-dom'

import { useState } from 'react'
export type Modal = {
    children:ReactNode;
    open: boolean;
    onClose:() => void;
}

const Modal = (props:Modal) => {
    const [descr, setDescr] = useState('')
    if (!props.open) return null;

  return ReactDOM.createPortal(
    <div  className={styles.modalAround}>
        <div className={styles.modal}>
            <button onClick={props.onClose}>Close</button>
            {props.children}
        </div>
    </div>, 
    document.getElementById('portal') as HTMLElement
  )
}
export default Modal