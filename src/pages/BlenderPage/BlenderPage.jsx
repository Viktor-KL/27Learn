import React from 'react';
import styles from './BlenderPage.module.css';
import indexStyles from "../../index.css";
import Question from "../../components/Question/Question";

const Blender = () => {

    const lessonsArray = [
        {
            title: 'Моделюємо чашку',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/Lz6riIhYZ0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Моделюємо ложку',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/FkeRWVnczD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Моделюємо стілець',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/6pO3yg-uiyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Анімація коливання маятника в Blender',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/Gabo1U5viMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Моделюємо сонячну систему',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/xI2CjQiBwiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {
            title: 'Модель фізичних процесів в Blender',
            lesson: <iframe className={styles.lesson__video} width="560" height="315" src="https://www.youtube.com/embed/foZfMvE_Bhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
    ]




    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className="container">
                    <div className={styles.header__wrap}>
                        <h1 className="main__title">
                            BLender
                        </h1>
                        <p className={` ${styles.header__subtitle} ${indexStyles.subtitle}`}>
                            Різноманітні уроки від вчителя по 3д моделюванню
                        </p>
                        <a href="#learn" className="btn btn-white">Дізнатися більше</a>
                    </div>
                </div>
            </div>


            <div id='learn' className={styles.lessons}>
                <div className="container">

                    <div className={styles.lessons__wrap}>
                        <h2 className="title">
                            ; Відеоуроки
                        </h2>


                        {lessonsArray.map((item, key) => (
                            <div className={styles.lessons__block} key={key}>
                                <h3 className={styles.lessons__blockTitle}>{item.title}</h3>
                                {item.lesson}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Question />

        </div>
    );
};

export default Blender