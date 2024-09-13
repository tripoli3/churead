import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  //logic
  //   const history = useNavigate();
  //   const goToLogin = () => {
  //     history('/login');
  //   };

  //view
  return (
    <div className="text-white">
      <h2>Home</h2>
      
      {/* <button type="button" onClick={goToLogin}>
        Login으로 이동
      </button> */}
      <Link to={'/chureadhome'}>Chureadhome으로 이동</Link><br />
      <Link to={'/login'}>Login으로 이동</Link><br />
      <Link to={'/signin'}>SignIn으로 이동</Link>
      
    </div>
  );
};

export default Home;
