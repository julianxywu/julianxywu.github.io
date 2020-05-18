import React, { Component } from 'react';
// import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

class ContactBar extends Component {
  constructor(props) {
    super(props);

    // this.state = { inputBarText: '' };
    this.state = {};
  }


  //   div className="contactButtons">
  //       <div className="envelope"><a href="mailto:xiaoyi.julian.wu@gmail.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true" /></a></div>
  //       <div className="linkedin"><a href="https://www.linkedin.com/in/julian-wu-81b73110b/"> <i className="fa fa-linkedin fa-2x" aria-hidden="true" /></a></div>
  //     </div>

  // eslint-disable-next-line class-methods-use-this
  //   onInputChange = (event) => {
  //     console.log(event.target.value);
  //     this.setState({ inputBarText: event.target.value });
  //   }


  // onClick Handlers for Icons
  onClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/julian-wu-81b73110b/', '_blank');
  }

  onClickEmail = () => {
    window.open('mailto:xiaoyi.julian.wu@gmail.com', '_blank');
  }

  render() {
    return (
      <>
        <div id="contactBar">
          <FontAwesomeIcon icon={faEnvelope} className="icon" id="emailIcon" onClick={this.onClickEmail} />
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" id="linkedInIcon" onClick={this.onClickLinkedIn} />
        </div>
      </>
    );
  }
}

export default ContactBar;
