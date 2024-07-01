import React from "react";
import Layout from "@/components/Layout";
import Filters from "@/components/Filters";
import RelatedProductsCard from "@/components/RelatedProductsCard";
const index = () => {
  return (
    <Layout>
      <div className="lg:px-15 px-10 py-10 ">
        {/* <div>BreadCrumbs</div> */}

        <div className="flex gap-x-10">
          <div className="w-[40%]">
            <Filters />
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            {
                Array(6).fill(undefined).map((prod , i) => {
                    return(
                        <RelatedProductsCard key={i+1}/>
                    )
                })
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
