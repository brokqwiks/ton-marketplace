import { CardsProfile } from "../../components-2/CardsProfile/CardsProfile";
import style from './Reviews.module.scss'
export const Reviews = () => {
  const cards = [
    {
      sourse: "",
      price: "1 Ton",
      imgSale: <i className="fa-solid fa-basket-shopping"></i>,
    },
  ];

  return (
    <section className={style.Reviews}>
      <h1>Reviews</h1>
      <div className={style.reviewsAllInfo}>
        <div className={style.reviewsHeaderInfo}>
          <img src="" alt="" className={style.avatar}/>
          <div className={style.reviewsNameAndStar}>
            <h2>username</h2>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={style.cardsSize}>
            <CardsProfile cards={cards} />
          </div>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
          nobis error asperiores nam labore dignissimos, laboriosam incidunt in
          necessitatibus, cupiditate temporibus voluptates mollitia atque earum
          at? Deserunt, rerum vitae.
        </p>
      </div>
    </section>
  );
};
