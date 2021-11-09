import '../App.css';
import React, { useEffect, useState } from 'react'
import { HeaderLogoLeft } from '../Logo';
import { withRouter } from 'react-router';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import {listAbouts} from '../graphql/queries'
import ReactMarkdown from 'react-markdown'

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const About = () => {
  const [aboutBlurb, setBlurb] = useState([])
  const [aboutContent, setContent] = useState([])

  const image1Path = '/image1.jpg'
  const image2Path = '/image2.jpg'

  useEffect(() => {
    fetchBlurb()
    fetchContent()
  }, [])

  async function fetchBlurb() {
    try {
      const aboutData = await API.graphql(graphqlOperation(listAbouts, {
        filter: {
            type: {
                eq: "blurb"
            }
        }
      }))
      const abouts = aboutData.data.listAbouts.items
      setBlurb(abouts[0])
    } catch (err) { console.log('error fetching about data') }
  }

  async function fetchContent() {
    try {
      const aboutData = await API.graphql(graphqlOperation(listAbouts, {
        filter: {
            type: {
                eq: "content"
            }
        }
      }))
      const abouts = aboutData.data.listAbouts.items
      setContent(abouts[0])
    } catch (err) { console.log('error fetching about data') }
  }

  return (
    <>
        <div id="about-header">
            <HeaderLogoLeft /> <h1 className="about-blurb">
                {aboutBlurb.text}
            </h1>
        </div>
        <div id="about-content">
        <div className="about-section-1">
        <img src={image1Path} ></img>
          <ReactMarkdown>{aboutContent.text}</ReactMarkdown>
        </div>
        <div className="about-section-2">
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
