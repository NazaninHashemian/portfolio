import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';
import { getImageurl } from './../../utils';


const ProjectCard = ({project: {imageSrc, title, description, skills, source, demo}
}) => {
  return (
    <div className={styles.cardContainer}>
      <a href={source} target="_blank" rel="noopener noreferrer">
        <img 
            src={getImageurl(imageSrc)} 
            alt={`Image of ${title}`} 
            className={styles.image}
        />
      </a>
      <h3  className={styles.title}>{title}</h3>
      <div className={styles.scrollableContent}>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>    
            {skills.map((skill, id) => {
                return (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                );
            })}   
        </ul>
      </div>
      <div className={styles.links}>
          <a href={demo} className={styles.link}>Demo</a>
          <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      demo: PropTypes.string,
      source: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ProjectCard;