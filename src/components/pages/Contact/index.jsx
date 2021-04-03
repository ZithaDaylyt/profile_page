import React, { useState } from 'react'
import Header from '../../Header';
import './Contact.css';

function Contact() {

    const [ values, setValues ] = useState({
        fullname : '',
        email : '',
        text_msg: '',
    });

    const [errors, setErrors ] = useState({});
    
    const handleChange = (event) =>{
        const {name,value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = () =>{
        setValues({
            fullname: '',
            email: '',
            text_msg: '',
        });
        setErrors(validate())
       
    };
    const validate = () =>{
        let errors = {};
        if(!values.fullname.trim()){
            errors.fullname = 'Full name required'
        }
        if(!values.email.trim()){
            errors.email = 'Email required'
        }
        if(!values.text_msg.trim()){
            errors.text_msg = 'Text message required'
        }
        return errors;
    }
    return (
        <>
            <Header/>
            <div className="cont-wrapper">
                <h1>Contact Me</h1>
                <div className="form-wrapper">
                    <label htmlFor="fullname">FullName*</label>
                    <input
                        type='text'
                        name='fullname'
                        placeholder='enter full name'
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    { errors && <p className='error'>{errors.fullname}</p>}

                    <label htmlFor="email">Email*</label>
                    <input 
                        type="email"
                        name='email'
                        placeholder='enter email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    { errors && <p className='error'>{errors.email}</p>}
                    
                    <label htmlFor="textarea">Message</label>
                    <textarea
                        type='text'
                        name='text_msg'
                        placeholder='message'
                        value={values.text_msg}
                        onChange={handleChange}
                     />
                     { errors && <p className='error'>{errors.text_msg}</p>}

                     <div className='btn-wrapper'>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                     </div>
                </div>
            </div>
        </>
    )
}

export default Contact;  
