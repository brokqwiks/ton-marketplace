import { TProductProfile } from "../../types/TProductProfile";
import style from "./CardsProfile.module.scss";

interface Props {
  cards: TProductProfile[]
}

export const CardsProfile = ({ cards }:  Props) => {
  return (
    <article className={style.cardsProfile}>
      {cards.map((cards, index) => {
        return (
          <div key={index} className={style.cardsContainer}>
            <img src={cards.sourse} alt="" />
            <h1><span>{cards.imgSale}</span>{cards.price}</h1>
          </div>
        );
      })}
    </article>
  );
};
