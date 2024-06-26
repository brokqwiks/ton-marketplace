import style from './ProfileResearch.module.scss'
export const ProfileResearch = () => {
    return(
        <section className={style.profileResearch}>
            <h1><i className="fa-solid fa-magnifying-glass"></i></h1>
            <input type="text" placeholder='Search item'/>
            <button>Filter</button>
        </section>
    )
}