import { TCardsProfile } from "../../types/TCardsProfile";
import style from "./CardsProfile.module.scss";

export const CardsProfile = ({ cards }: TCardsProfile) => {
  return (
    <article className={style.cardsProfile}>
      {cards.map((cards, index) => {
        return (
          <div key={index} className={style.cardsContainer}>
            <img src={cards.sourse} alt="" />
            <h1>{cards.price}</h1>
          </div>
        );
      })}
    </article>
  );
};
