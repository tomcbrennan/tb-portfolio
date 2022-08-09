import './index.scss';

const Contact = () => {
    return (
        <>
            <div className="container contact-page"></div>
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
        </>
    )
}

export default Contact