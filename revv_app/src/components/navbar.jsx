import React from 'react'
import "./navbar_style.css"


function Navbar() {
    return (
        <div className='Navbarcss'>
            <div>
                <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="" />
                <div>Sanitised. Safe</div>
            </div>
            <div>
                <h3 className='subs'><span>Hyundai </span>  Subscription</h3>
                <h3 className='subs'><span>Mahindra </span> Subscription </h3>
                <h2 className='sub'>FAQs</h2>
                <div className='sub'><img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" alt="" />Login or Signup</div>
            </div>

          
        </div>
    )
}

export default Navbar