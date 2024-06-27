import React from 'react'
import Layout from '@/components/Layout'
import AccountSidebar from '@/components/AccountSidebar'
import AccountAccordian from '@/components/AccountAccordian'

const index = () => {
  return (
    <Layout>
        <div className='lg:px-20 px-4 py-10 '>
            {/* <div>BreadCrumbs</div> */}

            <div className='flex lg:gap-x-6 gap-y-8 lg:flex-row flex-col'>
                <AccountSidebar/>
                <div className='lg:w-[60%] w-full'>
                    {
                        
                        Array(5).fill(undefined).map((acc ,  i) => {
                            return(
                                <AccountAccordian key={i+1} />
                            )
                        })
                    
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default index