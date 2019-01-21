import React, { Component } from 'react';
import BranchItem from './BranchItem';

class BranchList extends Component {
  render() {
    let branchItems;

    if(this.props.options){
      branchItems = this.props.options.map(option => {
        //console.log(project);
        return (
          <div>
            <BranchItem option={this.props.options} optionVal={option}/>
          </div>
        );
      });
    }

    const inputBoxes = (
      <div className="DivStyle">
        <input type="text" className="Input" value={this.props.options[0].value}/><br/>
        <input type="text" className="Input" value={this.props.options[1].value}/><br/>
        <input type="text" className="Input" value={this.props.options[2].value}/><br/>
        <input type="text" className="Input" value={this.props.options[3].value}/><br/>
      </div>
    )

    return (
      <div>
        <h3>BranchItem List</h3>
        {branchItems}
        {inputBoxes}
      </div>
    );
  }
}


export default BranchList;
