import React from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import UPI from "../../../public/UPI.png";
import MasterCard from "../../../public/MasterCard.png";
import Cash from "../../../public/Cash.png";
import Google from "../../../public/Google.png";
import NetBanking from "../../../public/NetBanking.png";
import PriceDetails from "@/components/PriceDetails";

const cardData = [
  {
    name: "UPI",
    img: UPI,
    alt: "UPI Image",
  },
  {
    name: "Google",
    img: Google,
    alt: "Google Image",
  },
  {
    name: "NetBanking",
    img: NetBanking,
    alt: "NetBanking Image",
  },
  {
    name: "Cash",
    img: Cash,
    alt: "Cash Image",
  },
];

const index = () => {
  return (
    <Layout>
      <div className="lg:px-20 md:px-10 px-4 py-10">
        {/* <div>BreadCrumbs</div> */}
        <div className="flex flex-col lg:flex-row gap-x-4">
          <div className="lg:w-[60%] w-full border-r-0 lg:border-r-2 p-4">
            <div>
              <h1 className="text-xl font-bold border-b-2 py-2 px-4">
                Payment Option
              </h1>
              <div>
                {cardData?.map((e) => {
                  return (
                    <div className="flex items-center justify-start gap-2 px-10 py-3 border rounded-md my-4">
                      <span>
                        <Input type="radio" />
                      </span>
                      <span>
                        <Image src={e.img} alt={e.alt} className="w-[30px]" />
                      </span>
                      <span>{e.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-xl font-bold border-b-2 py-2 px-4">
                  Saved Cards
                </h1>
                <div className="relative">
                  <div className="flex items-center relative justify-start gap-2 lg:px-10 px-4 py-3 border rounded-md my-4">
                    <span>
                      <Input type="radio" />
                    </span>
                    <span>
                      <Image
                        src={MasterCard}
                        alt="MasterCard Image"
                        className="lg:w-[60px] w-[30px]"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">HDFC Debit Card</span>
                      <span className="text-gray-600 font-semibold">
                        XXXX XXXX XXXX
                      </span>
                    </div>
                    <div className="absolute right-3 bottom-3 lg:font-semibold md:font-semibold text-xs lg:text-md md:text-md">
                      EXP : 03/22
                    </div>
                  </div>
                  <div className="flex items-center relative justify-start gap-2 lg:px-10 px-4 py-3 border rounded-md my-4">
                    <span>
                      <Input type="radio" />
                    </span>
                    <span>
                      <Image
                        src={MasterCard}
                        alt="MasterCard Image"
                        className="lg:w-[60px] w-[30px]"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold">SBI Debit Card</span>
                      <span className="text-gray-600 font-semibold">
                        XXXX XXXX XXXX
                      </span>
                    </div>
                    <div className="absolute right-3 bottom-3 lg:font-semibold md:font-semibold text-xs lg:text-md md:text-md">
                      EXP : 03/22
                    </div>
                  </div>
                  <div className=" lg:px-10 px-4 py-3 border rounded-md my-4">
                    <div className="flex gap-x-10">
                      <span>
                        {" "}
                        <Input type="radio" />
                      </span>
                      <h1 className="lg:text-xl md:text-xl text-lg font-bold">
                        Add New Credit/Debit/ATM Card
                      </h1>
                    </div>
                    <form className="my-6  lg:px-12 px-2">
                      <div className="my-3 flex flex-col gap-y-2">
                        <Input
                          type="text"
                          placeholder="Enter Your Full Name"
                          label="Card Holder Name"
                        />
                      </div>

                      <div className="my-3 flex flex-col gap-y-2">
                        <Input
                          type="text"
                          placeholder="XXXX XXXX XXXX XX34"
                          label="Card Number"
                        />
                      </div>

                      <div className="flex lg:flex-row flex-col gap-4">
                        <div className="my-3 flex flex-col gap-y-2 lg:w-[50%] w-full">
                          <Input
                            type="text"
                            placeholder="00/00/00"
                            label="Expiry Date"
                          />
                        </div>
                        <div className="my-3 flex flex-col gap-y-2 lg:w-[50%] w-full">
                          <Input type="text" placeholder="XXX" label="CVV" />
                        </div>
                      </div>
                      <Button text="ADD CARD" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-[40%]">
            <PriceDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
