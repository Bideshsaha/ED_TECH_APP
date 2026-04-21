import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from '../assets/Images/FoundingStory.png'
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className='mx-auto mt-[100px] text-white'>
        {/* section 1 */}
        <section>
            <div>
                <header>
                    Driving Innovation in Online Education a <HighlightText text={"Brighter Future"}/>
                </header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting indu
                    stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make
                </p>
                <div className='flex gap-x-3 mx-auto'>
                    <img src={BannerImage1} alt="About Us 1" />
                    <img src={BannerImage2} alt="About Us 2" />
                    <img src={BannerImage3} alt="About Us 3" />
                </div>
            </div>
        </section>
        {/* section 2 */}
        <section>
            <div>
                <Quote/>
            </div>
        </section>
        {/* section 3 */}
        <section>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div>
                        <h1>Our Founding Story</h1>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div>
                        <img src={FoundingStory}/>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <h1>Our Vision</h1>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                    <div>
                        <h1>Our Mission</h1>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* section 4 */}
        <StatsComponent/>
        {/* section 5 */}
        <section className='mx-auto flex flex-col items-center justify-center justify-between gap-5 mb-[140px]'>
            <LearningGrid/>
            <ContactFormSection/>
        </section>
        {/* section 6 */}
            <section>
                <div>
                    Reviews from other learners
                    {/* <ReviewSlider/> */}
                </div>
            </section>

            <Footer/>
    </div>
  )
}

export default About
