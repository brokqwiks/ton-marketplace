import { useState } from 'react'
import style from './styles.module.scss'
import { ImgContainer } from '../img-container/ImgContainer'

export default function WhatATon() {
    const [images, setImages] = useState<string[]>(['','',''])
    return (
        <section className={`container ${style.container}`}>
            <h1 className={style.title}>What a TON?</h1>
            <ImgContainer images={images} />    
        </section>
    )
}