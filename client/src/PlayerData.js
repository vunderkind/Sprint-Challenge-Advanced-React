import React from 'react';

export default function PlayerData(props) { 
  
  return (
    <div className="App" >
          <h2>My name is {props.name}</h2>
          <p>I play for {props.country}</p>
          <p>In July 2019, Google ranked my trend search status at {props.searches} </p>
  </div>
  
  )
  
}

      