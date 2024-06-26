import style from "./styles.module.scss";

export default function UserInfo() {
    return (
        <div className={style.userInfo}>
            <div className={style.userBackground}></div>
            <div className={style.userWrapper}>
                <div className={style.user}>
                    <div className={style.userPhoto}></div>
                    <h3 className={style.userName}>User MarketPlace</h3>
                </div>
                <div className={style.userKeys}>
                    <ul>
                        <li>
                            Owner: <span>EQDi6Y…O-3K</span>
                        </li>
                        <li>
                            Contract: <span>EQAF...3-Rdnp</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
