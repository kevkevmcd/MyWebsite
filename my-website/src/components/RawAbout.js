import React from "react";

function RawAbout() {
  
    return (
      <div>
        <pre>
          {`
    1  import React from 'react';
    2
    3  function About() {
    4
    5    return (
    6      <div>
    7        <h1>About Me</h1>
    8        <p>I went to uncc and I work for Newfold.</p>
    9        <p>I want job plz</p>
    10      </div>
    11    );
    12  }
          `}
        </pre>
      </div>
    );
  }
  
  export default RawAbout;