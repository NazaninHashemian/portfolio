import styles from './ContactForm.module.css';

import { useState } from "react"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        alert('Thanks for reaching out!');
        
        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
    
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev,[name]: value}));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} action="">
            <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                onChange={handleChange} 
                value={formData.name}
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                onChange={handleChange} 
                value={formData.email}
            />
            <textarea
                name="message" 
                placeholder="Your Message" 
                required 
                onChange={handleChange}
                value = {formData.message}              
            />
            <button type="submit">Send message</button>
        </form>
    );
}
export default ContactForm;