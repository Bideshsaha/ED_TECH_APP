import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Image & Video 
import Banner from "../assets/Images/banner.mp4";

import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
// import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ReviewSlider from '../components/common/ReviewSlider'
import TimelineSection from "../components/core/HomePage/Timeline"

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-8">
                <Link to="/signup">
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                    drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 w-fit hover:drop-shadow-none">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                        transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
                <div className="text-center text-4xl font-semibold">
                    Empower Your Future With 
                    <HighlightText text={"Coding Skills"}/>
                </div>
                <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own pace, 
                    from anywhere in the world, and get access to a wealth of resources, 
                    including hands-on projects, quizzes, and personalized feedback from
                     instructors.
                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>
                {/* Video */}
                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video 
                    className="shadow-[20px_20px_rgba(255,255,255)]"
                    muted 
                    loop 
                    autoPlay>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>
                {/* code section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your
                                <HighlightText text={"Coding Potential"}/>
                                {" "}With our Online Courses
                            </div>
                        }
                        subheading={
                            "With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors."
                        }
                        ctabtn1={
                            {
                                btnText:"Try it yourself",
                                link:"/signup",
                                active:true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText:"Learn more",
                                link:"/login",
                                active:false,
                            }
                        }
                        codeColor={"text-yellow-25"}
                        codeblock={
                            `<<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width"/>
                                <title>Document</title>
                            </head>
                            <body>
                                <h1>Hello World</h1>
                            </body>
                            </html>>`
                        }
                        backgroundGradient={<div className="codeblock1 absolute"></div>}
                    />
                </div>

                {/* code section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                                Unlock Your
                                <HighlightText text={"Coding Potential"}/>
                                {" "}With our Online Courses
                            </div>
                        }
                        subheading={
                            "Our online coding courses are designed to help you unlock your full potential and achieve your goals. With expert instructors, comprehensive curriculum, and interactive learning experience, you'll gain the skills and confidence you need to succeed in the tech industry."
                        }
                        ctabtn1={
                            {
                                btnText:"Try it yourself",
                                link:"/signup",
                                active:true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText:"learn more",
                                link:"/login",
                                active:false,
                            }
                        }
                        codeColor={"text-yellow-25"}
                        codeblock={
                            `<<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width"/>
                                <title>Document</title>
                            </head>
                            <body>
                                <h1>Hello World</h1>
                            </body>
                            </html>>`
                        }
                        backgroundGradient={<div className="codeblock2 absolute"></div>}
                    />
                </div>

                <ExploreMore/>
            </div>


            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richnlack-700">
                <div className="homepage_bg h-[310px]">
                    <div className="w-11/12 max-w-maxcontent flex flex-col items-center justify-between gap-5 mx-auto">
                    <div className="lg:h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white lg:mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                {/* <div className="flex items-center gap-3"> */}
                                    Learn More
                                    <FaArrowRight />
                                {/* </div> */}
                            </CTAButton>
                        </div>

                    </div>

                </div>

                <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-content gap-8">

                    <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skill You need for a{" "}
                            <HighlightText text={"Job that is in demand"} />
                        </div>

                        <div className="lex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px]">
                                The modern ED TECH is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                    
                    <TimelineSection />

                    <LearningLanguageSection />
                </div>

            </div>


            {/* Section 3 */}
            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                <InstructorSection/>

                <h1 className="text-center text-4xl font-semibold mt-8">
                    Review from other learners
                </h1>
                {/* Review Slider here */}
                <ReviewSlider />
            </div>

            
            {/* Footer */}
            <Footer/>




        </div>
    )
}

export default Home;