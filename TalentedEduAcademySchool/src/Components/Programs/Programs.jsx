import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
import program_icon from '../../assets/program_icon.webp'
import program_icon_2 from '../../assets/program_icon_2.webp'
import program_icon_3 from '../../assets/program_icon_3.jpeg'
 

const Programs = () => {
  return (
    
    <div className='programs' id='program'>
    
        <div className='program'>
            <img src={program_1} alt='' />
            <div className='caption'>
                <img src={program_icon} alt='' />
                <p>Our primary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
            
            <img src={program_2} alt='' />
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Our secondary school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
        <div className='program'>
           
            <img src={program_3} alt='' />
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Our high school program is designed to help your child develop the necessary skills to excel in their academics and personal development</p>
            </div>
        </div>
    </div>
  )
}

export default Programs