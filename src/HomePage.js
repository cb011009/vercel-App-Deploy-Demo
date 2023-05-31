import React,{ useState,useEffect }from 'react';
import './HomePage.css';
import Navigation from './Navigation';
import donorImg from './images/blood.png';
import bloodLab from './images/homeImage3.webp';
/*import mainHomeImage from './images/homebackground4.png';*/
import mainHomeImage from './images/homeImage2.webp';
/*import donorImage from './images/blood.png';*/
import donorImage from './images/blood.png';
import bloodAnimation from './images/bloodAnimation.mp4'
import ReactPlayer from 'react-player';



export default function HomePage() {
  const [visibleDiv, setVisibleDiv] = useState(-1);

  useEffect(() => {
    const divs = document.getElementsByClassName('item');

    // Delay the appearance of each div by 1 second
    const delay = 300;

    // Loop through each div and set it to visible with a delay
    Array.from(divs).forEach((div, index) => {
      setTimeout(() => {
        setVisibleDiv(index);
      }, delay * (index + 1));
    });
  }, []);

  return (
    <>
    <div className='home'>
      <div className="sidenav"><Navigation user='home'/></div>
      <div className="homeInfoSection">
            <div className="mainImageContainer">
           
                <img src={mainHomeImage} alt="Your Image" className='mainImage'/>
                {/*<div className="overlay"></div>*/}
                {/*<div className="imageText"><hr className='line'/><span class="brackets">"</span> BE  THE  REASON FOR <br/><span className='introHeading'></span>SOMEONE'S HEARTBEAT . .<span class="brackets">"</span><hr className='line'/></div>*/}
               
            </div>
           
            <div className="UserInfoSection">
               <div className={`item ${visibleDiv >= 0 ? 'visible' : ''}`}>
                 <div className="infoContainer">
                  
                  <div className="info">
                    <h2>"Calling All Blood Donors!"</h2>
                    <hr className='infoLine'></hr>
                    <ul className="points" >
                      <li><p>For blood donors, our user-friendly website allows easy registration and profile creation. </p></li>
                      <li><p> A platform providing comprehensive information on the locations of blood donation centers near you. </p></li>
                      <li><p> With just a few clicks, you can find the nearest blood donation centers where you can donate blood.</p></li>
                   </ul>
                  </div>
                  <div><  img src={donorImg} className="donorImg"/></div>
                 </div>
               </div>
              
               <div className={`item ${visibleDiv >= 1 ? 'visible' : ''}`}>
               <div className="infoContainer">
                  <div>{/*< img src={bloodLab} className="bloodLabImg"/>*/}
                  <video className="bloodLabImg"/*className='bloodDropVid'*/ autoPlay loop muted>
                     <source src={bloodAnimation} type="video/mp4" />
               </video>
                  </div>
                  <div className="info">
                    <h2>"Hospitals & Blood Banks"</h2>
                    <hr className='infoLine'></hr>
                    <ul className="points" >
                      <li><p> Streamlined inventory management and supply chain for hospitals and blood banks.</p></li>
                      <li><p> Real-time monitoring and tracking of available blood units and overall stock levels. </p></li>
                      <li><p> Access to crucial data for informed decision-making and ensuring optimal blood supply.</p></li>
                      <li><p> Empowering hospitals and blood banks to deliver efficient healthcare services. </p></li>
                   </ul>
                  </div>
                  <div>{/*< img src={bloodLab} className="bloodLabImg"/>*/}
                 
                  </div>
                 
                 </div>
                  
               </div>
           
            </div>
            
      </div>
    </div>
      {/*<div className="home">
       
         <div className="homeInfoSection">
            <div className="mainImage">
               <p>"Be the Reason For Someone's heartbeat"</p>
            </div>
            <div className={`item ${visibleDiv >= 0 ? 'visible' : ''}`}>
               Item 1
            </div>
            <div className={`item ${visibleDiv >= 1 ? 'visible' : ''}`}>
               Item 2
            </div>
            <div className={`item ${visibleDiv >= 2 ? 'visible' : ''}`}>
               Item 3
            </div>
            <div className={`item ${visibleDiv >= 3 ? 'visible' : ''}`}>
               Item 4
            </div>
         </div>
  </div>*/}
      
    </>
    /*<div className='homeContainer'>
        <div className='side'><Navigation user='home'/></div>
        <div className='homeInfoContainer'>
       
        <div className='infoContainer1'>
            <div className='intro'>
               <div >
                 
                <h2>"Be the reason for someone's heartbeat"</h2>
                <h2>"Be the reason for someone's heartbeat"</h2>
                  <hr/>
               </div>
               

            </div>
           </div>   

        
          <div className='infoContainer1'>
            <div className='infoItem'>
               <div >
                  <h2 className='homeHeading'>Calling all blood donors!</h2>
                  <hr/>
                  <ul className='info'>
                   <li>
                     <p>
                       For blood donors, our user-friendly website allows easy registration and profile creation. 
                    </p>
                   </li>
                   <li>
                    <p>
                      A platform providing comprehensive information on the locations of blood donation centers near you. 
                     
                    </p>
                  </li>
                  <li>
                    <p>
                     
                      With just a few clicks, you can find the nearest blood donation centers where you can donate blood.
                    </p>
                  </li>
                 </ul>
               </div>
               <div className='infoContainer' ><img src={donorImg}/></div>

            </div>
           </div>
        
          
           <div className='infoContainer1'/>
            <div className='infoItem'>
            <div className='infoContainer' ><img src={bloodLab}/></div>
            <div >
             <h2 className='homeHeading'>Hospitals & Blood Banks</h2>
             <hr/>
             <ul className='info2'>
              <li>
                <p>
                Streamlined inventory management and supply chain for hospitals and blood banks.
                </p>
              </li>




             <li>
             <p>
             Real-time monitoring and tracking of available blood units and overall stock levels.
              </p>
           </li>
           <li>
             <p>
             Access to crucial data for informed decision-making and ensuring optimal blood supply.
              </p>
           </li>
           <li>
             <p>
             Empowering hospitals and blood banks to deliver efficient healthcare services.
              </p>
           </li>
            </ul>
            </div>
            

          
           </div>
          
</div>
        
       
        
    </div>*/
  )
}
 