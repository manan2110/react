import React from 'react';
import user from "../images/user.png";
const ContactDetail = () => {
    return(
        <div className = "main">
            <div className = "ui card centered" style={{marginTop:"100px"}}>
                <div className = "image">
                    <img src = {user} alt = "user"></img>
                </div>
                <div className = "content">
                    <div className="header">Manan</div>
                    <div className="description">manan.co.in@gmail.com</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
