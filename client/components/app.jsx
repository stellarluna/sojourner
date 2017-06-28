import React from 'react';
import ReactDOM from 'react-dom';
import BaseMap from 'Map';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      test: 'string to be rendered for test purposes in this.state constructor'
    }
  }
  render(){
    return (
        <img src='http://www.pondclean.com/wp-content/uploads/2016/09/POND-1.jpg' />
        <BaseMap/>
      );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
