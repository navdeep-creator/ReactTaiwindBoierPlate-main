import React from 'react';
import bgimg from "../assets/navdeep1.jpg";

export const RegisterCard = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex justify-between max-w-screen-lg mx-auto p-8 text-white">
        {/* Left section */}
        <div>
          <div className="text-4xl font-bold mb-4">
            Ready to get started?
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign up for free
            </button>
            <button className="ml-4 text-white font-bold"style={{ borderBottom: '1px solid orange' }}>
              TALK TO SALES
            </button>
          </div>
        </div>

        {/* Right section */}
        <div style={{border:'1px solid orange',padding: '10px',borderRadius: '20px'}}>
          <div className="mb-4 text-xl">
            "At any level of scale, RevenueCat just works"
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
              />
            </div>
            <div className="ml-2">
              <p className="font-sans text-sm antialiased font-normal leading-relaxed">
                David Smith, Widgetsmith
              </p>
            </div>
          </div>
          <div className='mt-3'>
            <p className="text-sm font-bold">
                <span style={{ borderBottom: '1px solid orange' }}>READ CASE STUDY</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
