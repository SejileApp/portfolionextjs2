"use client";
import React from "react";
// import Image from "next/image";
// import hero from "../../../public/img/login.jpg";
import {useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  interface IFormData {
    email: string;
    password: string;
  }
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<IFormData | null>(null);

  const handleInput =(e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name] :e.target.value})
  }

  const loginHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email:formData.email,
        password:formData.password,
      });
      data.ok ? router.replace("/") : setError("Email or Password incorrect");

      // console.log(data);
      // if(data){
      //   const pathName = data.url.split("%2F")
      //   console.log("path name",pathName[pathName.length-1])

      //   // data.url.endsWith("login") ?console.log("v"): console.log(pathName[1])
      //   if (data.url.endsWith("login")) {
      //     router.replace("/")
      //     // console.log("f")
      //   } else {
      //     router.push("/"+pathName[pathName.length-1])
      //     // router.router.forward()
      //     // console.log("t")
      //   }
      // }
    } catch (er) {
      setError(er);
      console.log(error);
    }
  };

  return (
    <div className="bg-bg-color2-light dark:bg-bg-color2 full-screen dark:text-color-text text-color-text-light full-screen ">
      <div className="container flex justify-center ">
        <div className="main_section_style">
          <div className=" dark:bg-bg-color bg-bg-color-light p-[35px] flex flex-col  justify-center gap-2  sm:flex-row   ">
            {/* ----------call me--------------- */}
            <div className="w-full p-5 flex justify-center items-center bg-[url('/img/login.jpg')] ">
              <p className=" font-bold text-[26px] capitalize ">
                Login to your account
              </p>

              {/* <Image src={hero} alt="About img" priority className="  " /> */}
            </div>
            {/* ----------form--------------- */}
            <div className="   w-full p-[35px]  bg-bg-color2-light dark:bg-bg-color2  ">
              <div className=" my-6 ">
                {error && (
                  <div className="text-red-500 p-2 text-center animate-bounce">
                    {error}
                  </div>
                )}
                <h1 className="style-h1 -mt-[12px] text-center ">Login </h1>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>
              <form onSubmit={loginHandler} className="my-5">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    id="email_adress"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email_adress"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>

                <button type="submit" className="style-btn  ">
                  Login
                </button>
              </form>
              <div className="text-center">
                <span className=" bg-bg-color2-light dark:bg-bg-color2 absolute -mt-[14px]  px-2">
                  or
                </span>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>

              <button className=" flex justify-center items-center gap-1 text-medium capitalize bg-bg-color-light dark:bg-bg-color hover:border-primary hover:border hover:shadow-sm hover:shadow-primary border p-4 w-full my-4  ">
                <span>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
