import React from 'react';
import { getImageurl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nazanin</h1>
            <p className={styles.description}>
                I'm a front-end developer with 5 years of exprience using React. 
                Reaching out if you'd like to learn more.
            </p>
            <a href="mailto:na.hashemian@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageurl('hero/heroImage.png')} 
            alt="Hero image of me" 
            className={styles.heroImg} 
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />    
    </section>
    
  )
}

export default Hero;
