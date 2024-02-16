import React from 'react';

/*I think instead of a command prompt I will make a window that looks like this
  It will be a js function like so:
  
  1  import React from 'react';
  2
  3  function Welcome() {
  4    const my_name = "Kevin McDonald"
  5
  6   return (
  7     <div>
  8       <h1>Welcome!</h1>
  9       <p>My name is {my_name} and this website acts as my portfolio and resume.
  10
  11          If you would like to see the rendered website, please click "run" in the upper left.
  12        </p>
  13      </div>
  14    );
  15  }

  I can also have a simple file explorer that has the code for each page. 
  I will need to create twice the amount of components but would be cool
  */
function RawHome() {
  
  return (
    <div>
      <pre>
        {`
  1  import React from 'react';
  2
  3  function Welcome() {
  4    const my_name = "Kevin McDonald"
  5
  6    return (
  7      <div>
  8        <h1>Welcome!</h1>
  9        <p>My name is {my_name} and this website acts as my portfolio and resume.</p>
  10        <p>If you would like to see the rendered website, please click "run" in the upper left.</p>
  11      </div>
  12    );
  13  }
        `}
      </pre>
    </div>
  );
}

export default RawHome;