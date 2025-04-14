import { getImageurl } from '../../utils';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                        src={getImageurl('contact/emailIcon.png')} 
                        alt="Email Icon" 
                    />
                    <a href="mailto:na.hashemian@gmail.com">
                        na.hashemian@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageurl('contact/linkedinIcon.png')} 
                        alt="linkedin Icon" 
                    />
                    <a href="https://www.linkedin.com/in/nazanin-hashemian">
                        linkedin.com/in/nazanin-hashemian
                    </a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageurl('contact/githubIcon.png')} 
                        alt="Github Icon" 
                    />
                    <a href="https://github.com/NazaninHashemian">
                        github.com/NazaninHashemian
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Contact;
