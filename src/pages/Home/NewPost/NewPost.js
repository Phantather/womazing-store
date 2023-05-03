import React from 'react';
import img from "../../../assets/home/dmitriy-7DD6tfTKqS4-unsplash 1.png"
import position from "../../../assets/home/Rectangle 1.png"
const NewPost = () => {
    return (

        <section className="newpost">
            <div className="container">
                <div className="newpost__row">
                    <div className="newpost__left">
                        <h2 className="newpost__left-title">Новые поступления
                            в этом сезоне</h2>
                        <p className="newpost__left-desc">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                        <div>
                            <svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="67" height="67" transform="translate(0 0.5)" fill="#6E9C9F" fillOpacity="0.1"/>
                                <path d="M33 20V48M33 48L26 40.8108M33 48L40 40.8108" stroke="#6E9C9F"/>
                            </svg>
                            <button className="newpost__left-btn">
                                Открыть магазин
                            </button>
                        </div>
                    </div>

                    <div className="newpost__right">
                        <img src={img} alt=""/>
                        <img className="newpost__bg" src={position} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewPost;