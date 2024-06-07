

import { Typography } from '@mui/material';
import React from 'react';
import section1 from '../../assets/section1.jpeg';
import section2 from '../../assets/section2.jpeg';
import section3 from '../../assets/section3.1.jpeg';
import section4 from '../../assets/section3.4.jpeg';


const Section = () => {
    return (
        <>
            <style>
                {`
                .section img {
                    float: left;
                    width: 65%;
                    height: 70vh;
                    margin-right: 10px;
                    max-width: 100%;
                }

                .section-right img {
                    float: right;
                    width: 65%;
                    height: 70vh;
                    margin-left: 10px;
                    max-width: 100%;
                }

                @media only screen and (max-width: 768px) {
                    .section img, .section-right img {
                        width: 100%;
                        height: auto;
                        float: none;
                        margin-right: 0;
                        margin-left: 0;
                    }
                }

                .text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 70vh; /* Match the image height */
                    text-align: center;
                }

                .text-container > * {
                    color: #a08261;
                }
                `}
            </style>

            <div className="section">
                <img src={section1} alt='section1' />
                <div className="text-container">
                    <Typography variant='h4'>
                        THE CITY'S ONLY REVOLVING RESTAURANT
                    </Typography>
                    <Typography variant='h6'>
                        Patang Re-Evolve- A symbol of Ahmedabad's glory, has undergone a remarkable transformation, setting the stage for an unforgettable fine-dining experience.
                    </Typography>
                </div>
            </div>

            <div className="section-right">
                <img src={section2} alt='section2' />
                <div className="text-container">
                    <Typography variant='h4'>
                        EXPERIENCE A NEW HORIZON
                    </Typography>
                    <Typography variant='h6'>
                        Discover the exquisite ambiance and breathtaking views from the city's most iconic restaurant, now reimagined for modern luxury.
                    </Typography>
                </div>
            </div>

            <div className="section">
                <img src={section3} alt='section3' />
                <div className="text-container">
                    <Typography variant='h4'>
                        AN ELEGANT DINING EXPERIENCE
                    </Typography>
                    <Typography variant='h6'>
                        Indulge in a culinary journey like no other, where every dish is crafted to perfection and every moment is savored.
                    </Typography>
                </div>
            </div>

            <div className="section-right">
                <img src={section4} alt='section4' />
                <div className="text-container">
                    <Typography variant='h4'>
                        CELEBRATE LIFE'S SPECIAL MOMENTS
                    </Typography>
                    <Typography variant='h6'>
                        Whether it's a romantic dinner for two or a lavish celebration with friends and family, create unforgettable memories at Patang Re-Evolve.
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default Section;
