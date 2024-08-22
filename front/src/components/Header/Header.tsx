import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./styles.module.scss";
import Modal from "../Modal/Modal";
import { TonConnectButton} from "@tonconnect/ui-react";
import { ModalTonConnect } from "../Modal/ModalTonConnect/ModalTonConnect";
import { useTonConnect } from "../../hooks/useTonConnect";
import { useDeployerContract } from "../../hooks/useDeployerContract";
import { Address } from "ton-core";
import { UserData } from "../../wrappers/UserData";
import { address } from "@ton/core";
import { useIsContractDeployed } from "../../hooks/checkUserContract";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isModalTonConnect, setIsModalTonConnect] = useState<boolean>(false);

  const { wallet, sender, network } = useTonConnect();
  const { deployerContract, deployUser, userContract} = useDeployerContract()
  const {isDeployed, loading, error} = useIsContractDeployed(userContract?.address!)

  useEffect(() => {
    if (wallet && isDeployed !== null) {
        if (!isDeployed) {
            setIsModalTonConnect(true);
        } else {
            setIsModalTonConnect(false);
        }
    } else {
        setIsModalTonConnect(false);
    }
}, [wallet, isDeployed]);

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
            <TonConnectButton/>
          {/* <button
            className={styles.button}
            onClick={() => tonConnectUi.openModal()}
          >
            <i className="fa-solid fa-wallet"></i>Connect
          </button> */}
          <button
            onClick={openSearch}
            className={`${styles.searchButton} shown-mobile`}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        
        <Modal isOpen={isSearchOpen} close={() => setIsSearchOpen(false)}>
          <Search shownMobile={true} />
        </Modal>

        <ModalTonConnect isOpen={isModalTonConnect}>
          <div className={styles.modalTonConnect}>
            <span onClick={() => setIsModalTonConnect(false)}>X</span>
            <h1>Create your account ✅</h1>
            <p>
              To fully use our marketplace, you need to create a smart contract
              for your account.
            </p>
            <button onClick={() => deployUser()}>Create</button>
            <a href="/">Learn more</a>
          </div>
        </ModalTonConnect>
      </div>
    </header>
  );
}
