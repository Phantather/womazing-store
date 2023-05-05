
import React, {useContext,useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import img from "../../../assets/home/Фото товара.png"



import { FreeMode, Navigation} from "swiper";
import {CustomContext} from "../../../utils/Context";



const Slider = () => {

    const {products,getAllProducts} = useContext(CustomContext)
    useEffect(() => {
        getAllProducts()
    },[])
    console.log(products)
    return (
        <section className="collection">
            <div className="container">
                <h2 className="collection__title">Новая коллекция</h2>

                    <>
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation
                    modules={[FreeMode,Navigation]}
                    className="mySwiper"
                    >
                        {
                            products.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="collection__card">
                                        <div className="collection__images" style={{background:`url(${`.${item?.img?.filter((item,idx) => idx === 0)}`}) center/cover`}}>

                                        </div>
                                        <h3 className='collection__card-title'>{item.title}</h3>
                                        <p className='collection__card-price'>${item.price}</p>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                        <SwiperSlide>
                            <div className="collection__card">
                                <div className="collection__images">
                                    <img className="collection__card-img" src={img} alt=""/>
                                </div>
                                <h3 className='collection__card-title'>Футболка USA</h3>
                                <p className='collection__card-price'>$129</p>
                            </div>

                        </SwiperSlide>

                    </Swiper>
                    </>

                <button className="collection__btn">
                    Открыть магазин
                </button>
            </div>
        </section>
    );
};

export default Slider;