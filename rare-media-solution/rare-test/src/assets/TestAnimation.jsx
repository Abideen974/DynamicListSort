import React, { useRef } from 'react'
import {Box, Typography} from '@mui/material'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TestAnimation = () => {
    const textAnimation = useRef();
    useGSAP(()=>{
        gsap.to(textAnimation.current,{
            x:1000,
            duration:2,
            // delay:3
            scrollBehavior:true
        })
    })


    
  return (
    <Box sx={{
        width:'100vw',
        height:'500px',
        backgroundColor:'red',
        position:'relative'
    }}>
        <Box  sx={{
            width:'100%',
            border:'2px solid blue',
            py:"60px",
            margin:'auto',
            backgroundColor:'green',
            position:'absolute',
            // top:'50%',
            // left:'50%',
            // transform:'translate(-50%, -50%)'
        }}>
            <Typography ref={textAnimation} sx={{
                fontSize:'60px',
                px:'15px',
            }}>
                Hello Friend I Just Testing For The Animation
            </Typography>
        </Box>
    </Box>
  )
}

export default TestAnimation



