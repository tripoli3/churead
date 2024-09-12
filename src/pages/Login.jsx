import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const Login = () => {
  //logic
  //   const history = useNavigate();
  //   const goToHome = () => {
  //     history('/');
  //   };

  //view
  return (
    <div className="wrap ">
      <h1>
        <img src="./images/logo.svg" alt="churead로고" />
      </h1>
      <h3 className="text-white text-[10px]">Churead에서 소통해보세요</h3>
      <InputField
        type={'text'}
        name={'email'}
        placeholder={'Email'}
        className=" block rounded-lg border-black"
      />
      <InputField
        type={'text'}
        name={'password'}
        placeholder={'Password'}
        className=" block rounded-lg border-black"
      />
      <LoginButton text={'Login'} className="bg-white mx-auto" />
      <p className="text-slate-600 text-[10px]">
        계정이 없으신가요?{' '}
        <a href="#" className="text-blue-700">
          로그인
        </a>
      </p>
      <p className="text-slate-600 text-[10px]">or</p>
      <LoginButton text={'Continue with Google'} />
      {/* <h2>Login</h2> */}
      {/* <button type="button" onClick={goToHome}>Home화면으로 이동</button> */}
      {/* <Link to={'/'} style={{ color: 'red' }} className="link">
        Home화면으로 이동
      </Link> */}
    </div>
  );
};

export default Login;
