import React from 'react'
import Layout from '@/components/Layout'
import AccountSidebar from '@/components/AccountSidebar'
import Dropdown from '@/components/Dropdown'
import OrdersCard from '@/components/OrdersCard'

const index = () => {
  return (
    <Layout>
        <div className='px-20 py-10'>
            {/* <div>BreadCrumbs</div> */}

            <div className='flex gap-x-10'>
                <AccountSidebar/>

                <div className='w-full '>
                    <div className='flex justify-between border-b-2'>
                    <h2 className='text-xl py-4 '>My Orders</h2>
                    <span className='text-xl'>Sort By : <Dropdown receivedText='All' receivedSubText=''/></span>
                    </div>

                    <div className='my-4'>
                       {
                        Array(5).fill(undefined).map( (_,i) => <OrdersCard />)
                       }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default index