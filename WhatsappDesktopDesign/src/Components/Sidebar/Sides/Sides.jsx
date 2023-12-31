import { BsChatRightTextFill } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import profile from "../../../Images/Profile.png";
import { IoSearchSharp } from "react-icons/io5";
import { CgSortAz } from "react-icons/cg";
import Contacts from "./Contacts";

const Sides = () => {
  return (
    <div className="sides flex flex-row h-[92vh]">
      <div className="lefSide flex flex-col flex-1 justify-between my-5">
        <div className="first space-y-6 flex flex-col mx-0 p-2">
          <div className="chats space-y-1">
            <div className="icon relative flex flex-col items-center rounded-l-full rounded-r-full p-2 bg-[#f0f2f5]">
              <BsChatRightTextFill className="text-[1.5rem] text-slate-700" />
              <div className="notif bg-red-700 text-white absolute w-5 h-5 text-[.7rem] items-center justify-center flex rounded-full p-2 top-0 right-5">
                6
              </div>
            </div>
            <h1 className="text-center font-bold">Chats</h1>
          </div>
          <div className="updates flex flex-col items-center space-y-1">
            <div className="svg">
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8815 7.05102C15.1571 6.47259 14.9129 5.77094 14.2997 5.58486C12.8538 5.14606 11.302 5.138 9.83811 5.57566C8.00142 6.12478 6.4341 7.33641 5.44011 8.9756C4.44611 10.6148 4.09627 12.5647 4.45842 14.4472C4.82058 16.3297 5.86893 18.0106 7.40017 19.164C8.9314 20.3174 10.8364 20.861 12.7457 20.6894C14.655 20.5179 16.4326 19.6434 17.7338 18.2355C19.0349 16.8277 19.7668 14.9868 19.7876 13.0699C19.8042 11.5421 19.3681 10.0528 18.5472 8.78418C18.1991 8.24623 17.4573 8.20513 16.9774 8.62971C16.4975 9.05428 16.4659 9.78361 16.7787 10.3428C17.237 11.1621 17.4777 12.0928 17.4674 13.0447C17.4528 14.3866 16.9405 15.6752 16.0297 16.6607C15.1189 17.6462 13.8746 18.2583 12.5381 18.3784C11.2016 18.4985 9.86806 18.1179 8.7962 17.3106C7.72433 16.5032 6.99049 15.3266 6.73698 14.0088C6.48347 12.6911 6.72836 11.3261 7.42415 10.1787C8.11995 9.03129 9.21707 8.18315 10.5028 7.79876C11.4149 7.52606 12.3758 7.50057 13.2898 7.71491C13.9136 7.8612 14.6059 7.62946 14.8815 7.05102Z"
                  fill="#54656F"
                />
                <circle cx="19.1968" cy="4.83753" r="1.96312" fill="#24D366" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5388 6.74492C20.11 7.17674 20.0602 7.84968 20.3527 8.38332C21.1037 9.75374 21.5308 11.327 21.5308 13C21.5308 16.4027 19.7641 19.3927 17.098 21.1028C16.6034 21.4201 16.3241 22.0035 16.4615 22.5748C16.6464 23.3433 17.4866 23.7582 18.1628 23.3489C21.6616 21.2308 24 17.3885 24 13C24 10.7842 23.4039 8.70772 22.3632 6.92206C21.978 6.26095 21.0779 6.20194 20.5388 6.74492ZM12.0191 25.0882C12.7664 25.0817 13.2641 24.3594 13.0893 23.6327L13.0513 23.4751C12.9272 22.9592 12.442 22.6195 11.9113 22.6195C7.27817 22.6195 3.41005 19.3441 2.49628 14.9824C2.37277 14.3929 1.9063 13.9166 1.30669 13.8595C0.537701 13.7863 -0.119838 14.4192 0.0185144 15.1792C1.0446 20.8155 5.97892 25.0887 11.9113 25.0887C11.9473 25.0887 11.9832 25.0885 12.0191 25.0882ZM11.9113 3.38047C7.78893 3.38047 4.2722 5.97356 2.90326 9.6176C2.68534 10.1977 2.1263 10.6023 1.50939 10.5436C0.760356 10.4723 0.23754 9.75893 0.483426 9.04782C2.1209 4.31222 6.61894 0.911301 11.9113 0.911301C13.6045 0.911301 15.2164 1.2594 16.6793 1.88793C17.44 2.21476 17.5633 3.19658 16.9799 3.78408C16.5874 4.17936 15.9868 4.26606 15.4694 4.05992C14.3688 3.62152 13.1682 3.38047 11.9113 3.38047Z"
                  fill="#54656F"
                />
              </svg>
            </div>
            <h1>Updates</h1>
          </div>
          <div className="commun flex flex-col items-center space-y-1">
            <div className="icon">
              <MdGroups2 className="text-[2rem] text-slate-600"/>
            </div>
            <h1>commun...</h1>
          </div>
          <div className="calls flex flex-col items-center space-y-1">
            <MdPhone className="text-[2rem] text-slate-600"/>
            <h1>Calls</h1>
          </div>

          <div className="channels flex flex-col items-center space-y-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.75 12C23.75 18.4893 18.4893 23.75 12 23.75C10.3039 23.75 8.69176 23.3906 7.23553 22.7439C6.51878 22.4256 5.64763 22.6557 4.88926 22.8556C3.34076 23.2636 1.92191 21.8616 2.31134 20.3083C2.46426 19.6984 2.53447 18.9913 2.18797 18.4666C0.963059 16.6118 0.25 14.3892 0.25 12C0.25 5.51065 5.51065 0.25 12 0.25C18.4893 0.25 23.75 5.51065 23.75 12ZM6.64639 20.0796C6.94405 20.0172 7.25268 20.0741 7.51959 20.2199C8.85028 20.9467 10.3769 21.3599 12 21.3599C17.1693 21.3599 21.3599 17.1693 21.3599 12C21.3599 6.83069 17.1693 2.64013 12 2.64013C6.83069 2.64013 2.64013 6.83069 2.64013 12C2.64013 14.3382 3.49751 16.4762 4.91502 18.1166C5.13247 18.3683 5.2153 18.7134 5.11166 19.0294C4.89691 19.6842 5.47154 20.3259 6.14599 20.1845L6.64639 20.0796Z"
                fill="#54656F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0872 6.55473C10.0872 5.91433 9.47325 5.45088 8.89823 5.73279C6.60842 6.85542 5.03192 9.20943 5.03192 11.9317C5.03192 14.6539 6.60842 17.0079 8.89823 18.1305C9.47325 18.4124 10.0872 17.949 10.0872 17.3086C10.0872 16.9097 9.83813 16.5593 9.48895 16.3665C7.92725 15.5045 6.86947 13.8416 6.86947 11.9317C6.86947 10.0217 7.92725 8.35877 9.48895 7.49677C9.83813 7.30404 10.0872 6.95357 10.0872 6.55473ZM13.6396 17.3774C13.6396 16.9702 13.9 16.6147 14.2614 16.427C15.8848 15.5839 16.9938 13.8873 16.9938 11.9317C16.9938 9.97602 15.8848 8.27939 14.2614 7.43632C13.9 7.24863 13.6396 6.89315 13.6396 6.4859C13.6396 5.85666 14.2362 5.39566 14.808 5.65827C17.1825 6.74876 18.8313 9.14765 18.8313 11.9317C18.8313 14.7157 17.1825 17.1145 14.808 18.205C14.2362 18.4677 13.6396 18.0067 13.6396 17.3774Z"
                fill="#54656F"
              />
              <circle cx="11.9317" cy="11.9317" r="1.84448" fill="#54656F" />
            </svg>
            <h1>Channels</h1>
          </div>
        </div>
        <div className="last flex flex-col items-center space-y-6">
          <div className="quest text-slate-700 text-[2rem]">
            <RiQuestionLine />
          </div>
          <div className="prof overflow-hidden">
            <img src={profile} alt="img" className=" object-cover w-[4rem]" />
          </div>
        </div>
      </div>
      <div className="rightSide flex flex-col flex-[4] mx-8">
        <form className=" relative">
          <IoSearchSharp className="absolute left-1 top-2 text-[1.5rem] text-slate-700" />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full rounded-r-[0.8rem] rounded-l-[0.8rem] p-2 pl-8 text-[1.2rem] bg-[#f0f2f5] shadow"
          />
          <CgSortAz className="absolute right-0 top-1 text-[2.3rem]" />
        </form>
        <div className="contacts overflow-hidden">
          <Contacts/>
        </div>
      </div>
    </div>
  );
};

export default Sides;
