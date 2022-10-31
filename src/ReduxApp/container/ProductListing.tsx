import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state)
    console.log(products)
  return (
    <View>
        <ProductComponent />
    </View>
  )
}

export default ProductListing;