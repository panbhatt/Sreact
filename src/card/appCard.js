import React, {Component, PropTypes} from 'react';

import ReactDOM from 'react-dom';

// Components
import Container from './container';

class App extends Component {
    constructor(props) {
      super(props);
      console.log(" CONSOTRUTOR  State = ", this.state) ;
      this.state = { state : "loading"} ;
    }

     getInitialProps() {
      console.log(" Get Intiial Props ") ;
      return {} ;
    }

    render() {
      return (
           <div>
              <h1>Pankaj Bhatt </h1>
              <Container />
          </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root")) ;
