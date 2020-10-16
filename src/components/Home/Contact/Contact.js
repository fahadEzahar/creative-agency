import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container ">
                <div className="row p-5">
                    <div className="col-md-6">
                        <h3><strong>Let us handle your <br /> project,professionally.</strong></h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis doloribus sed eveniet. Modi, quos!</p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control " placeholder=" Your email address " />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea style={{ "resize": "none" }} name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your message"></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="button" className="btn btn-bg px-5"> send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <p className="text-center text-muted">Copyright © 2020 by Fahad Ezahar</p>
            </div>
        </div>

    );
};

export default Contact;