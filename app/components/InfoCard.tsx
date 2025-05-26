import React from 'react'
import GalerieImage from './GalerieImage'
import ProductDetails from './ProductDetails'

const InfoCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <GalerieImage />
          </div>
          <div>
            <ProductDetails />
          </div>
        </div>
       
    </div>
  )
}

export default InfoCard
