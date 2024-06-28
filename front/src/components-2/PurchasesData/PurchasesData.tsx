import style from './PurchasesData.module.scss'

export const PurchasesDate = () => {
    return(
        <aside className={style.aside}>
            <h1>Total: </h1>
            <h1>Volume: </h1>
            <h1>Expensive: </h1>
        </aside>
    )
}