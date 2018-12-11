import React from 'react';
import { Link } from "react-router-dom";
const Error404 = () => {
	return (
    <div style={{textAlign:'center'}}>
      <h1 style={{textAlign:'center', color:'white', margin:'80px auto', fontSize:'2rem'}}> Error Not Found </h1>
      <Link to="/" className="routeHome"style={{textDecoration:'none',  color:'white'}}>
      Go Back
      </Link>
    </div>
	);
};

export default Error404;
