import React, { Component } from 'react';
import Header from './Header';
import BranchList from './BranchList';
import Footer from './Footer';

class App extends Component {

  state = {
      options: [{
              id: 1,
              label: 'Singapore',
              value: 'SN'
            },{
                id: 2,
                label: 'India',
                value: 'IN'
            },{
                id: 3,
                label: 'Viet Nam',
                value: 'VN'
            },{
                id: 4,
                label: 'United States',
                value: 'US'
            },
      ]
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <BranchList options={this.state.options}/>
        <br/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
