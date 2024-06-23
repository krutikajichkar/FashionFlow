import React from 'react'
import Layout from '@/components/Layout'
import withWishListCard from '@/components/WishListCard'
import RelatedProductsCard from '@/components/RelatedProductsCard'


const EnhancedWishListCardComponent = withWishListCard(RelatedProductsCard)

const index : React.FC = () => {
  return (
    <Layout>
        {/* <div>BreadCrumbs</div> */}
        <div className='px-10 lg:px-20 md:px-20 py-10 flex relative justify-evenly gap-y-10  md:gap-10 lg:gap-20 flex-wrap'>
            <EnhancedWishListCardComponent/>
            <EnhancedWishListCardComponent/>
            <EnhancedWishListCardComponent/>
            <EnhancedWishListCardComponent/>
            <EnhancedWishListCardComponent/>
            <EnhancedWishListCardComponent/>

        </div>
    </Layout>
  )
}

export default index