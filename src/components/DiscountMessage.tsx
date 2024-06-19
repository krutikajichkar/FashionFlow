import { IoMdClose } from "react-icons/io";

interface messageProps{
  show: boolean;
  setShow: (isClose: boolean) => void;
}

const DiscountMessage = ({show , setShow} : messageProps) => {
  const handleClose = () => {
    setShow(false);
  }
  return (
    <div className="bg-[#1b2834] text-white py-4 sm:px-24 px-6  flex justify-between items-center">
      <span className=" w-[80%]">
        Sign up now and enjoy a 25% discount on your first order. Don&apos;t miss
        out! <span className="font-semibold text-blue-600">Sign up now</span>
      </span>
      <span className="text-xl cursor-pointer" onClick={handleClose}>
        <IoMdClose />
      </span>
    </div>
  );
};

export default DiscountMessage;
