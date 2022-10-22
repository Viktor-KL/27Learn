import React from 'react';
import styles from './LearnPage.module.css';
import indexStyles from './../../index.css';
import {NavLink} from "react-router-dom";

import learnJs from './../../assets/learnJs.png';
import learnPs from './../../assets/learnPs.png';
import learnPowerPoint from './../../assets/learnPowerPoint.png';
import learnBlender from './../../assets/learnBlender.png';


const LearnPage = () => {

    const learnTechArray = [
        {
            img: learnPowerPoint,
            class: 'learn__blockPowerPoint',
            title: 'PowerPoint',
            subtitle: 'PowerPoint - Программа для створення різних презентацій. Зазвичай використовують учні, студенти, вчителі для подачі інформація. Можна робити як статичні, так і анімовані презентації.',
            btnClass: ` ${styles.learnBtn} ${styles.learnBtn_pp}`,
            btnNavLink: '/learn/powerpoint',
            NavLink: '/learn/powerpoint'
        },
        {
            img: learnPs,
            class: 'learn__blockPs',
            title: 'Photoshop',
            subtitle: 'Adobe Photoshop - популярна программа для фотошопу. Також популярна серед веб та графічних дизайнерів. Можна як робити обробку фото, так і малювати, створювати дизайн.',
            btnClass: ` ${styles.learnBtn} ${styles.learnBtn_ps}`,
            btnNavLink: '/learn/photoshop',
            NavLink: '/learn/photoshop'

        },
        {
            img: learnJs,
            class: 'learn__blockJs',
            title: 'JavaScript',
            subtitle: 'JavaScript - Мова програмування, яка найчастіше використовується для створення функціоналу вебсторінок на боці клієнту. Також має безліч фреймворків та бібліотек для різних задач, від бекенду, до блокчейн розробки.\n',
            btnClass: ` ${styles.learnBtn} ${styles.learnBtn_js}`,
            btnNavLink: '/learn/js',
            NavLink: '/learn/js'

        },

        {
            img: learnBlender,
            class: 'learn__blockBlender',
            title: 'Blender',
            subtitle: 'Blender - Программа для 3д модулювання. В ній безліч дизайнерів роблять різні анімації, еффекти, 3д персонажів і т.д. Має неймовірний набір інструментів та безліч можливостей.',
            btnClass: ` ${styles.learnBtn} ${styles.learnBtn_blender}`,
            btnNavLink: '/learn/blender',
            NavLink: '/learn/blender'

        }
    ]



    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <h1 className={` ${indexStyles.main__title} ${styles.learn__main__title}`}>
                            Почни навчання прямо зараз
                        </h1>
                        <p className={` ${styles.header__subtitle} ${indexStyles.subtitle}`}>
                            Гортай вниз або тисни кнопку нижче
                        </p>
                        <a href="#learn" className="btn btn-green">Почати навчання</a>

                    </div>
                </div>
            </header>


            <section className={styles.learn}>
                <div className={styles.learn__wrap}>

                    {learnTechArray.map((item, key) => (
                        <NavLink className={` ${styles.learn__block} ${styles[item.class]}`} key={key} to={item.NavLink}>
                            <img src={item.img} alt="tech" className={styles.learn__blockImg}/>

                            <div className={styles.learn__info} key={key}>
                                <h2 className={styles.learn__infoTitle}>{item.title}</h2>
                                <p className={` ${styles.learn__infoSubtitle} ${indexStyles.subtitle}`}>{item.subtitle}</p>
                                <NavLink className={item.btnClass} to={item.btnNavLink}>Почати навчання</NavLink>
                            </div>

                        </NavLink>




                    ))}

                </div>
            </section>
        </div>
    );
};

export default LearnPage