import React from 'react';
import { IoCalendar } from "react-icons/io5";
import { IoMapSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Map() {
    return (
        <>
            <div className="main">
                
                <div className="section">
                <div className='product'>
                        <h1>Erode SmartCity Plan Invitation</h1>
                        <span style={{textAlign:'center'}}>Welcom To All</span>
                </div>
                <div className='time'>
                <IoCalendar className='calender' /> 17 Novembar - 22 Navember <span>8.00 - 10.30</span>

                </div>

                <div className='address'>
                <IoMapSharp /> Scot WebTech Solution, Kaikollan Street,Erode. <span>Sivarnjani Hotel BackSide</span>
                </div>

                <div className='contact'>
                <FaPhoneAlt /> 125463216 
                <span>Phone-Number</span>
                </div>
              

                       
                </div>

                <iframe
                    width="50%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=erode+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Map"
                >
                    <a href="https://www.gps.ie/">GPS Tracker Sport</a>
                </iframe>
            </div>
        </>
    );
}
