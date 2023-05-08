import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import img from "../../assets/home/Фото товара.png"
import {CustomContext} from "../../utils/Context";
const Cart = () => {
    const {cart} = useContext(CustomContext)
    console.log(cart)
    return (
        <section className={"cart"}>
            <div className="container">
                <h2 className="cart__title">
                    Корзина
                </h2>
                <p>
                    Главная — <span>Корзина</span>
                </p>
                <ul className="cart__menu">
                    <li className='cart__menu-item'>Товар</li>
                    <li className='cart__menu-item'>Цена</li>
                    <li className='cart__menu-item'>Количество</li>
                    <li className='cart__menu-item'>Всего</li>
                </ul>
                <div className="cart__row">
                    {
                        cart.map(item => (

                            <div className="cart__card" key={item.id}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M13 1L1 13" stroke="black"/>
                                </svg>
                                <img className="cart__card-img" src={item.img[0]} alt=""/>
                                <h3 className='cart__card-title'>
                                    {item.title}
                                </h3>
                                <p className="cart__card-price">
                                    {item.price}
                                </p>
                                <p className="cart__card-count">
                                    {item.count}
                                </p>
                                <p className='cart__card-price'>
                                    {item.price * item.count}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;