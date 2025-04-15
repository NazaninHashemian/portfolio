import { getImageurl } from '../../utils';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      
      <h2 className={styles.title}>Contact</h2>
      {/* <h3 className={styles.message}>Feel free to reach out to me!</h3> */}
      <div className={styles.content}>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <img src={getImageurl('contact/emailIcon.png')} alt="Email" />
            <a href="mailto:na.hashemian@gmail.com">na.hashemian@gmail.com</a>
          </li>
          <li className={styles.linkItem}>
            <img src={getImageurl('contact/linkedinIcon.png')} alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/nazanin-hashemian"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nazanin-hashemian
            </a>
          </li>
          <li className={styles.linkItem}>
            <img src={getImageurl('contact/githubIcon.png')} alt="GitHub" />
            <a
              href="https://github.com/NazaninHashemian"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/NazaninHashemian
            </a>
          </li>
        </ul>
      </div>

      {/* Resume button in its own container */}
      <div className={styles.resumeContainer}>
        <a
          href="/NazaninHashemian_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
