import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";
import React , {useState} from "react";

const Accordian = () => {
  const [show, setShow] = useState(false)

  const handleShowToggle = () => {
    setShow(!show)
  }
  return (
    <div className="border border-primary rounded-md lg:p-4 md:p-4 p-3 w-full my-6" onClick={() => handleShowToggle()}>
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">
          How long does Shipping takes?
        </span>
        <div className="p-0.5 rounded-full border border-primary cursor-pointer" >
          {
            show? (
              <IoIosArrowUp className="text-xs lg:text-lg" />
            ) : (
              <IoIosArrowDown className="text-xs lg:text-lg" />
            )
          }
          
        </div>
      </div>

      { show && <p className="mt-6 text-secondary">
        Our standard shipping typically takes 3-5 business days within the
        contiguous United States. International shipping times may vary based on
        the destination country and customs processing times. We also offer
        expedited shipping options for customers who need their orders to arrive
        more quickly.
      </p>}
    </div>
  );
};

export default Accordian;
