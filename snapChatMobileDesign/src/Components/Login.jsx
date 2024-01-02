/* eslint-disable react/no-unescaped-entities */
import '../index.css'

const Login = () => {
  return (
    <>
      <div className="notif hidden sm:flex items-center justify-center text-[#0D46D9] text-3xl h-screen">
        <p className=" text-center">
          Make sure you are in mobile view to see the contents
        </p>
      </div>
      <div className="wrapper sm:hidden">
        <div className="top h-[5.5rem] bg-[#FFFC00] p-3">
          <div className="snap float-right">
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.2956 38.5156C48.2956 37.9618 48.0187 37.622 47.4648 37.4961C45.7782 37.1185 44.293 36.3759 43.0091 35.2682C41.7253 34.1606 40.7183 32.8012 39.9883 31.1901C39.8121 30.7118 39.724 30.3971 39.724 30.2461C39.724 29.8685 39.9694 29.5412 40.4603 29.2643C40.9512 28.9874 41.4924 28.7734 42.084 28.6224C42.6756 28.4714 43.2168 28.2133 43.7077 27.8483C44.1986 27.4833 44.444 27.0239 44.444 26.4701C44.444 25.9918 44.2112 25.5953 43.7454 25.2806C43.2797 24.9659 42.7951 24.8086 42.2917 24.8086C41.9896 24.8086 41.5868 24.9093 41.0833 25.1107C40.5799 25.3121 40.1897 25.4128 39.9128 25.4128C39.8121 25.4128 39.661 25.3876 39.4596 25.3372C39.5855 22.9457 39.6484 21.5109 39.6484 21.0326C39.6484 19.0438 39.4345 17.6089 39.0065 16.7279C38.1003 14.7643 36.8038 13.235 35.1172 12.14C33.4306 11.0449 31.5174 10.4974 29.3776 10.4974C24.3681 10.4974 20.9067 12.5742 18.9935 16.7279C18.5655 17.6089 18.3516 19.0438 18.3516 21.0326C18.3516 21.5109 18.4145 22.9457 18.5404 25.3372C18.4397 25.3876 18.2635 25.4128 18.0117 25.4128C17.7096 25.4128 17.3069 25.3184 16.8034 25.1296C16.2999 24.9408 15.9223 24.8464 15.6706 24.8464C15.1419 24.8464 14.6573 24.9974 14.2168 25.2995C13.7763 25.6016 13.556 26.0043 13.556 26.5078C13.556 27.0365 13.8014 27.4833 14.2923 27.8483C14.7832 28.2133 15.3244 28.4714 15.916 28.6224C16.5076 28.7734 17.0488 28.9874 17.5397 29.2643C18.0306 29.5412 18.276 29.8685 18.276 30.2461C18.276 30.3971 18.1879 30.7118 18.0117 31.1901C16.4006 34.6641 13.9084 36.7661 10.5352 37.4961C9.98134 37.622 9.70443 37.9618 9.70443 38.5156C9.70443 39.6736 11.4288 40.5295 14.8776 41.0833C14.928 41.2092 15.0035 41.5365 15.1042 42.0651C15.2049 42.5938 15.3496 42.9776 15.5384 43.2168C15.7272 43.4559 16.023 43.5755 16.4258 43.5755C16.7279 43.5755 17.1999 43.5189 17.8418 43.4056C18.4837 43.2923 18.9809 43.2357 19.3333 43.2357C20.2144 43.2357 21.0577 43.4245 21.8633 43.8021C22.6688 44.1797 23.3485 44.5888 23.9023 45.0293C24.4562 45.4698 25.1799 45.8789 26.0736 46.2565C26.9672 46.6341 27.9301 46.8229 28.9622 46.8229C30.0447 46.8229 31.0391 46.6341 31.9453 46.2565C32.8516 45.8789 33.5753 45.4698 34.1165 45.0293C34.6578 44.5888 35.3312 44.1797 36.1367 43.8021C36.9423 43.4245 37.7856 43.2357 38.6667 43.2357C39.0191 43.2357 39.5163 43.286 40.1582 43.3867C40.8001 43.4874 41.2847 43.5378 41.612 43.5378C42.0148 43.5378 42.3043 43.4119 42.4805 43.1602C42.6567 42.9084 42.7951 42.5308 42.8958 42.0273C42.9965 41.5239 43.072 41.2092 43.1224 41.0833C46.5712 40.5295 48.2956 39.6736 48.2956 38.5156ZM58 29C58 34.2613 56.7036 39.1135 54.1107 43.5566C51.5178 47.9998 47.9998 51.5178 43.5566 54.1107C39.1135 56.7036 34.2613 58 29 58C23.7387 58 18.8865 56.7036 14.4434 54.1107C10.0002 51.5178 6.4822 47.9998 3.88932 43.5566C1.29644 39.1135 0 34.2613 0 29C0 23.7387 1.29644 18.8865 3.88932 14.4434C6.4822 10.0002 10.0002 6.4822 14.4434 3.88932C18.8865 1.29644 23.7387 0 29 0C34.2613 0 39.1135 1.29644 43.5566 3.88932C47.9998 6.4822 51.5178 10.0002 54.1107 14.4434C56.7036 18.8865 58 23.7387 58 29Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="body flex flex-col items-center">
          <h1 className="text-2xl font-bold my-10">Welcome Back!</h1>
          <div className="google bg-black text-[#FFFC00] px-14 py-3 rounded-l-full rounded-r-full text-[1.2rem]">
            <h3>login in via google</h3>
          </div>
          <h6 className="mt-6 font-bold text-[0.7rem]">Trouble loging in?</h6>
          <h1 className=" m-5 text-[1.4rem] font-bold text-slate-400">OR</h1>
          <div className="form w-[80%] mt-5">
            <form className="flex flex-col space-y-14">
              
              <div className="formdiv py-4 relative border-b-3 border-b-2 border-black  outline-none  px-4 text-[1rem]">
                <input id='userNameInput' type="text" className="absolute left-[-1rem] bottom-1 bg-transparent border-none outline-none px-4"/>
                <label className="absolute left-[-.1rem] bottom-[5rem] pointer-events-none uppercase font-bold text-slate-300">Username Or email</label>
              </div>
              <div className="formdiv py-4 relative border-b-3 border-b-2 border-black  outline-none  px-4 text-[1rem]">
                <input id='passwordInput' type="password" className="absolute left-[-1rem] bottom-1 bg-transparent border-none outline-none px-4"/>
                <label className="absolute left-[-.1rem] bottom-[5rem]  pointer-events-none uppercase font-bold text-slate-300">password</label>
              </div>
              
              <p className=" text-[#0D46D9] font-semibold text-right ">
                forgot password?
              </p>
              <button className="text-[1.4rem] text-white py-3 font-semibold mx-5 mt-14 bg-[#bbb] rounded-l-full rounded-r-full">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="signup flex items-center justify-center mt-14 mb-16">
          <span>
            <b> Signup</b> if you don't have an account
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
