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
    <div className="text-red-500">
      <h2>Home</h2>
      <Link to={'/login'}>Login으로 이동</Link>
      {/* <button type="button" onClick={goToLogin}>
        Login으로 이동
      </button> */}
    </div>
  );
};

export default Home;
