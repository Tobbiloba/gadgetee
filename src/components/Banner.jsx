import React from "react";
let id = 2;
const Banner = () => {
  return (
    <div className="flex flex-row gap-3">

        {
            id === 1 ?
        
      <div
        className="w-[100vw] lg:pl-[7.5%] md:pl-[0%] h-[50rem] lg:h-[45rem] overflow-hidden border-red-500 pl-[1rem] py-6 border flex flex-col lg:flex-row  justify-between items-center "
        //   style={{
        //      background: rgb(59,54,120);
        //      background: linear-gradient(90deg, rgba(59,54,120,1) 0%, rgba(50,50,185,1) 35%, rgba(0,5,17,1) 100%);
        //   }}

        // style={{
        //   background: "rgb(195,200,210)",
        //   background:
        //     "linear-gradient(90deg, rgba(195,200,210,1) 0%, rgba(90,90,199,1) 36%, rgba(0,5,17,1) 100%)",
        // }}
      >
        <div className="flex-1 sans">
          <div className="flex flex-row items-center text-blue-700 sans">
            01 <div className="w-16 mx-3 rounded-sm h-2 bg-blue-200 overflow-hidden">
                <div className="h-[100%] w-[%] bg-blue-700"></div></div> 04
          </div>
          <h1 className="lg:text-[72px] text-[56px] md:text-[64px] text-blue-900 mt-[2rem] flex flex-col">
            Make life different.
            <br />
            <span className="flex items-center">
                Your life a ride.
                {/* <div className="w-12 mx-2 h-2 bg-blue-900"></div> */}
                 
            </span>
            
          </h1>
          <p className="sans mt-[2rem]">
            Whether you're walking, driving, cycling, or taking  public
            transit, watched makes it easy <br className="hidden lg:flex"/> every step of the way.
          </p>
          <button className="mt-[1.5rem] border bg-blue-600 text-white px-4 py-2">Buy $399.89</button>
        </div>
        <div className="lg:w-[50%] w-[100%] flex justify-end">
          <img
            src="/watch2.png"
            alt="watch image"
            className="w-[100%] h-auto"
          />
        </div>
      </div>
      : id === 2 ? <div
      className="w-[100vw] overflow-hidden lg:pl-[7.5%] md:pl-[5%] pl-[1rem] h-[50rem] lg:h-[45rem] pt-6 flex flex-col lg:flex-row  justify-between items-center "
   
      style={{
        background: "rgb(23,37,84)",
        background:
        "linear-gradient(185deg, rgba(23,37,84,1) 0%, rgba(168,180,255,1) 68%, rgba(224,231,255,1) 86%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="flex-1 sans">
          <div className="flex flex-row items-center text-blue-700 sans">
            02 <div className="w-16 mx-3 rounded-sm h-2 bg-blue-200 overflow-hidden">
                <div className="h-[100%] w-[50%] bg-blue-700"></div></div> 04
          </div>
          <h1 className="sans text-[48px] lg:text-[54px] text-white mt-3">HANDS ON</h1>
          <h1 className="sans text-[48px] lg:text-[54px] text-blue-200">iPhone 14 Pro Max</h1>
          <div className="h-2 w-[20rem] lg:w-[30rem]" style={{
            background: "rgb(18,7,159)",
            background: "linear-gradient(90deg, rgba(18,7,159,1) 0%, rgba(96,56,242,1) 20%, rgba(113,124,255,1) 42%, rgba(168,180,255,1) 68%, rgba(224,231,255,1) 86%, rgba(255,255,255,1) 100%)"
          }}></div>
          <p className="sans mt-[2rem] text-white">
            There are many variations of passages of Lorem ipsum available, but the majority have suffered in some form by injected 4umour.
          </p>
          <button className="mt-[1.5rem] bg-blue-600 text-white px-4 py-2">Buy $399.89</button>
        </div>
        <div className="lg:w-[50%] lg:min-w-[30rem] h-[40rem] w-[100%] flex justify-end items-end">
          <img
            src="/iphone1.png"
            alt="watch image"
            className="w-auto h-[100%]"
          />
        </div>
    </div> : ''
      
      }
      
      {/* <div className="w-[30vw] space-y-3">
        <div className="w-[100%] h-[20rem] bg-black"></div>

        <div className="w-[100%] h-[20rem] bg-black"></div>
      </div> */}
    </div>
  );
};

export default Banner;
