import React from 'react';
import styles from './JsPage.module.css';
import indexStyles from './../../index.css';

import jsBook from './../../assets/jsBook.png';
import Question from "../../components/Question/Question";



const JsPage = () => {



    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <h1 className="main__title">
                            JavaScript
                        </h1>
                        <p className={` ${styles.header__subtitle} ${indexStyles.subtitle}`}>
                            Приклади робіт в школі, та посилання на дуже корисну книгу
                        </p>
                        <a href="#learn" className="btn btn-yellow">Дізнатися більше</a>
                    </div>
                </div>
            </div>

            <div id='learn' className={styles.cases}>
                <div className="container">
                    <div className={styles.cases__wrap}>
                        <h2 className="title">
                            ; Приклади робіт в школі
                        </h2>

                        <h3 className={styles.cases__blockTitle}>
                            Обчислення квадратного рівняння
                        </h3>
                        <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/Pt_qCgzoK5s"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>

                        <h3 className={styles.cases__blockTitle}>
                            Відслідкування курсору
                        </h3>
                        <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/wracl8K4cBc"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>
                    </div>
                </div>
            </div>


            <div className={styles.book}>
                <div className="container">
                    <h2 className="title">
                        ; Корисна книга по JavaScript
                    </h2>
                    <div className={styles.book__wrap}>
                        <div className={styles.book__imgBlock}>
                            <img className={styles.book__jsBook} src={jsBook} alt="js book"/>
                        </div>

                        <div className={styles.book__infoBlock}>
                            <h2 className={styles.book__infoBlockTitle}>
                                JavaScript для дітей
                            </h2>
                            <p className={`${styles.book__infoBlockSubtitle} ${indexStyles.subtitle}`}>
                                Книжка «JavaScript для дітей. Веселий вступ до програмування» Ніка Моргана – це товстенька інструкція з практичними завданнями, яка створена для дітей і підлітків, чия цікавість до комп’ютерних технологій не обмежується лише іграми, у які можна пограти. Дане видання є посібником, де викладені основи програмування. Хоч він і розрахований на юного читача, але кожен дорослий так само може ним скористатись, щоби отримати знання і навчитись власноруч писати програми. <br/><br/>

                                *На жаль російською
                            </p>
                            <a target='_blank-' href="https://drive.google.com/drive/folders/1n0YtXZ7KQkblFO7Qkw0jKIeLeFBsew-8?usp=sharing" className="btn btn-green learn__js__book__btn">Завантажити</a>
                        </div>
                    </div>
                </div>
            </div>

            <Question />

        </div>
    );
};

export default JsPage