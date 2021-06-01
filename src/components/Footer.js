import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className='footer-container'>
            <p className='love-text'>Made By Aswin with 💜 &copy; 2021</p>
            <div className='social-media-icons'>
               <a href='https://www.facebook.com/aswin.sampath.712'><FacebookIcon  className='fb' fontSize='large'/></a>
                <a href='https://www.instagram.com/ash_1401/'><InstagramIcon className='insta' fontSize='large'/></a>
                <a href='https://twitter.com/i_am_Ash_'><TwitterIcon className='twitter' fontSize='large'/></a>
                <a href='https://github.com/AswinSampath1401/'><GithubIcon className='github' fontSize='large'/></a>
                <a href='https://www.linkedin.com/in/aswin-sampath-05b401172/'><LinkedinIcon className='linkedIn' fontSize='large'/></a>
            </div>
        </div>

    )
}

export default Footer
