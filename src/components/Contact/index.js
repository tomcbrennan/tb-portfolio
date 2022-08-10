import './index.scss';

export default function Contact() {
  return (
    <div className="container contact-page">
        <div className="contact-content">
            <div className="contact-form">
                <form>
                    <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
  )
}