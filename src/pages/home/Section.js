

import { Typography ,Divider } from '@mui/material';
import React from 'react';
import section1 from '../../assets/section1.jpeg';
import section2 from '../../assets/section2.jpeg';
import section3 from '../../assets/section3.1.jpeg';
import section4 from '../../assets/section3.4.jpeg';


const Section = () => {
    const CustomDivider = () => (
        <div style={{ position: 'relative', width: '50%', margin: '25px auto', height: '0' }}>
            <div style={{
                position: 'absolute',
                top: '-60px',
             
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                border: '10px solid transparent',
                borderBottom: '10px solid #a08261',
            }} />
            <div style={{
                position: 'absolute',
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%) rotate(180deg)',
                width: '0',
                height: '0',
                border: '10px solid transparent',
                borderBottom: '10px solid #a08261',
            }} />
        </div>
    );

    const CustomDividerUp = () => (
        <div style={{ position: 'relative', width: '50%', margin: '25px auto', height: '0' }}>
            <div style={{
                position: 'absolute',
                top: '20px',             
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                border: '10px solid transparent',
                borderBottom: '10px solid #a08261',
            }} />
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%) rotate(180deg)',
                width: '0',
                height: '0',
                border: '10px solid transparent',
                borderBottom: '10px solid #a08261',
            }} />
        </div>
    );
    
    
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
                    padding-left:5%;
                    padding-right:5%;
                    box-sizing:border-box;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 70vh; 
                    text-align: center;
                }

                .text-container > * {
                    color: #a08261;
                }
                    @media only screen and (max-width; 768px){
                    .text-container{
                    padding-left:2%;
                    padding-right:2%;
                    }
                    }
                `}
            </style>

            <div className="section">
                <img src={section1} alt='section1' />
                <div className="text-container">
                <CustomDividerUp/>
                <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
           
                    <Typography variant='h4'>
                        THE CITY'S ONLY REVOLVING RESTAURANT
                     
                    </Typography>
                    <Divider sx={{ width: '15%', margin: '10px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h6'>
                        Patang-Firki Re-Evolve- A symbol of Ahmedabad's glory, has undergone a remarkable transformation, setting the stage for an unforgettable fine-dining experience.
                    </Typography>
                    <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <CustomDivider/>
                </div>
            </div>

            <div className="section-right">
                <img src={section2} alt='section2' />
                <div className="text-container">
                <CustomDividerUp/>
                <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h4'>
                        GATHER YOUR PEERS
                    </Typography>
                    <Divider sx={{ width: '15%', margin: '10px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h6'>
                        At NeelAsmita Re-Evolving, we understand the importance of versatility.Whether you're planning an outing with friends, a family dinner, Patang Firki is the place to be.
                    </Typography>
                    <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <CustomDivider/>
                </div>
            </div>

            <div className="section">
                <img src={section3} alt='section3' />
                <div className="text-container">
                <CustomDividerUp/>
                <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h4'>
                        AN ELEGANT DINING EXPERIENCE
                    </Typography>
                    <Divider sx={{ width: '15%', margin: '10px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h6'>
                        Under the culinary prowess of MasterChef Akshay Thakkr, a world-renowned Indian chef, consultant, and media personality, our menu is curated with a blend of traditional and international flavours that promises a gourmet experience like no other.
                    </Typography>
                    <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <CustomDivider/>
                </div>
            </div>

            <div className="section-right">
                <img src={section4} alt='section4' />
                <div className="text-container">
                <CustomDividerUp/>
                <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h4'>
                        ENJOY THE SKYLINE
                    </Typography>
                    <Divider sx={{ width: '15%', margin: '10px auto', backgroundColor: '#a08261' }} />
                    <Typography variant='h6'>
                        We believe in making your visit truly unforgettable by offering you not just a meal but an immersive experience with panoramic city views that connects you with the heart of this vibrant city.
                    </Typography>
                    <Divider sx={{ width: '50%', margin: '25px auto', backgroundColor: '#a08261' }} />
                    <CustomDivider/>
                </div>
            </div>
        </>
    );
}

export default Section;
