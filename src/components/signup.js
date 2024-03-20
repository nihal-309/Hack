import IMG1 from '../images/gmail.png'
import IMG2 from '../images/google.png'
import IMG3 from '../images/meta.png'

function signUp(){
    fetch('users.json')
        .then(res => res.json())
        .then(data => console.log(data))
    return(
        <div className="signUp-cont">
            <div className="signUp">
                <h1>WELCOME !</h1>
                <input type="text" id="email1" placeholder='E-Mail or Phone Number'/><br />
                <input type="text" id="pass1" placeholder='Password'/><br />
                <button className='sign1'>Sign In</button><br />
                <div className="signUp-img">
                    <img src={IMG1} alt="" />
                    <img src={IMG2} alt="" />
                    <img src={IMG3} alt="" /><br />
                </div>
                <button className='forgot'>Forgot Password</button>
            </div>
        </div>
    )
}

export default signUp; 