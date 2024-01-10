import React from 'react';



const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>My Assignment</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Data</button>
       
      </div>
    </header>
  );
};

export default Header;
