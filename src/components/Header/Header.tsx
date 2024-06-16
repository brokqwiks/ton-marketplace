import { useState } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./styles.module.scss";
import Modal from "../Modal/Modal";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    function openSearch() {
        if (window.screen.width > 768) {
            setIsSearchOpen(false);
        } else {
            setIsSearchOpen(true);
        }
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Logo />
                <Search shownMobile={false} />
                <div className={styles.buttons}>
                    <a href="#" className={styles.button}>
                        <i className="fa-solid fa-wallet"></i>Connect
                    </a>
                    <button onClick={openSearch} className={`${styles.searchButton} shown-mobile`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <Modal isOpen={isSearchOpen} close={()=>setIsSearchOpen(false)}><Search shownMobile={true} /></Modal>
            </div>
        </header>
    );
}
