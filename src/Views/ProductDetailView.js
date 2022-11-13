import React from 'react'
import {useParams} from 'react-router-dom'
import FooterSection from '../Sections/Footer/FooterSection'
import MainMenuSection from '../Sections/MainMenu/MainMenuSection'


const ProductDetailView = () => {
    const params = useParams()



  return (
    <>
        <MainMenuSection />
        <div className ="container mt-5">
            <h1>{params.productName}</h1>
        </div>
        <FooterSection />
    </>
  )
}

export default ProductDetailView