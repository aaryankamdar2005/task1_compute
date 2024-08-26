import logo from './logo.svg';
import './App.css';
import JadooImage from './Jadoo.png';
import youtube from './Play button.png';
import mainImage from './Traveller 1.png';
import plane from './plane.png';
import c1image  from './Group 48.png'
import c2image  from './Group 49.png'
import c3image  from './Group 50.png'
import c4image  from './Group 51.png'
import rome from './Rectangle 14 (1).png'
import london from './Rectangle 14.jpg'
import  europe from './Rectangle 14.png'
import stepimg1 from './Group 7.png'
import stepimg2 from './Group 11.png'
import stepimg3 from './Group 12.png'
import icon from './OPTIONS.png'
import girl from './Rectangle 17.jpg'
import heart from './Group.png'
import dots from './Group 61.png'
import circular from './Image (1).png'
import pagination from './Pagination.png'
import axon from './image 27.png'
import jstar from './image 28.png'
import expedia from './image 29.png'
import quantas from './image 30.png'
import alitalia from './image 31.png'
import emailbox from './Group 76 (1).png'
import telegram from './Group 77.png'
import social from './Social.png'
import googleplay from './Play Store.png'
import appstore from './Google Play.png'
import girlimg from './Image (2).png'

function App() {
  return(
<>

<div className="navbar">
  <div className="logo">
<img src={JadooImage}/>
  </div>
  <div className="links">
    <a href="#">Destinations</a>
    <a href="#">Hotels</a>

    <a href="#" >Flights</a>
    <a href="#" >Bookings</a>
  </div>
  <div className="login bgimage " >
    <p>Login</p>
    <button>Sign Up</button>
    <p>EN</p>
  </div>
</div>
<div className="content1">
<div className="left">
    <p className="para1">BEST DESTINATIONS AROUND THE WORLD</p>
    <div className="heading">
    <h1>
    Travel,<span>enjoy</span><br/>
and live a new<br/>
and full life
    </h1>
    </div>
    <p>Built Wicket longer admire do barton vanity itself do in it.<br/> Preferred to sportsmen it engrossed listening. Park gate<br/> sell they west hard for the.</p>
    <div className="lfooter">
      <p className="para2"> Find out more </p>
      <div className="play">
      <div className="yt"></div>
      <p className="para3">Play Demo</p>
    </div>
    </div>
  </div>
  <div className="right bgimage">
<img src={mainImage}/>
{/* <img src={plane}/> */}
  </div>
</div>
<div className="category">
  <div className="top">
  <p className="head">CATEGORY</p>
  <h2>We Offer Best Services</h2>
  </div>
  <div className="cards">
    <div className="card1  trandform">
    <div className="image">
    <img src={ c1image}/>
    </div>
      <h4>Calculated Weather </h4>
      <p>Built Wicket longer admire do barton vanity itself do in it.</p>
    </div>
    <span className="extras">

    </span>
    <div className="card2  trandform">
    <div className="image">
    <img src={ c4image}/>
    </div>
    <h4>Best Flights</h4>
    <p>Engrossed listening. Park gate sell they west hard for the.</p></div>
    <div className="card3 trandform">
      <div className="image">
    <img src={ c3image}/>
    </div>
    <h4>Local Events</h4>
    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p></div>
    <div className="card4 trandform">
    <div className="image">
    <img src={c2image}/>
    </div>
      <h4>Customization</h4>
      <p>We deliver outsourced
aviation services for
military customers</p>
    </div>
  </div>
</div>
{/* <div className="destinations">
  <p className="head">Top Selling</p>
  <h2>Top Destinations</h2>
  <div className="box">
  <div className="imgbox1">
      
      <div className="info">
   <p> Rome, Italty</p>
   <p>$ 42</p>
</div>
<p className="pfooter">10 Days Trip</p>
      </div>
      <div className="imgbox2">
      
      <div className="info">
   <p>London,UK</p>
   <p>$ 4.2k</p>
</div>
<p>12 Days Trip</p>
      </div>
      <div className="imgbox3">
      
      <div className="info">
   <p>Full Europe</p>
   <p>$ 15k</p>
</div>
<p>28 Days Trip</p>
      </div>
  </div>
</div> */}
<p> Easy and Fast </p>
<div className="booking">

  <div className="left1">
    <h2>Book your next trip<br/>
    in 3 easy steps</h2>
    <div className="steps">
      <div className="step">
      <div className="forimg">
      <img src={stepimg1}/>
      </div>
      <div className="con">
      <p className="head">Choose Destination</p>
<p>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </p>
    </div>

      </div>
      <div className="step">
        <div className="forimg">
        <img src={stepimg2}/>
        </div>
        <div className="con">
        <p className="head">Make Payment</p>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Urna, tortor tempus. </p>
    </div>
     
      </div>
      <div className="step">
      <div className="forimg">
      <img src={stepimg3}/>
      </div>
  <div className="con">
  <p className="head">Reach Airport on Selected Date</p>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Urna, tortor tempus. </p>
  </div>
      
      </div>
    </div>
  </div>
  <div className="right1">
    <img src={girlimg} />
    
  </div>
</div>
<div className="testimonials">
  <div className="left2">
  <p className="head">TESTIMONIALS</p>
  <h2>What People Say<br/> About Us.</h2>
  <img src={dots}/>
  </div>
  <div className="right2">
  <img src={circular}/>
    <div className="fvisible">
              
      <div className="inside">

       <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       <p class="head">Mike taylor <br/>Lahore,Pakistan</p>

       </div>
    </div>
    <div className="hidden2">
      <div className="inside2">
    <p class="head">Chris Thomas<br/>CEO of Red Button</p>
    </div>
    </div>
   
  </div>
  <img src={pagination}/>
</div>
<div className="sponsors">

  <div className="b1"><img src={axon}/></div>
  <div className="b1"><img src={jstar}/></div>
  <div className="b1"><img src={expedia}/></div>
  <div className="b1"><img src={quantas}/></div>
  <div className="b1"><img src={alitalia}/></div>

</div>

<div className="outer">
<div className="tel">
<img src={telegram}/>
</div>
<div className="register">
  <h3>
  Subscribe to get information, latest news and other<br/>
  interesting offers about Jadoo
  </h3>
  <div className="outer1">
  <div className="enter">
    <img src={emailbox}/>
    <button className="sub">Subscribe</button>
  </div>
 
  </div>
</div>
</div>
<div className="footer">
  <div className="s1">
    <p>Jadoo</p>
    <p>Book your trip in minute, get full<br/>
Control for much longer.
</p>
  </div>
  <div className="s2">
    <p>Company</p>
    <a className="second" href="#">About</a>
    <a  className="second"href="#">Careers</a>
    <a className="second" href="#">Mobile</a>

  </div>
  <div className="s3">
    <p>Contact</p>
    <a className="second" href="#">Help/FAQ</a>
    <a className="second" href="#">Press</a>
    <a className="second" href="#">Affilates</a>
  </div>
  <div className="s4">
    <p>More</p>
    <a href="#">Airlinefees</a>
    <a className="second" href="#">Airline</a>
    <a className="second" href="#">Low fare tips</a>
  </div>
  <div className="s5">
 <img src={social}/>
    <a className="second" href="#">Discover our app</a>
    <div className="download">
    <img src={googleplay}/>
    <img src={appstore}/>
    </div>
    </div>
    
</div>
<p className="lastpara">All rights reserved@jadoo.co</p>
</>
  );
}

export default App;
