import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-row gap-3">
      <div
        className="w-[100vw] lg:pl-[7.5%] md:pl-[0%] pl-[1rem] h-fit py-6 border flex flex-col lg:flex-row  justify-between items-center "
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
                <div className="h-[100%] w-[25%] bg-blue-700"></div></div> 04
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
      
      {/* <div className="w-[30vw] space-y-3">
        <div className="w-[100%] h-[20rem] bg-black"></div>

        <div className="w-[100%] h-[20rem] bg-black"></div>
      </div> */}
    </div>
  );
};

export default Banner;
