import React from 'react'
import ProductAccordian from './ProductAccordian'

const Filters = () => {
  return (
    <div className='px-4 w-full'>
        <h1 className='pb-4 text-xl font-medium'>Filters</h1>
        <div>
            {
                Array(5).fill(undefined).map((acc , i) => {
                    return (
                        <ProductAccordian key={i+1} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Filters