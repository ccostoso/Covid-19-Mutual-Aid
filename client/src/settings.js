import React from 'react';

//in a componentDidMount fucntion that grabs user settings
// then pass those settings to the child components 

export const FontSize = () => {
    const small = {
      fontSize: '',
      fontWeight: 200
    };
    const medium = {
      fontSize: '',
      fontWeight: 400
    };
    const large = {
      fontSize: '',
      fontWeight: 600
    };
  
    // return (
    //   <div style={FontSize}>
    //     <h1 style={{color: '#0d1a26', fontWeight: 400}}>Font Size</h1>
    //     <button style={button}>Click Me!</button>
    //   </div>
  
   };
  
   export const Brightness = () => {
    const light = {
      body: '#E2E2E2',
      text: '#363537',
      toggleBorder: '#FFF',
      gradient: 'linear-gradient(#39598A, #79D7ED)',
    }
    
    const dark = {
      body: '#363537',
      text: '#FAFAFA',
      toggleBorder: '#6B8096',
      gradient: 'linear-gradient(#091236, #1E215D)',
    }
   };
   
   // export FontSize;
   // export Brightness;
   // export Language;
