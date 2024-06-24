import React from 'react'

const AccountSidebar = () => {
  return (
    
        <div className='lg:px-6 px-0 lg:border-r-2 border-b-0 lg:w-[40%] w-full'>
                <div className='p-4 border rounded-md text-xl my-4 cursor-pointer hover:bg-[#1b2834] hover:text-white'>
                    <span>Personal Information</span>
                </div>
                <div className='p-4 border rounded-md text-xl my-4 cursor-pointer hover:bg-[#1b2834] hover:text-white'>
                    <span>My Orders</span>
                </div>
                <div className='p-4 border rounded-md text-xl my-4 cursor-pointer hover:bg-[#1b2834] hover:text-white'>
                    <span>Manage Address</span>
                </div>
                <div className='p-4 border rounded-md text-xl my-4 cursor-pointer hover:bg-[#1b2834] hover:text-white'>
                    <span>Logout</span>
                </div>
            </div>
    
  )
}

export default AccountSidebar