import IMG1 from '../images/hero-img.png'
function home(){
    return(
        <div className="home">
            <nav className="header">
                <div className="options">
                    <a href="/">Home</a>
                    <a href="/">Service</a>
                    <a href="/">Contact</a>
                    <a href="/">About Us</a>
                    <a href="/" className="reg">Register</a>
                </div>
            </nav>
            <div className="hero">
                <div className="img1">
                    <img src={IMG1} alt="" />
                </div>
                <div className="inp">
                    <input type="email" placeholder='Enter Your Email' className='email1'/><br />
                    <input type="password" placeholder='Enter Your Password' className='pass1'/><br />
                    <input type="checkbox" className='check1'/>
                    <p className='logged'>Keep Me Logged In</p>
                    <a href="/" className='forgot1'>FORGOT PASSWORD</a>
                    <button className='logIn'>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default home;