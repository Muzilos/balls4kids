import '../App.css';
import { Suspense } from 'react';
import { HeaderLogoLeft } from '../Logo';
import { withRouter } from 'react-router';
// import LinkButton from './components/LinkButton';

function About() {
  const image1Path = '/image1.jpg'
  const image2Path = '/image2.jpg'
  return (
    <>
        <div id="about-header">
            <HeaderLogoLeft /> <h1 class="about-blurb">
                "Leveling the playing field ... one ball at a time"
            </h1>
        </div>
        <div id="about-content">
        <div class="about-section-1">
        <img src={image1Path} ></img>
        <p >Balls 4 Kids is a nonprofit that provides children in underserved communities with soccer balls, equipment, and mentorship to lead happy, healthy, lives. 
Our “goal” is to level the playing field, one ball at a time.<br/>
Balls 4 Kids is registered in the state of New York as a limited liability corporation. We are currently in process for 501c(3) tax exemption.</p>
        </div>
        <div class="about-section-2">
        <img src={image2Path} ></img>
        <p id="founders-statement">“Soccer is a universal language. Nothing brings people together like kicking a ball around, any time, anywhere. 
          I’ve been playing soccer for over 20 years, and nothing brings me greater joy. 
          The happiness I feel with a ball is not meant for me alone, I must share it with others. 
          The reason I founded Balls 4 Kids is to give the gift of happiness with those who need it the most”  
          <br/>- Nicholas Marshall</p>
        </div>
        </div>
    </>
  );
}

const aboutClassWithHistory = withRouter(About);
export {aboutClassWithHistory as AboutPage};
export {About};
