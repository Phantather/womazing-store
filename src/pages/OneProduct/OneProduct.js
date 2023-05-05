import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Slider from "../Home/Slider/Slider";

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    const getOneProduct = () => {
        axios(`http://localhost:4444/clothes/${params.id}`)
            .then(({data}) => setProduct(data))
    }
    useEffect(() => {
        getOneProduct()
    }, [setProduct])


    console.log()
    return (
        <>
        <section className="oneproduct">
            <div className="container">
                <h2 className="oneproduct__title">
                    {product.title}
                </h2>
                <p className="oneproduct__desc">
                    Главная — Свитшоты — <span>Свитшот Sweet Shot</span>
                </p>
                <div className="oneproduct__row">
                    <div className="oneproduct__left" style={{background:`url(${`.${product?.img?.filter((item,idx) => idx === 0)}`}) center/cover`}}>

                    </div>
                    <div className="oneproduct__right">
                        <p className="oneproduct__price">
                            ${product.price} <span>${product.price * 1.2}</span>
                        </p>

                        <div className='oneproduct__sizes'>
                            <p>
                                Выберите размер
                            </p>
                            <div className="oneproduct__sizes-row">
                                {
                                    product?.sizes?.map(item => (
                                        <div className="oneproduct__size">
                                            {item.size}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='oneproduct__sizes'>
                            <p>
                                Выберите цвет
                            </p>
                            <div className="oneproduct__sizes-row">
                                {
                                    product?.colors?.map(item => (
                                        <div className="oneproduct__color" style={{background: item.color}}>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <button className="oneproduct__btn">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </section>
            <Slider/>
        </>
    );
};

export default OneProduct;