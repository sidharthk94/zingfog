import React from 'react'
import "./WeWork.css"

const WeWork = () => {
  return (
    <div className='we_work_main'>
        <div className='work_first'>
            <div className='schedule'>
                <p className='schedule_text'>Schedule</p>
            </div>
            <div className='calender'>
              <img src="Vector.png" alt="" className='vector'/>
            </div>
            <div>
                <p className='botton_schedule'>Schedule a test <br/>
                from your home</p>
            </div>
            <img src="./Ellipse 23.png" alt="" className='dotted_border'/>
            <img src="./1.png" alt="" className='one'/>
        </div>

        <div className='work_second'>
            <div className='Reach'>
                <p className='reach_text'>Reach lab</p>
            </div>
            <div className='hand'>
              <img src="Vector1.png" alt="" className='vector1'/>
            </div>
            <div>
                <p className='botton_schedule'>Phlebotomist drops <br/>
                the test sample to lab</p>
            </div>
            <img src="./Ellipse 23.png" alt="" className='dotted_border'/>
            <img src="./Frame 39575.png" alt="" className='two'/>
        </div>

        <div className='work_second'>
            <div className='Reach'>
                <p className='reach_text'>Get Report</p>
            </div>
            <div className='hand'>
              <img src="Group1.png" alt="" className='vector1'/>
            </div>
            <div>
                <p className='botton_schedule'>Get the report <br/>
                on whatsapp</p>
            </div>
            <img src="./Ellipse 23.png" alt="" className='dotted_border'/>
            <img src="./3.png" alt="" className='two'/>
        </div>

    </div>
  )
}

export default WeWork