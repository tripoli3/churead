import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import CreateButton from '../components/CreateButton';

const SignIn = () => {
  //logic
  //   const history = useNavigate();
  //   const goToHome = () => {
  //     history('/');
  //   };

  //view
  return (
    <div className="text-center px-6">
      <h1 className="flex justify-center">
        <img src="./images/logo.svg" alt="churead로고" className />
      </h1>
      <h3 className="text-red font-bold text-base py-6">
        Churead에서 소통해보세요
      </h3>
      <form id="login-form" className="text-center flex flex-col gap-2">
        <InputField type="text" field="name" />
        <InputField type="email" field="email" />
        <InputField type="password" field="password" />
        <CreateButton category="create" />
      </form>
      <div className="flex justify-center gap-1 py-6">
        <p className="text-slate-600">
          계정이 없으신가요?
          <a href="#" className="text-blue-700">
            로그인
          </a>
        </p>
      </div>
      <div>
        <p className="text-slate-600 pb-6">or</p>
      </div>

      <LoginButton category="socialLogin" />

      {/* <h2>Login</h2> */}
      {/* <button type="button" onClick={goToHome}>Home화면으로 이동</button> */}
      {/* <Link to={'/'} style={{ color: 'red' }} className="link">
        Home화면으로 이동
      </Link> */}
    </div>
  );
};

export default SignIn;
