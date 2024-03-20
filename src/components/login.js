function login(){
    return(
        <div className="login-cont">
            {/* <img src={IMG1} alt=""/> */}
            <div className="login">
                <h1>CREATE ACCOUNT</h1>
                <input type="text" placeholder='Name' id="name"/><br />
                <input type="text" placeholder='Email-Id' id="email"/><br />
                <input type="text" placeholder='Password' id="pass"/><br />
                <input type="text" placeholder='Confirm Password' id="conf"/><br />
                <div className="check">
                    <input type="checkbox" id="checkbox"/>
                    <p className='agree'>I Agree to all Terms and Conditions</p>
                </div>
                <button className='sign'>Sign Up</button>
            </div>
        </div>
    )
}

export default login;