
import React, { useState } from 'react';
import './menuModule.css';

const Menu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};
export default Menu;
// const App = () => {
//   const menu1Options = ['Option 1', 'Option 2', 'Option 3'];
//   const menu2Options = ['Choice A', 'Choice B', 'Choice C'];

//   return (
//     <div className="App">
//       <h1>Two Dropdown Menus Example</h1>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <DropdownMenu title="Menu 1" options={menu1Options} />
//         <DropdownMenu title="Menu 2" options={menu2Options} />
//       </div>
//     </div>
//   );
// };

// export default App;

