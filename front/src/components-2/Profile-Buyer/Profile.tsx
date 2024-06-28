import { useState } from "react";
import { TProductProfile } from "../../types/TProductProfile";
import { CardsProfile } from "../CardsProfile/CardsProfile";
import { ProfileResearch } from "../ProfileResearch/ProfileResearch";
import { PurchasesDate } from "../PurchasesData/PurchasesData";
import style from "./Profile.module.scss";

export const ProfileBuyer = () => {
  const [cards, setCards] = useState<TProductProfile[]>([
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
    { source: "", price: "1 Ton" },
  ]);
  
  return (
    <section className={style.profile}>
      <ProfileResearch />
      <div className={style.mainCardsProfileAndPurchasesDate}>
        <div className={style.cardsMainProfile}>
          <CardsProfile cards={cards} />
        </div>
        <PurchasesDate />
      </div>
    </section>
  );
};
