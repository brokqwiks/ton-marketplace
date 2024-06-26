import { CardsProfile } from "../CardsProfile/CardsProfile"
import { ProfileResearch } from "../ProfileResearch/ProfileResearch"
import { PurchasesDate } from "../PurchasesData/PurchasesData"
import style from './Profile.module.scss'
export const Profile = () => {
    const cards = [
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},
        {sourse: '', price: '1 Ton'},

    ]
    return(
        <section className={style.profile}>
            <ProfileResearch/>
            <div className={style.mainCardsProfileAndPurchasesDate}>
            <CardsProfile cards={cards}/>
            <PurchasesDate/>
            </div>
        </section>
    )
}