import React from 'react'
import chicksLogo from '../../images/logo.svg'
import { IconContext } from 'react-icons/lib'
import { FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin } from 'react-icons/fa'
import { MainLogo, SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink } from './Main.Elements'

const Main = () => {
    return (
        <>
            <IconContext.Provider value={{color: '#000'}}>
                <MainLogo>
                    <img src={chicksLogo} 
                    data-aos="fade-up"
                    data-aos-delay="100"/>   
                    <h1
                    data-aos="fade-up"
                    data-aos-delay="500">COMING SOON</h1>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='Facebook'
                                    data-aos="fade-up"
                                    data-aos-delay="900">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'
                                    data-aos="fade-up"
                                    data-aos-delay="1000">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target='_blank' aria-label='Youtube'
                                    data-aos="fade-up"
                                    data-aos-delay="1100">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='Twitter'
                                    data-aos="fade-up"
                                    data-aos-delay="1200">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'
                                    data-aos="fade-up"
                                    data-aos-delay="1300">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </MainLogo> 
                
                
            </IconContext.Provider>
        </>
    )
}

export default Main
