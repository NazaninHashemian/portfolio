import { getImageurl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{`Hi, I'm Nazanin`}</h1>
            <p className={styles.description}>
            {/* {`Passionate and driven Front-End Developer with expertise in React.js and modern JavaScript frameworks. Experienced in
            building responsive, user-friendly web applications, mentoring students, and optimizing UI performance. Adept at debugging and
            collaborating within cross-functional teams. Actively contributing to open-source projects and seeking a full-time development
            role to create impactful solutions.` } */}
  
            {/* {`Passionate Front-End Developer specializing in React.js and TypeScript, with proven experience building secure, 
            scalable, and performant web applications for real-world users. Skilled in API integration, debugging, and 
            optimizing complex UIs. Strong customer empathy and troubleshooting expertise, with a background in mentoring and 
            collaborating within cross-functional teams. Actively seeking an industrial full-time role to contribute impactful, 
            production-ready solutions.`} */}
            {`Front-End Developer skilled in React.js and TypeScript, with experience building scalable, performant applications 
            and integrating APIs. Strong troubleshooting and customer empathy. Experienced in collaborating with teams and 
            mentoring. Seeking a full-time industrial role to deliver high-quality, user-focused solutions.`}



            </p>
            {/* <a href="mailto:na.hashemian@gmail.com" className={styles.contactBtn} rel="noopener noreferrer">
                Contact Me
            </a> */}
            <a href="#contact" className={styles.contactBtn} rel="noopener noreferrer">Contact Me</a>
        </div>
        <img 
            src={getImageurl('hero/heroImage.png')} 
            alt="Hero image of me" 
            className={styles.heroImg} 
            loading="lazy"
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />    
    </section>
    
  )
}

export default Hero;
