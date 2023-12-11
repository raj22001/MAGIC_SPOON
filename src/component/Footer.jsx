import "./footerr.css"
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {

    const footerdata = [
        {
            id:1,
            title:"Terms of Use",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:2,
            title:"Privacy Policy",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:3,
            title:"Accessibility",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:4,
            title:"FAQ",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:5,
            title:"Become an Affiliate",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:6,
            title:"Reviews",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:7,
            title:"Jobs",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:8,
            title:"Track Orders",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:9,
            title:"Store Locato",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:10,
            title:"Terms of Service",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:11,
            title:"Refund Policy",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
        {
            id:12,
            title:"For Creators",
            link:"https://magicspoon.com/pages/terms-of-use"
        },
    ]

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

  return (
    <div className="cr-white bg-black" id="footer" style={{ display: 'block' }}>

    <div className="width g-flex footer-container">
        <div id="footer-links">
            <h1>MAGIC SPOON</h1>
            <ul role="menu" className="data">
               {
                footerdata.map((item) => (
                    <li key={item.id}><a href={item.link}>{item.title}</a></li>
                ))
               }
            </ul>

            <div id="footer-handler" className="footer-social-handler">
               <button className="cta"> Contact us</button>
               <div className="icons">
                <IoLogoInstagram size={40} style={{ marginRight: '10px' }}/>
                <FaFacebookF size={40} color="white" style={{ marginRight: '10px' }}    />
                <FaTwitter size={40} color="white"/>
               </div>
            </div>
            <h3 style={{marginTop:"15px"}}>2023 Magic Spoon</h3>
        </div>
            <div className="footer-newsletter">
                <h2>Don t miss the magic:</h2>
                <form id="email_signup ">
                    <div className="field">
                        <input 
                            id="email_id"
                            type="email"
                            value={email}
                            name="email"
                            placeholder="Your email"
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button className="submit-btn cta" type="submit">Subscribe</button>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default Footer
