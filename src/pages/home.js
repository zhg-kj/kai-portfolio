import '../styling/home.css';
import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

// ASSETS
import profile from '../assets/profile.PNG';
import gradient from '../assets/gradient.png'

const projects = [
  {
    title: "DASH",
    summary: "An artificially intelligent driving assistant.",
    description: "",
    link: "https://dashdemo.netlify.app/",
    imagePaths: [],
    id: 1
  },
  {
    title: "OKE",
    summary: "A virtual karaoke room for quarantined singers.",
    description: "",
    link: "http://okeraoke.herokuapp.com/",
    imagePaths: [],
    id: 2
  },
  {
    title: "BusyMap",
    summary: "A social distancing solution for grocery shoppers.",
    description: "",
    link: "http://busymap.herokuapp.com/",
    imagePaths: [],
    id: 3
  },
  {
    title: "PlanIt",
    summary: "A schedule centered social media app.",
    description: "",
    link: "https://github.com/zhg-kj/plan-it",
    imagePaths: [],
    id: 4
  }
]

const projectCard = (project, onScreen) => {
  return (
    <div key={project.id}>
      <div className='divider' style={{backgroundColor: onScreen ? 'white' : 'black'}}/>
      <a target='_blank' rel='noopener noreferrer' href={project.link}>
        <h4 className='project-link' data-replace={project.summary} style={{color: onScreen ? 'white' : 'black'}}>
          <span>{project.summary}</span>
        </h4>
      </a>
    </div>
  )
}

function Home() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-200px');

  return (
    <div className='root-container'>
        {/*<div className='nav-bar' style={{color: onScreen ? 'white' : 'black'}}>
          <p style={{margin: '3vw'}}>Kai Zhuang</p>
          <p style={{margin: '3vw'}}>
            <Link to='/project'>Who I am</Link> | 
            <Link>What I've done</Link> | 
            <Link>Contact</Link>
          </p>
        </div>*/}
        <div className='hero-container'>
          <h1>KAI ZHUANG</h1>
          <img className='pic-profile' src={profile} alt='Me.' />
          <img className='pic-profile' src={gradient} alt='Gradient.' />
        </div>
        <div className='bio-container' style={{color: onScreen ? 'white' : 'black'}}>
          <h2 className='headline'>I don't clone apps, I invent them.</h2>
          <p className='bio'>
            TECHNOLOGY SHOULD BE A SOLUTION SO I CODE WITH THAT PURPOSE. I ANALYZE THE 
            PROBLEMS AROUND ME AND DESIGN TECHNOLOGICAL SOLUTIONS TO SOLVE THEM.
          </p>
          <p className='bio'>
            I'm a software developer that strives to create meaningful technology. I've
            started small, with the problems local to me, but I have big plans for the future.
          </p>
        </div>
        <div className='projects-container' style={{color: onScreen ? 'white' : 'black'}} ref={ref}>
          <div className='projects-wrapper'>
            <h3 className='projects-headline'>PROJECTS & EXPLORATIONS</h3>
            {projects.map((project) => projectCard(project, onScreen))}
          </div>
        </div>
    </div>
  );
}

export default Home;
