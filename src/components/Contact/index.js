import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0vg76xe', 'template_04vcq87', refForm.current, 'RtVMao5YBtLLZ-KjZ')
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

  return (
    <div className="contact-page fade-in">
        <div className="form-section">
            <div className="container">
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type="text" name="from_name" placeholder="Name" required />
                            </li>
                            <li>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <input type="textarea" name="message" placeholder="Message" required />
                            </li>
                            <li>
                                <input type="submit" value="Send" className='btn btn-filled' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}