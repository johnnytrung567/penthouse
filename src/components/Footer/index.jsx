import { ImYoutube, ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import {
    Arrow,
    ContactColumn,
    ContactGroup,
    ContactItem,
    FooterBtn,
    FooterContainer,
    FooterWrapper,
    SocialGroup,
    SocialIcon,
    TextGroup,
} from './Footer'

const Footer = () => {
    return (
        <FooterContainer id='contact'>
            <FooterWrapper>
                <TextGroup>
                    <p>Let's find</p>
                    <p>your Dream Home</p>
                </TextGroup>
                <ContactGroup>
                    <ContactColumn>
                        <li>Contact Us</li>
                        <li>
                            <ContactItem to='/'>FAQ</ContactItem>
                        </li>
                        <li>
                            <ContactItem to='/'>Support</ContactItem>
                        </li>
                        <li>
                            <ContactItem to='/'>Questions</ContactItem>
                        </li>
                    </ContactColumn>
                    <ContactColumn>
                        <li>Offices</li>
                        <li>
                            <ContactItem to='/'>United States</ContactItem>
                        </li>
                        <li>
                            <ContactItem to='/'>Europe</ContactItem>
                        </li>
                        <li>
                            <ContactItem to='/'>Canada</ContactItem>
                        </li>
                    </ContactColumn>
                </ContactGroup>
                <SocialGroup>
                    <SocialIcon href='https://www.youtube.com' target='_blank'>
                        <ImYoutube />
                    </SocialIcon>
                    <SocialIcon href='https://www.facebook.com' target='_blank'>
                        <ImFacebook />
                    </SocialIcon>
                    <SocialIcon
                        href='https://www.instagram.com'
                        target='_blank'
                    >
                        <BsInstagram />
                    </SocialIcon>
                    <SocialIcon href='https://www.linkedin.com' target='_blank'>
                        <ImLinkedin2 />
                    </SocialIcon>
                </SocialGroup>
                <FooterBtn to='rentals'>
                    Let's Chat
                    <Arrow />
                </FooterBtn>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
