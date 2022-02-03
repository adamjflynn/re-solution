import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="container-fluid bg-secondary mb-4 py-2">
        <div className="container flex-row justify-space-around-lg justify-center align-center">
          <Link to="/">
          <h1 className="text-tertiary">(RE)</h1><h1 className="text-primary"> Solution</h1>
          </Link>
        </div>
      </header>
    );
  };
  export default Header;