import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

class Footer extends React.Component{
    render(){
      return(
        <React.Fragment>
          <AwesomeButton
           cssModule={AwesomeButtonStyles}
           type="primary"
           onClick={this.props.onClick}
          >
            Add Item
          </AwesomeButton> {' '}
          <AwesomeButton
           cssModule={AwesomeButtonStyles}
           type="primary"
          >
            Export to CSV
          </AwesomeButton> {' '}
          <AwesomeButton
           cssModule={AwesomeButtonStyles}
           type="primary"
          >
            Save
          </AwesomeButton>
        </React.Fragment>
      );
    }
}

export default Footer;
