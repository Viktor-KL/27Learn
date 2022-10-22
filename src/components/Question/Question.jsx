import React from 'react';
import styles from './Question.module.css'




const Question = () => {
    return (
        <div className={styles.questions}>
            <div className={styles.questions__wrap}>
                <div className={styles.questions__block}>
                    <h2 className="title">Залишилися питання?</h2>
                    <a target='_blank' href='https://t.me/ViktorKyrylovych'  className="btn btn-green questions__btn" >Запитати</a>
                </div>
            </div>

        </div>


);
};

export default Question