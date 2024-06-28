import { useState } from "react";
import { CardsProfile } from "../CardsProfile/CardsProfile";
import { ProfileResearch } from "../ProfileResearch/ProfileResearch";
import { PurchasesDate } from "../PurchasesData/PurchasesData";
import Reviews from "../Reviews/Reviews";
import SellerProfileMark from "../SellerProfileMark/SellerProfileMark";
import style from "./styles.module.scss";
import { TReviewsProfile } from "../../types/TReviewsProfile";
import { TProductProfile } from "../../types/TProductProfile";

export const ProfileSeller = () => {
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

  const [reviews, setReviews] = useState<TReviewsProfile[]>([
    {
      id: 0,
      username: "username_123456dfgbb5rsd",
      mark: 5,
      product: { source: "", price: "1 Ton" },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a leo sodales, aliquam purus sed, volutpat augue. Etiam et massa nunc. Maecenas molestie eros at ligula vulputate congue. Maecenas diam diam, mollis vel sollicitudin vitae, condimentum vel leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },{
      id: 0,
      username: "username_123456dfgbb5rsd",
      mark: 5,
      product: { source: "", price: "1 Ton" },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a leo sodales, aliquam purus sed, volutpat augue. Etiam et massa nunc. Maecenas molestie eros at ligula vulputate congue. Maecenas diam diam, mollis vel sollicitudin vitae, condimentum vel leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  return (
    <section className={`${style.profile} container`}>
      <SellerProfileMark />
      <ProfileResearch />
      <div className={style.mainCardsProfileAndPurchasesDate}>
        <div className={style.cardsMainProfile}>
          <CardsProfile cards={cards} />
        </div>
        <PurchasesDate />
      </div>
      <Reviews reviews={reviews} />
    </section>
  );
};
