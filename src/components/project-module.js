import React, { Component } from 'react';
// import { faLeaf } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
// import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
// import Figure from 'react-bootstrap/Figure';

class ProjectModule extends Component {
  constructor(props) {
    super(props);

    // this.state = { inputBarText: '' };
    this.state = {
    };
  }


  //   div className="contactButtons">
  //       <div className="envelope"><a href="mailto:xiaoyi.julian.wu@gmail.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true" /></a></div>
  //       <div className="linkedin"><a href="https://www.linkedin.com/in/julian-wu-81b73110b/"> <i className="fa fa-linkedin fa-2x" aria-hidden="true" /></a></div>
  //     </div>

  // onClick Handlers for Icons
  onClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/julian-wu-81b73110b/', '_blank');
  }

  onClickEmail = () => {
    window.open('mailto:xiaoyi.julian.wu@gmail.com', '_blank');
  }

  onClickLink = (link) => {
    window.open(link, '_blank');
  }

  //   onClickTest = () => {
  //     alert('Hello!');
  //   }

  render() {
    this.iconImage = this.props.iconImage;
    this.class = this.props.class;
    return (
      <>
        <div className="projectContainer">
          <div className="projectContainerInner">
            <div className="frontSide">
              <img src={this.props.iconImage} className={this.props.class} id={this.props.id} alt="" />
            </div>
            <div className="backSide">
              <div className="titleContainer">
                <h1> {this.props.title} </h1>
                {this.props.icon}
              </div>
              <div className="buttonsContainer">
                <button type="button" onClick={() => window.open(this.props.link, '_blank')}><span>Site </span></button>
              </div>
              <div className="textContainer">
                <p> {this.props.description} </p>
              </div>
              <div className="toolsContainer">
                <h2> {this.props.tools} </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectModule;
