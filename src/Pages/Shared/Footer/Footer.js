import React from 'react';
import footerbg from '../../asset/images/footer.png'
const Footer = () => {
    return (
       <section style={{backgroundImage:`url(${footerbg})`, backgroundPosition:"center"}}>
            <footer  className="footer p-10 text-neutral ">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            
        </footer>
        <h1 className='text-center pb-5'>Copyright 2022 All Rights Reserved</h1>
       </section>
    );
};

export default Footer;