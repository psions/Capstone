import "./style.css"
import { useNavigate, Link } from "react-router-dom";


const Survey = () => {
    const navigate = useNavigate();
    return (
<div class="header">
    <h1 id='title' class='text-center'>The Hideout Survey</h1>
    <p class='description-text-center' id='description'>Lets see what type of gamer you are</p>
    <div class='container'>
        <form action="" className="" id="survey-form">
            <div>
                <p className="name">Name</p>
                <input type="text" className="" id="name" placeholder="Enter your name..." />
            </div>
            <div>
                <p className="name">Email</p>
                <input type="email" className="" id="email-label" placeholder="abc@gmail.com" pattern='.+@gmail.com'/>
            </div>
            <div>
                <p className="name">Age</p>
                <input type="number" className="" id="number-label" placeholder="Enter Your Age" />
            </div><br />
            <div>
               <p className="name">What Type of Gamer are you:</p>
               <p><input type="radio" name="user-recommended" value="Noob" id="noobs" class="input-noob" checked></input>Noob</p>
               <p><input type="radio" name="user-recommended" value="Gamer" id="gamers" class="input-noob" checked></input>Gamer</p>
               <p><input type="radio" name="user-recommended" value="Grass" id="Grass" class="input-noob" checked></input>I dont Touch Grass</p>
            </div>
            <div className="form-group">
                <p>Any comments or suggestions?</p>
                <textarea id="comments" class="input-textarea" name="comment" placeholder="Comment..."></textarea>
            </div>
        </form>
    </div><br />
    <button id="btn" type="submit" onClick={() => navigate("/Pricing")}>Submit</button>
</div>

)

}

export default Survey;