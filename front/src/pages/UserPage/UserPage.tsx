import { Link } from "react-router-dom";
import UserInfo from "../../components-2/UserInfo/UserInfo";
import { useState } from "react";
import style from "./styles.module.scss";
import { ProfileBuyer } from "../../components-2/Profile-Buyer/Profile";
import { ProfileSeller } from "../../components-2/Profile-Seller/Profile";

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
        {pageMode === "buyer" ? <ProfileBuyer /> : <ProfileSeller />}
      </div>
    </>
  );
}
