
import { ImgContainer } from '../img-container/ImgContainer'
import style from './Main.module.scss'

export const Main = () => {
  const images = ['', '', '', '', '', '', '', '', '', '', '', '']
    return (
      <main className={style.container}>
        <h1>Top Sales</h1> 
        <ImgContainer images={images}/>
        <button>See all <i className="fa-solid fa-chevron-right"></i> </button>
      </main>
    );
}