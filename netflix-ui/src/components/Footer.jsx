import React from 'react'
import timelessLogo from '../assets/timeless.png'
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="waves">
                <div className="footer_wave" id="wave1"></div>
                <div className="footer_wave" id="wave2"></div>
                <div className="footer_wave" id="wave3"></div>
                <div className="footer_wave" id="wave4"></div>
            </div>
            <div className='footer_social_icon'>
                <div className='footer_social_icon_li'>
                    <div className='footer_social_icon_li_a' href="#">
                        <FaFacebookF></FaFacebookF>
                    </div>
                </div>
                <div className='footer_social_icon_li'>
                    <div className='footer_social_icon_li_a' href="#">
                        <CiTwitter></CiTwitter>
                    </div>
                </div>
                <div className='footer_social_icon_li'>
                    <div className='footer_social_icon_li_a' href="#">
                        <CiInstagram></CiInstagram>
                    </div>
                </div>
                <div className='footer_social_icon_li'>
                    <div className='footer_social_icon_li_a' href="#">
                        <FaYoutube></FaYoutube>
                    </div>
                </div>
            </div>
            <div className='footer_menu'>
                <div className='footer_menu_li'>
                    <div className='footer_menu_li_a' href="#">Home</div>
                </div>
                <div className='footer_menu_li'>
                    <div className='footer_menu_li_a' href="#">About</div>
                </div>
                <div className='footer_menu_li'>
                    <div className='footer_menu_li_a' href="#">Service</div>
                </div>
                <div className='footer_menu_li'>
                    <div className='footer_menu_li_a' href="#">Team</div>
                </div>
                <div className='footer_menu_li'>
                    <div className='footer_menu_li_a' href="#">Contract</div>
                </div>
            </div>
            <p>@2024 Online Turtorials | All Rights Reserved</p>
            
        </div>
    )

}

export default Footer
