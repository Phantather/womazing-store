import React, {useContext, useEffect} from 'react';
import Card from "../../components/Card/Card";
import {CustomContext} from "../../utils/Context";

const Store = () => {

    const {products, getAllProducts} = useContext(CustomContext)

   useEffect(() => {
       getAllProducts()
   },[])


    return (
        <section className="store">
            <div className="container">
                <h2 className="store__title">
                    Магазин
                </h2>
                <p>Главная - Магазин</p>
                <ul className="store__list">
                    <li className="store__item">
                        Все
                    </li>
                </ul>
                <div className="store__row">
                    {
                        products.map((item,idx) => (
                            <Card key={idx && item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Store;