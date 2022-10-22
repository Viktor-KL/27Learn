import React from 'react';
import styles from './PsPage.module.css';
import indexStyels from './../../index.css';
import indexStyles from "../../index.css";
import Question from "../../components/Question/Question";


const PsPage = () => {

    const lessonsArray = [
        {
            title: 'Будуємо будинок',
            iframe: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/30QGzGcybU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Практика в Adobe Photoshop',
            iframe: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/yKYYOJSViw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Колаж, вітальна листівка',
            iframe: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/UtplLGuGbuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Виготовлення колажу свого міста',
            iframe: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/IGJf4vQN3ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Робота з фільтрами в Adobe Photoshop',
            iframe: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/pMkppnOri8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    ]







    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <h1 className="main__title">
                            Photoshop
                        </h1>
                        <p className={` ${styles.header__subtitle} ${indexStyles.subtitle}`}>
                            Багато відероків від вчителя, приклади робіт
                        </p>
                        <a href="#learn" className="btn btn-darkBlue">Дізнатися більше</a>
                    </div>
                </div>
            </div>


            <div id='learn' className={styles.lessons}>
                <div className="container">
                    <div className={styles.lessons__wrap}>
                        <h2 className="title">; Відеоуроки</h2>
                        {lessonsArray.map((item, key) => (
                            <div className={styles.lessons__block} key={key}>
                                <h3 className={styles.lessons__blockTitle}>{item.title}</h3>
                                {item.iframe}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Question />

        </div>

    );
};

export default PsPage