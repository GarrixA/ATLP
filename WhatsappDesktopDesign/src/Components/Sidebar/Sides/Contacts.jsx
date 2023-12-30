/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import claire from "../../../Images/Claire.png";
import joe from "../../../Images/Joe.png";
import prime from "../../../Images/Prime.png";
import progate from "../../../Images/Progate.png";
import yves from "../../../Images/Yves.png";
import mucyo from "../../../Images/Mucyo.png";
import joy from "../../../Images/Joy.png";
import { BsFillPinAngleFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className="contacts flex flex-col space-y-4 mx-2 mt-10">
        <Link to={"links"}>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={claire} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Claire</h1>
            <p>05:14 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Haha oh man</h1>
            <span>
              <BsFillPinAngleFill className="text-[1.2rem] text-slate-700" />
            </span>
          </div>
        </div>
      </div>
      </Link>
      
      <Link to={"links2"}><div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={joe} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Joe</h1>
            <p>05:40 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Haha that's terrifying 😂</h1>
            <span>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0712 0.922821C10.9908 0.855113 10.8892 0.821259 10.7665 0.821259C10.6184 0.821259 10.4914 0.880503 10.3856 0.998993L4.19672 8.63522L1.79096 6.36276C1.74864 6.31621 1.69786 6.28024 1.63861 6.25485C1.57937 6.22946 1.51801 6.21677 1.45453 6.21677C1.32335 6.21677 1.20909 6.26543 1.11176 6.36276L0.80072 6.6738C0.707621 6.76267 0.661072 6.87481 0.661072 7.01022C0.661072 7.14564 0.707621 7.2599 0.80072 7.353L3.79682 10.3491C3.94493 10.4845 4.11208 10.5522 4.29828 10.5522C4.40408 10.5522 4.50564 10.529 4.60297 10.4824C4.7003 10.4359 4.7807 10.3703 4.84418 10.2856L11.4901 1.86862C11.5621 1.77129 11.598 1.67185 11.598 1.57028C11.598 1.41371 11.5346 1.28887 11.4076 1.19577L11.0712 0.922821ZM8.62104 8.59714C8.43061 8.47865 8.24864 8.36016 8.07514 8.24167C7.99473 8.16127 7.88894 8.12106 7.75775 8.12106C7.60964 8.12106 7.48904 8.17396 7.39594 8.27976L7.10395 8.60983C7.01931 8.70716 6.97699 8.81507 6.97699 8.93356C6.97699 9.06475 7.02354 9.17901 7.11664 9.27634L8.19574 10.3491C8.33116 10.4845 8.4962 10.5522 8.69086 10.5522C8.79665 10.5522 8.89822 10.529 8.99555 10.4824C9.09288 10.4359 9.1754 10.3703 9.24311 10.2856L15.8637 1.89401C15.9356 1.80938 15.9716 1.70993 15.9716 1.59567C15.9716 1.45179 15.9123 1.32696 15.7938 1.22116L15.4384 0.948212C15.358 0.880503 15.2585 0.846649 15.14 0.846649C14.9962 0.846649 14.8713 0.905894 14.7655 1.02438L8.62104 8.59714Z" fill="#53BDEB"/>
            </svg>
            </span>
          </div>
        </div>
      </div>
      </Link>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={prime} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Optimus prime</h1>
            <p className="text-green-500">10:17 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">My name is Optimus prime 🤖</h1>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                5+
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={progate} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Progate Rwanda Deve...</h1>
            <p className="text-green-500">10:58 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem] ">~Theotime: This is amazing...</h1>
            <span>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                1
            </span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={yves} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Yves</h1>
            <p className="text-green-500">11:06 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Bro, that’s so sick ⚡️</h1>
            <span>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                1
            </span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={prime} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Mucyo</h1>
            <p>11:12 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">The new update is live 🚀</h1>
            <span>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                1
            </span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={joy} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Joy</h1>
            <p className="text-green-500">12:40 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]"> It is happening  😂</h1>
            <span>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                1
            </span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={mucyo} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Elwin</h1>
            <p>10:14 am</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Yeah man that's right </h1>
            <span>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0712 0.922821C10.9908 0.855113 10.8892 0.821259 10.7665 0.821259C10.6184 0.821259 10.4914 0.880503 10.3856 0.998993L4.19672 8.63522L1.79096 6.36276C1.74864 6.31621 1.69786 6.28024 1.63861 6.25485C1.57937 6.22946 1.51801 6.21677 1.45453 6.21677C1.32335 6.21677 1.20909 6.26543 1.11176 6.36276L0.80072 6.6738C0.707621 6.76267 0.661072 6.87481 0.661072 7.01022C0.661072 7.14564 0.707621 7.2599 0.80072 7.353L3.79682 10.3491C3.94493 10.4845 4.11208 10.5522 4.29828 10.5522C4.40408 10.5522 4.50564 10.529 4.60297 10.4824C4.7003 10.4359 4.7807 10.3703 4.84418 10.2856L11.4901 1.86862C11.5621 1.77129 11.598 1.67185 11.598 1.57028C11.598 1.41371 11.5346 1.28887 11.4076 1.19577L11.0712 0.922821ZM8.62104 8.59714C8.43061 8.47865 8.24864 8.36016 8.07514 8.24167C7.99473 8.16127 7.88894 8.12106 7.75775 8.12106C7.60964 8.12106 7.48904 8.17396 7.39594 8.27976L7.10395 8.60983C7.01931 8.70716 6.97699 8.81507 6.97699 8.93356C6.97699 9.06475 7.02354 9.17901 7.11664 9.27634L8.19574 10.3491C8.33116 10.4845 8.4962 10.5522 8.69086 10.5522C8.79665 10.5522 8.89822 10.529 8.99555 10.4824C9.09288 10.4359 9.1754 10.3703 9.24311 10.2856L15.8637 1.89401C15.9356 1.80938 15.9716 1.70993 15.9716 1.59567C15.9716 1.45179 15.9123 1.32696 15.7938 1.22116L15.4384 0.948212C15.358 0.880503 15.2585 0.846649 15.14 0.846649C14.9962 0.846649 14.8713 0.905894 14.7655 1.02438L8.62104 8.59714Z" fill="#53BDEB"/>
            </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={mucyo} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Mugetch</h1>
            <p className="text-green-500">01:14 am</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Salama bro</h1>
            <span className="text-white font-extrabold bg-green-500 p-1 text-[.7rem] rounded-full h-6 w-6 flex items-center justify-center">
                1
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={mucyo} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Kamanzi</h1>
            <p>05:14 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Ndabyumva noneho</h1>
            <span>
              <BsFillPinAngleFill className="text-[1.2rem] text-slate-700" />
            </span>
          </div>
        </div>
      </div>
      <div className="wrap flex space-x-2">
        <div className="image w-[20%] rounded-full overflow-hidden">
          <img src={mucyo} alt="img" className="w-full object-cover" />
        </div>
        <div className="na mes flex flex-col justify-between w-full">
          <div className=" flex justify-between w-full">
            <h1 className="font-bold text-[1.2rem]">Cedro</h1>
            <p>05:14 pm</p>
          </div>
          <div className="flex justify-between">
            <h1 className="text-[0.94rem]">Really mn?</h1>
            <span>
              <BsFillPinAngleFill className="text-[1.2rem] text-slate-700" />
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contacts;
