import React from 'react';
import styles from './PowerPointPage.module.css';
import indexStyles from "../../index.css";
import Question from "../../components/Question/Question";


const PowerPointPage = () => {

    const casesArray = [
        {
            title: 'Презентація №1',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/2lNoBhANEDw"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen>
                    </iframe>
        },
        {
            title: 'Презентація №2',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/yQnNDjdyuuM"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
        },
        {
            title: 'Презентація №3',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/U8gpclltKDs"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
        },
        {
            title: 'Презентація №4',
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/lFt5rbMPGuw"
                           title="YouTube video player" frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen></iframe>
        }
    ]




    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <h1 className="main__title">
                            PowerPoint
                        </h1>
                        <p className={` ${styles.header__subtitle} ${indexStyles.subtitle}`}>
                            Приклади робіт в школі, які були зроблені за допомогою уроків

                        </p>
                        <a href="#learn" className="btn btn-pp">Дізнатися більше</a>
                    </div>
                </div>
            </div>

            <div id='learn' className={styles.cases}>
                <div className="container">
                    <h2 className="title">
                        ; Приклади робіт
                    </h2>
                    <div className={styles.cases__wrap}>
                        {casesArray.map((item, key) => (
                            <div className={styles.cases__block} key={key}>
                                <h3 className={styles.cases__blockTitle}>{item.title}</h3>
                                {item.video}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Question />
        </div>
    );
};

export default PowerPointPage