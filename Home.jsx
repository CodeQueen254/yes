import React from 'react'

function Home() {
  return (
    <>
     {/* <p> <h2 class="lg">snap</h2></p> */}
  <div className='Hero'>
  <h1 class="Heading">Make<br/>remote work</h1>
  <p><h3 class="Intro">
  Get your team in sync, no matter your location.<br/>
   Streamline processes, create team rituals, and
   <br/> watch productivity soar.</h3></p>
  <button className="f3"value="submit">Learn More</button>
  </div>
  <br/>
  <br/>
  <nav className="xtra">
  <li> <a href='#' className="links">Contacts</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href='#' className="links">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <button href='#' className="links3">Login </button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button href='#' className="links3">Register </button>&nbsp;&nbsp;&nbsp;&nbsp;
   </li><br></br>
  </nav>
  <div class="attribution"> 
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Divine Obute Ene</a>.
  </div> 
    </>
  )
}

export default Home