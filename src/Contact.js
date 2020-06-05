import React from "react";

const Contact = () => {
    return (
<div>
        <section className="wrapper-outer">
            <div className="wrapper-inner">
                <div className="contact-details">
                    <h2>Contact details</h2>
                    <p>Travel website simple website design darn Travel design webdesign. Travelblogger Travel website whimsical colorful modern blogger.</p>
                </div>
                <ul className="contact-list">
                    <li>
                        <div>
                            <i className="fas fa-mobile-alt"></i>
                            <h3>Phone</h3>
                            <p>Phone 01: (0091) 8547 632521</p>
                            <p>Phone 01: (084) 965 4788</p>
                        </div>
                    </li>
                    <li>
                        <div className="contact-unique1">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Address</h3>
                            <p>123 King Str, 4th Floor, Utral Hosue Building, Honolulu, Hawaii</p>
                        </div>

                    </li>
                    <li className="contact-unique2">
                        <div >
                            <i className="fas fa-envelope"></i>
                            <h3>Email</h3>
                            <div className="contact-email">
                                <p>support@sunshine.com</p>
                                <p>hello@sunshine.com</p>

                            </div>
                        </div>
                    </li>
                </ul>
                <div className="in-touch">
                    <h2>Get in touch with us</h2>
                    <p>Travel website simple website design darn Travel design webdesign.</p>
                </div>

                <form className="comment-form">
                    <div className="container-comment">
                        <div className="comment-list">
                            <ul>
                                <li><input type="text" className="form2" placeholder="Enter your name..." name="mail" required/></li>
                                <li><input type="text" className="form2" placeholder="youremail@domain.com" name="mail" required/>  </li>
                                <li><input type="text" className="form2 third-box" placeholder="Subject (Optional)" name="mail" required/> </li>
                            </ul>
                        </div>
                        <textarea name="field" id="field" className="msg-area" placeholder="Here goes your message"></textarea>
                        <button className="contact-button"><h3>SEND MESSAGE</h3></button>
                    </div>
                </form>
            </div>
    </section>


    <section className="secondary-background">
    </section>
</div>










    )
}

export default Contact;