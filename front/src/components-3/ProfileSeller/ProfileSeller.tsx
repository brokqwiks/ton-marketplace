import { CardsProfile } from "../../components-2/CardsProfile/CardsProfile"
import { ProfileResearch } from "../../components-2/ProfileResearch/ProfileResearch"
import { PurchasesDate } from "../../components-2/PurchasesData/PurchasesData"
import style from '../../components-2/Profile/Profile.module.scss'
import { Reviews } from "../Reviews/Reviews"

export const ProfileSeller = () => {
    const cards = [
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
        {sourse: '', price: '1 Ton', imgSale: <i className="fa-solid fa-basket-shopping"></i>},
    ]
    return (
      <>
        <section className={style.profile}>
          <ProfileResearch />
          <div className={style.mainCardsProfileAndPurchasesDate}>
            <div className={style.cardsMainProfile}>
              <CardsProfile cards={cards} />
            </div>
            <PurchasesDate />
          </div>
          <Reviews/>
        </section>
      </>
    );
}