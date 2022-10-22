import React from 'react';
import styles from './PowerPointPage.module.css';
import indexStyles from "../../index.css";
import Question from "../../components/Question/Question";


const PowerPointPage = () => {

    const casesArray = [
        {
            title: 'Презентація №1',
            video: <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/sAPDr7mfflU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Презентація №2',
            video: <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/cS5kYUBY9oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Презентація №3',
            video: <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/g4Ho7JF4Hl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Презентація №4',
            video: <iframe className={styles.cases__video} width="560" height="315" src="https://www.youtube.com/embed/P2JiKbBA8Co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        }
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