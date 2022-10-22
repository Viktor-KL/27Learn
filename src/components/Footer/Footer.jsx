import React from 'react';
import styles from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__wrap}>
                        <div>
                            <NavLink to='/' className={styles.footer__linksTitle}>
                                Головна
                            </NavLink>
                        </div>
                        <div className={styles.footer__linksWrap}>
                            <NavLink to='/learn' className={styles.footer__linksTitle}>
                                Навчання
                            </NavLink>
                            <NavLink to='/learn/powerpoint' className={styles.footer__links}>
                                PowerPoint
                            </NavLink>
                            <NavLink to='/learn/photoshop' className={styles.footer__links}>
                                Photoshop
                            </NavLink>
                            <NavLink to='/learn/js' className={styles.footer__links}>
                                JavaScript
                            </NavLink>
                            <NavLink to='/learn/blender' className={styles.footer__links}>
                                Blender
                            </NavLink>
                        </div>
                        <div>
                            <a target='_blank' href="https://t.me/ViktorKyrylovych" className={styles.footer__linksTitle}>
                                Підтримка
                            </a>
                        </div>
                        <div className={styles.footer__linksWrap}>
                            <a target='_blank' href="https://t.me/ViktorKyrylovych" className={styles.footer__links}>developer</a>
                            <a target='_blank' href="" className={styles.footer__links}>source code</a>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer