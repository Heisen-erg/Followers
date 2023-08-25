import React from 'react'
import "../styles/footer.css"
const Footer = () => {
    return (
    
        < footer class="footer-section" >
            <div class="container">
                {/* <div class="footer-cta pt-5 pb-5"> */}
                    {/* <div class="row"> */}
                        {/* <div class="col-xl-4 col-md-4 mb-30"> */}
                        {/* <div class="single-cta"> */}
                                {/* <i class="fas fa-map-marker-alt"></i> */}
                                {/* <div class="cta-text"> */}
                                    {/* <h4>EMAIL US</h4> */}
                                    {/* <span>heisenberg.database.1@gmail.com</span> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                       
                    {/* </div> */}
                {/* </div> */}
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <img src={require("../assets/logo2.png")}class="img-fluid" alt="logo"/> <h4 style={{marginTop:'5px',color:'whitesmoke'}}>HEISENBERG</h4>
                                </div>
                                <div class="footer-text">
                                    <p>We Design Your Website In Most Appropriate And Appealing Way </p>
                                </div>
                                {/* <div class="footer-social-icon"> */}
                                    {/* <span>Follow us</span> */}
                                    {/* <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a> */}
                                    {/* <a href="#"><i class="fab fa-twitter twitter-bg"></i></a> */}
                                    {/* <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30 mt-5 mt-xl-0 ">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                   
                                    <li><a href="https://heisenberg.in.net">My portfolio</a></li>
                                 
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50 mt-5 mt-xl-0">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>PREVIOUS PROJECTS</h3>
                                </div>
                                {/* <div class="footer-text mb-25"> */}
                                    {/* <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p> */}
                                {/* </div> */}
                                {/* <div class="subscribe-form"> */}
                                  {/* <form action="#"> */}
                                        {/* <input type="text" placeholder="Email Address"/> */}
                                        {/* <button><i class="fab fa-telegram-plane"></i></button> */}
                                    {/* </form> */}
                                {/* </div> */}
                                <ul> <li><a href="https://blogs.heisenberg.in.net">News/Blog</a></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        {/* <div class="col-xl-6 col-lg-6 text-center text-lg-left"> remember ye asli h neeche waali nhi*/}
                        <div class="col-12 text-center text-lg-left">
                            <div class="copyright-text text-center">
                                <p>Copyright &copy; 2023, All Rights Reserved HEISENBERG</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
                                {/* <ul> */}
                                    {/* <li><a href="#">Home</a></li> */}
                                    {/* <li><a href="#">Terms</a></li> */}
                                    {/* <li><a href="#">Privacy</a></li> */}
                                    {/* <li><a href="#">Policy</a></li> */}
                                    {/* <li><a href="#">Contact</a></li> */}
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
  )
}

export default Footer