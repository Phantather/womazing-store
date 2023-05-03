import React from 'react';
import teamImg from "../../../assets/home/adam-winger-fI-TKWjKYls-unsplash 1.png"
import {Link} from "react-router-dom";
const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <h2 className="us__title">Команда мечты Womazing</h2>
                <div className="team__row">
                    <div className="team__left">
                        <img src={teamImg} alt=""/>
                    </div>
                    <div className="team__right">
                        <h3 className='team__right-title'>
                            Для каждой
                        </h3>
                        <p className='team__right-desc'>
                            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                            <br/>
                            <br/>
                            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
                        </p>
                        <Link className="team__right-link">Подробнее о бренде</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;