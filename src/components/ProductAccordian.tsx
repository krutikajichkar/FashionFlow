import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";
import React , {useState} from 'react'

const ProductAccordian = () => {
    const [show, setShow] = useState<boolean>(false)

    const handleShowToggle = () => {
        setShow(!show)
    }
  return (
    <div className='border-t border-secondary cursor-pointer py-2 px-3 w-full' onClick={() => handleShowToggle()}>
        <div className="flex justify-between items-center p-2">
            <span className="font-medium">Category</span>
            <span>
                {
                    show? <IoIosArrowUp className='text-secondary' /> : <IoIosArrowDown className='text-secondary' />
                }
            </span>
        </div>

       { show && <ul className="p-2">
            <li>Jacket</li>
            <li>T-shirt</li>
            <li>Jeans</li>
            <li>Panty</li>
            <li>see All</li>
        </ul>}
    </div>
  )
}

export default ProductAccordian