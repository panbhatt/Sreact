import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component {

   constructor(props) {
      super(props);
   }
   render() {
      var name = "Pankaj Bhatt " ;
     return (
       <h1>First Thing - {name}</h1>
     );
   }

};

ReactDOM.render(<Home />,document.getElementById("root"));
