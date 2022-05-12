import React from 'react';
import "./styles.css"

const Signup=() =>{
    return(
<div class="wrapper e">
    <h2>Registration</h2>
    <form action="#">
        <div class="input-box">
            <input type="text" placeholder="Enter Your Name" required/>
        </div>
        <div class="input-box">
            <input type="text" placeholder="Enter Your Email" required/>
        </div>
        <div class="input-box">
            <input type="password" placeholder="Create Pasword" required/>
        </div>
        <div class="input-box">
            <input type="password" placeholder="Confirm Password" required/>
        </div>
        <div class="policy">
            <input type="checkbox"/>
            <h3>I accept all terms & conditions</h3>
        </div>
        <div class="input-box button">
            <input type="submit" value="Register Now Noob"/>
        </div>
        <div class="text">
            <h3>Already have an account? <a href="#">Login now</a></h3>
        </div>
    </form>
</div>
    )
}
    
export default Signup;
