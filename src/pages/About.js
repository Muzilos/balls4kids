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
  const [aboutFounderStatement, setFounderStatement] = useState([])

  const image1Path = '/image1.jpg'
  const image2Path = '/image2.jpg'

  useEffect(() => {
    fetchBlurb()
    fetchContent()
    fetchFounderStatement()
  }, [])

  async function fetchBlurb() {
    try {
      const aboutData = await API.graphql(graphqlOperation(listAbouts, {
        filter: {
            type: {
                eq: "BLURB"
            }
        }
      }))
      const abouts = aboutData.data.listAbouts.items
      setBlurb(abouts[0])
    } catch (err) { console.log('error fetching about blurb data') }
  }

  async function fetchContent() {
    try {
      const aboutData = await API.graphql(graphqlOperation(listAbouts, {
        filter: {
            type: {
                eq: "CONTENT"
            }
        }
      }))
      const abouts = aboutData.data.listAbouts.items
      setContent(abouts[0])
    } catch (err) { console.log('error fetching about content data') }
  }

  async function fetchFounderStatement() {
    try {
      const aboutData = await API.graphql(graphqlOperation(listAbouts, {
        filter: {
            type: {
                eq: "FOUNDER_STATEMENT"
            }
        }
      }))
      const abouts = aboutData.data.listAbouts.items
      setFounderStatement(abouts[0])
    } catch (err) { console.log('error fetching about founder statement data') }
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
        <ReactMarkdown id="founders-statement">
          {aboutFounderStatement.text}
        </ReactMarkdown>
        </div>
        </div>
    </>
  );
}

const aboutClassWithHistory = withRouter(About);
export {aboutClassWithHistory as AboutPage};
export {About};
