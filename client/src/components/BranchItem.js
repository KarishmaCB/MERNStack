import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './component.css';

class BranchItem extends React.Component{
    render(){
      return(
        <React.Fragment>
          <Dropdown
            className="Dropdown"
            options={this.props.option}
            value={this.props.optionVal}
            placeholder="Select an option" />
        </React.Fragment>
      );
    }
}

export default BranchItem;
