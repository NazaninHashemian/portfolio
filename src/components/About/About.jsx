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
                        <h3>Front-End Focused</h3>
                        <p>
                            {`Passionate Front-End Developer with hands-on experience in building responsive and accessible web apps using React.js,
                             TypeScript, and modern JavaScript frameworks. I love creating clean, interactive UIs and optimizing for performance.`}
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/serverIcon.png')} 
                        alt="server Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Real Projects & Results</h3>
                        <p>
                            From recipe finder apps to full-stack movie rental platforms, I’ve developed various scalable, 
                            mobile-friendly applications. I leverage tools like Zustand, Redux, and React Query for 
                            effective state and data management.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/cursorIcon.png')} 
                        alt="UI Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Commitment & Collaboration</h3>
                        <p>
                            Experienced in team-based development and mentoring junior devs. I actively keep up 
                            with trends and integrate new practices to build better products and learning experiences.
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About


