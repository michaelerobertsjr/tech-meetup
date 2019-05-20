import React from 'react';
import './App.css';
import axios from "axios";
import _ from "lodash";

class App extends React.Component {
  constructor(props){
    super(props);
    // get event info
    this.state = {
      events: [],
    }
  }
  componentDidMount (){
    axios.get("http://localhost:3000")
      .then(response => {
        console.log(response.data);
        this.setState({
          events: response.data,
        });
       
      })
  }
  render(){
    
    return (
      <div className="container">
        <div id='title' className="jumbotron"><h1>Tech Meetups</h1></div>
       <div>
        {this.state.events.length && this.state.events.map(event => {
          return (
          <div className="row card card-info" key={event.id}>
            <div className="card-body">
              <p>{event.name}</p>
              <p>{_.get(event, 'event.venue.name', '') }</p>
              <p>{`${event.local_date}, ${event.local_time}`}</p>
              <a href={event.link}>link</a>
            </div>
          </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
