import React from 'react';

import styles from './About.module.css'
import { getImageurl } from '../../utils';


const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageurl('about/aboutImage.png')}
                alt="Me sitting with a laptop." 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/cursorIcon.png')} 
                        alt="cursor Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I am a frontend developer with experience in building responsive
                            and optimized sites.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/serverIcon.png')} 
                        alt="server Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Freelance Web Developer</h3>
                        <p>
                            I excel in optimizing web applications for efficiency 
                            and performance, consistently exceeding client 
                            expectations with high-quality solutions.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/cursorIcon.png')} 
                        alt="UI Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Web Development Instructor</h3>
                        <p>
                            I guide students through frontend development, 
                            conducting code reviews and 
                            introducing JavaScript and React.js.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About


