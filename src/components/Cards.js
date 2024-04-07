import React from 'react'
import FieldStyle from './FieldStyle'

export const Cards = ({Image,Fied,Title,Description,Author,Date}) => {
  return (
    <div className='h-100 m-5 p-5'>
        <div className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-100 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img className='cardimg' src={Image} alt="ui/ux review check" />
            </div>


            <FieldStyle field={Fied} />

            
            <div className="p-6">
                <h4 className="block font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {Title}
                </h4>
                <p className="block mt-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                {Description}
                </p>
            </div>
            <div className="flex items-center p-6">
                <div className="flex items-center">
                    <img alt="Tania Andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-inherit">
                    {Author}
                    <br />
                    {Date}
                </p>
            </div>
        </div> 
    </div>
  )
}
