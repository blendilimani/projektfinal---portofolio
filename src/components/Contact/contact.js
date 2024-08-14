import react from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import instagramIcon from '../../assets/instagram.png'


const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My clients</h1>
                <p className='clientDesc'>
                    I didnt have the opportunity to work with a diverse group of companies.
                    But i think i will in the future.
                </p>

            
            <div className='clientImgs'>
                <img src= {Walmart} alt='Client' className='clientImg'/>
                <img src= {Adobe} alt='Client' className='clientImg'/>
                <img src= {Microsoft} alt='Client' className='clientImg'/>
                <img src= {Facebook} alt='Client' className='clientImg'/>

                </div>

            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name' />
                    <input type='email' className='email' placeholder='Your Email' />
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message' />
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt='Facebook' className='link'/>
                        <img src={TwitterIcon} alt='twitter' className='link'/>
                        <img src={YoutubeIcon} alt='youtube' className='link'/>
                        <img src={instagramIcon} alt='Instagram' className='link'/>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contact