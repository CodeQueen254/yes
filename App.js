

// function App() {
//   return 
// <div className='text-5xl'>
//   App
//   </div>
  
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  //
// import React from 'react'

// function App() {
//   const name = 'John';
//   // const x =10;
//   // const y =20;
//   const names = ['John', 'Mary', 'Bob']
//   // const styles = {
//   //   color: 'pink',
//   //   fontSize: '57rem'
//   // }
   
//   return (<>
//     <div className='text-5xl'>App</div>
//     <p style={{color:'pink',fontSize:'76px'}}>Hello {name}</p>
//      <ul>
//       {names.map((name, index) =>(
//       <li>{name}</li> 
//     ))}
//     </ul> 

//     </>
//   )
// };

// export default App;

import React from 'react'
import Home from './components/Home.jsx';
import Menu from './menu/menu.jsx';

function App() {
  const menu1Options = ['Products', 'Calenders', 'Reminders'];
  const menu2Options = ['About', 'Location'];
  return(
<>
<div className="App">
  <div style={{ display: 'flex', gap: '20px' }}>
  <h1 className="logo">Snap</h1>
        <Menu title="Features" options={menu1Options} />
        <Menu title="Companies" options={menu2Options} /><br></br>
             </div>
</div>
<Home/>
</>
  );   
}; 
export default App;

