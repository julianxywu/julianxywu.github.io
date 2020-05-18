// change require to es6 import style
// import $ from 'jquery';
import '../style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router, Route, NavLink, Switch,
// } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
// import FigureImage from 'react-bootstrap/FigureImage';
// import FigureCaption from 'react-bootstrap/FigureCaption';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactBar from './contact-bar';
import ProjectModule from './project-module';

const Welcome = (props) => {
  return (
    <section id="home">
      <div className="title">
        <div className="openingAnimation">Hello!</div>
        <div className="openingAnimation"><span>I&apos;m Julian.</span></div>
      </div>
      <div id="scrollMessage" className="scrollMessage">
        Scroll down!
      </div>
    </section>
  );
};

const About = (props) => {
  return (
    <section id="about">
      <div className="header">About Me</div>
      <div className="paragraph"> I am currently a sophomore at <span> Dartmouth College</span>,
        studying Computer Science and Economics. I was born in Singapore, but grew up
        in Rhode Island. In my free time, I like to scuba dive, play music, and travel.
        I&apos;m familiar with Python, Java, C, as well as some web-dev languages such as HTML, CSS,
        Javascript, and React.
        At my time at Dartmouth, I have been a TA for CS1 and a Learning Fellow for CS50.
        I&apos;m excited to work with DALI to see how much I can grow as a developer and manager,
        as well as contribute to projects that have a real impact on our society!
      </div>
      <div className="aboutPicContainer">
        <Figure>
          <Figure.Image
            // eslint-disable-next-line prefer-template
            src={process.env.PUBLIC_URL + '/images/diving.jpg'}
            className="responsive"
            id="diving"
            alt="A picture of me wearing scuba gear."
          />
          <Figure.Caption>Bintan Island, Indonesia</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            src={`${process.env.PUBLIC_URL}/images/music.jpg`}
            className="responsive"
            id="music"
            alt="A picture of me playing oboe."
          />
          <Figure.Caption>Dartmouth College Wind Ensemble</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image
            src={`${process.env.PUBLIC_URL}/images/traveling.jpg`}
            className="responsive"
            id="traveling"
            height="500"
            alt="A picture of me on top of Mount Fuji."
          />
          <Figure.Caption>Mount Fuji, Japan</Figure.Caption>
        </Figure>
      </div>
    </section>
  );
};

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="header">Projects</div>
      <div className="projectsContainer">
        <ProjectModule
          iconImage={`${process.env.PUBLIC_URL}/images/Leaflet.png`}
          class="coverImage"
          id="coverImage"
          title="Leaflets"
          icon={<FontAwesomeIcon icon={faLeaf} className="LeafIcon" id="iconSpacing" />}
          description="A simple interactive 'post-it' board to create, edit, move, and delete notes"
          tools="HTML | CSS | JS | Firebase"
          link="http://leaflets.surge.sh/"
        />
        <ProjectModule
          iconImage={`${process.env.PUBLIC_URL}/images/BlackMirrorBuzzFeed.png`}
          class="coverImage"
          id="coverImage"
          title="Black Mirror"
          description="A 'Buzzfeed' style quiz to see which episode of Black Mirror you would enjoy the most!"
          tools="HTML | CSS | JS"
          link="https://dartmouth-cs52-20s.github.io/lab2-quizzical-julianxywu/"
        />
        <ProjectModule
          iconImage={`${process.env.PUBLIC_URL}/images/SpaceInvaders.png`}
          class="coverImage"
          id="coverImage"
          title="Space Shooter"
          description="A game similar to the antiquated game 'Space Invaders'"
          tools="HTML | CSS | JS | Firebase"
          link="https://github.com/julianxywu/Projects/tree/master/spaceInvaders"
        />
      </div>
      {/* <div className="maintenance">Under Construction! <br /> Coming Soon!</div> */}
    </section>
  );
};

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

const App = (props) => {
  return (
  // <Router>
    <div id="coverContainer">
      <ContactBar />
      <Welcome />
      <About />
      <Projects />
      {/* <Nav /> */}
      {/* <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch> */}
      {/* adding in the counter component */}
      {/* <Counter /> */}
      {/* adding in the button 'control' component */}
      {/* <Controls /> */}
    </div>
  // </Router>
  );
};

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

export default App;
