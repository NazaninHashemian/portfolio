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
                        <h3>Specialization and Expertise:</h3>
                        <p>
                            {`I'm a seasoned freelance web developer 
                            specializing in React and advanced data caching with React Query.`}
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/serverIcon.png')} 
                        alt="server Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Experience and Strengths:</h3>
                        <p>
                            Proficient in coding tests, I specialize in crafting 
                            visually captivating websites with clean code and 
                            user-friendly interfaces. Additionally, I possess 
                            knowledge of Node.js and PHP to support my work.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageurl('about/cursorIcon.png')} 
                        alt="UI Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Commitment and Collaboration:</h3>
                        <p>
                            Adept at staying current with industry trends 
                            and collaborating effectively in teams. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About


