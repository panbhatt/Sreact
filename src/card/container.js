import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import Card from './card';

class Container extends Component {
       constructor(props){
         super(props);
         this.state = {"tasks" : [
                  { "task" : "Bring Milk" , "state" : 0},
                  { "task" : "Bring onion" , "state" : 0 },
                  { "task" : "GSSP-3117", "state" : 1},
                  { "task" : "ToolTIp Modification", "state" : 1},
                  { "task" : "Rent for April", "state" : 2},
                  { "task" : "Visit Roos", "state" : 2},
                  { "task" : "Buy Pillow", "state" : 2},
                  { "task" : "Buy Blanket", "state" : 2},
            ]};
       }

       render() {
          var styleName = {
              borderWidth : '3px',
              borderSize : '2px',
              borderStyle : 'solid',
              height : '500px',
              borderColor : "#000000",
              width : '90%',
            };
          return (
          <div style={styleName}>
             <h2> Cards that you have </h2>
             <Card title="To-Do" tasks="" description="List of to-do items"/>
             <Card title="In Progress" tasks="" description="List of Work in Progress"/>
             <Card title="Completed" tasks="" description="List of Complted items"/>
          </div>
        );
       }
}


export default Container;
