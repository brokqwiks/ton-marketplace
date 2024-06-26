import { Link } from "react-router-dom";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useState } from "react";
import style from "./styles.module.scss";

export default function UserPage() {
    const [pageMode, setPageMode] = useState<string>("buyer");
    return (
        <>
            <div className="container">
                <Link className={style.link} to="/">
                    {"<"}
                    <span>Home</span>
                </Link>
                <UserInfo />
                <ul className={style.buttonList}>
                    <li>
                        <button
                            className={pageMode == "buyer" ? style.activeButton : ""}
                            onClick={() => setPageMode("buyer")}
                        >
                            Buyer
                        </button>
                    </li>
                    <li>
                        <button
                            className={pageMode == "seller" ? style.activeButton : ""}
                            onClick={() => setPageMode("seller")}
                        >
                            Seller
                        </button>
                    </li>
                </ul>
                {pageMode}
            </div>
        </>
    );
}
