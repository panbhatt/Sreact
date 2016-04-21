import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class Card extends Component {

      constructor(props){
        super(props);
        this.state = { "tasks" : this.props.tasks};
      }

      render() {
         var styleName = {
             width : '30%',
             borderColor : '#ff0000',
             borderSize : '1px',
             borderStyle : 'solid',
             borderWidth : '3px',
             float : "left",
             position : 'relative',
             marginLeft : "10px",
             paddingLeft : '20px',
             align : "center"
         };
         return (
         <div style={styleName}>
             <h2> {this.props.title} </h2><hr/>
             <p>
                <h3> {this.props.description} </h3>
            </p>
         </div>
       )
      }
}

export default Card ;
