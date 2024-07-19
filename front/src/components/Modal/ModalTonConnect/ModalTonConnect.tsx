import { PropsWithChildren } from "react";

import styles from "./ModalTonConnect.module.scss";

interface Props extends PropsWithChildren {
    isOpen: boolean;
}

export function ModalTonConnect({ children, isOpen}: Props) {
    return (
        <div className={styles.modalTonConnect} style={{display: isOpen ? 'block' : 'none'}}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}

