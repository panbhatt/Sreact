import React , { PropTypes }  from 'react';
import ReactDOM from 'react-dom';


class School extends React.Component {

   constructor(props) {
      super(props);
   }
   render() {

     return (
       <ul>
          <Room text="Pan" > Pankaj Bhatt </Room>
          <Room text="Shy" > Shyam Bhatt </Room>
          <Room />
       </ul>
     );
   }

};


class Room extends React.Component {

  render() {
      return (
        <li>{this.props.text}  - {this.props.children}</li>

      )

  }
}

Room.propTypes = {
  text : PropTypes.string.isRequired,
  no : PropTypes.string.isRequired
}

Room.defaultProps = {
  no : 10 ,
  text : "Sample Text"
}

ReactDOM.render(<School  />, document.getElementById("root"));
