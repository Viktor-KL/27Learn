import React from 'react';
import styles from './HomePage.module.css';
import indexStyles from './../../index.css';
import {NavLink} from "react-router-dom";


import homeHeaderImg from './../../assets/homePageHeaderImg.png';
import whiteArrow from './../../assets/whiteRightArrow.png';
import benefitsLibrary from './../../assets/library.png';
import benefitsClock from './../../assets/clock.png';
import benefitsWebinar from './../../assets/webinar.png';
import benefitsSupport from './../../assets/support.png';
import Question from "../../components/Question/Question";


const HomePage = () => {

    const benefitsArray = [
        {
            img: benefitsLibrary,
            title: 'Все в одному місці'
        },
        {
            img: benefitsClock,
            title: 'Доступ 24/7'
        },
        {
            img: benefitsWebinar,
            title: 'Онлай доступ'
        },
        {
            img: benefitsSupport,
            title: 'Підтримка вчителя'
        },
    ]




    return (
        <div>

            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <div className={styles.header__infoBlock}>
                            <h1 className={` ${indexStyles.main__title} ${styles.home__main__title}`}>Онлайн платформа для вивчення <br/> <span className="main__title-markText">IT-сфер</span></h1>
                            <p className="subtitle" className={styles.header__subtitle}>Програмування. 3D моделювання. Фотошоп. Розробка презентацій. Всьому цьому можна навчитися на сайті. <br/><br/>
                                * Розроблено спеціально для учнів 27-ої школи
                            </p>

                            <NavLink className={` ${styles.btn} ${styles.btn_green} ${styles.home__header__btn}`} to='/learn'>Почати навчання</NavLink>
                        </div>
                        <div className={styles.header__imgBlock}>
                            <img src={homeHeaderImg} alt="" className={styles.header__img}/>
                        </div>
                    </div>
                </div>


            </header>


            <section className="container tech">
                <div className='block-margin' className={styles.tech__wrap}>

                    <h2 className="title">; Доступні технології</h2>

                    <div className={styles.tech__blockWrap}>

                        <div className={styles.tech__block}>

                            <NavLink to='/learn/js'>
                                <div className={`${styles.tech__blockProgram} ${styles.tech__blockJs}`}></div>
                            </NavLink>

                            <div className={` ${styles.tech__blockInfo} ${styles.tech__blockInfoJs}`}>
                                <div className={` ${styles.tech__verticalLine} ${styles.tech__verticalLineJs} `}></div>
                                <div className={styles.tech__blockInfoText}>
                                    <h3 className={` ${styles.tech__blockTitle} ${indexStyles.c_light} `}>
                                        JavaScript
                                    </h3>
                                    <p className="subtitle">
                                        JavaScript - Мова програмування, яка найчастіше використовується для створення функціоналу вебсторінок на боці клієнту. Також має безліч фреймворків та бібліотек для різних задач, від бекенду, до блокчейн розробки.
                                    </p>
                                </div>
                            </div>

                            <NavLink to='/learn/js'>
                                <div className={` ${styles.tech__blockArrow} ${styles.tech__blockArrowJs}`}>
                                    <img className={styles.tech__blockArrowImg} src={whiteArrow} alt=""/>
                                </div>
                            </NavLink>

                        </div>

                        <div className={styles.tech__block}>

                            <NavLink to='/learn/photoshop'>
                                <div className={`${styles.tech__blockProgram} ${styles.tech__blockPs}`}></div>
                            </NavLink>

                            <div className={` ${styles.tech__blockInfo} ${styles.tech__blockInfoPs}`}>
                                <div className={` ${styles.tech__verticalLine} ${styles.tech__verticalLinePs} `}></div>
                                <div className={styles.tech__blockInfoText}>
                                    <h3 className={` ${styles.tech__blockTitle} ${styles.c_light} `}>
                                        Photoshop
                                    </h3>
                                    <p className="subtitle c_light">
                                        Adobe Photoshop - популярна программа для фотошопу. Також популярна серед веб та графічних дизайнерів. Можна як робити обробку фото, так і малювати, створювати дизайн.
                                    </p>
                                </div>
                            </div>

                            <NavLink to='/learn/ps'>
                                <div className={` ${styles.tech__blockArrow} ${styles.tech__blockArrowPs}`}>
                                    <img className={styles.tech__blockArrowImg} src={whiteArrow} alt=""/>
                                </div>
                            </NavLink>

                        </div>

                        <div className={styles.tech__block}>

                            <NavLink to='/learn/blender'>
                                <div className={`${styles.tech__blockProgram} ${styles.tech__blockBlender}`}></div>
                            </NavLink>

                            <div className={` ${styles.tech__blockInfo} ${styles.tech__blockInfoBlender}`}>
                                <div className={` ${styles.tech__verticalLine} ${styles.tech__verticalLineBlender} `}></div>
                                <div className={styles.tech__blockInfoText}>
                                    <h3 className={` ${styles.tech__blockTitle} ${indexStyles.c_light} `}>
                                        Blender
                                    </h3>
                                    <p className="subtitle">
                                        Blender - Программа для 3д модулювання. В ній безліч дизайнерів роблять різні анімації, еффекти, 3д персонажів і т.д. Має неймовірний набір інструментів та безліч можливостей.
                                    </p>
                                </div>
                            </div>

                            <NavLink to='/learn/blender'>
                                <div className={` ${styles.tech__blockArrow} ${styles.tech__blockArrowBlender}`}>
                                    <img className={styles.tech__blockArrowImg} src={whiteArrow} alt=""/>
                                </div>
                            </NavLink>

                        </div>

                        <div className={styles.tech__block}>

                            <NavLink to='/learn/powerpoint'>
                                <div className={`${styles.tech__blockProgram} ${styles.tech__blockPowerPoint}`}></div>
                            </NavLink>

                            <div className={` ${styles.tech__blockInfo} ${styles.tech__blockInfoPowerPoint}`}>
                                <div className={` ${styles.tech__verticalLine} ${styles.tech__verticalLinePowerPoint} `}></div>
                                <div className={styles.tech__blockInfoText}>
                                    <h3 className={` ${styles.tech__blockTitle} ${styles.c_light} `}>
                                        PowerPoint
                                    </h3>
                                    <p className="subtitle c_light">
                                        PowerPoint - Программа для створення різних презентацій. Зазвичай використовують учні, студенти, вчителі для подачі інформація. Можна робити як статичні, так і анімовані презентації.
                                    </p>
                                </div>
                            </div>

                            <NavLink to='/learn/js'>
                                <div className={` ${styles.tech__blockArrow} ${styles.tech__blockArrowPowerPoint}`}>
                                    <img className={styles.tech__blockArrowImg} src={whiteArrow} alt=""/>
                                </div>
                            </NavLink>

                        </div>

                    </div>
                </div>
            </section>


            <section className={styles.benefits}>
                <div className="container">
                    <h2 className="title c_light">
                        ; Переваги
                    </h2>

                    <div className={styles.benefits__blockWrap}>

                        {benefitsArray.map((item, key ) => (
                            <div key={key} className={styles.benefits__block}>

                                <img src={item.img} alt="onlineLibrary" className={styles.benefits__blockIcon}/>

                                <h3 className={styles.benefits__blockTitle} >
                                    {item.title}
                                </h3>

                            </div>
                        ))}


                    </div>
                </div>
            </section>


            <Question />
        </div>
    );
};

export default HomePage