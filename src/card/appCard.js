import React, {Component, PropTypes} from 'react';

import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
      super(props);
      console.log(" CONSOTRUTOR  State = ", this.state) ;
      this.state = { state : "loading"} ;
    }
  /*  getInitialState() {
      console.log(" Initial State ") ;
       return { "state" : "initial"} ;
    }; */
     getInitialProps() {
      console.log(" Get Intiial Props ") ;
      return {} ;
    }

    render() {
      return (
           <div>
              <h1>Pankaj Bhatt </h1>
          </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root")) ;
