import React from 'react';
import { Button } from '~atoms/Button';
import Image from '~atoms/Image';
import Spacer from '~atoms/Spacer';
import { appendCurrency } from '~utils/helper';
import { Card, ImageWrapper, BestSellerWrapper, CartWrapper, ProductDetail } from './style';

const Product = ({ product }) => {
  return (
    <Card href="/">
      <ImageWrapper>
        {product.bestseller && (
          <BestSellerWrapper>
            Best Seller
          </BestSellerWrapper>
        )}
        <Image src={product.image?.src} fallbackSrc="" alt={product.image?.alt} className="h-full w-full" />
        <CartWrapper className="show-cart-button">
          <Button>
            Add To Cart
          </Button>
        </CartWrapper>
      </ImageWrapper>
      <ProductDetail>
        <p className="category">{product.category.name}</p>
        <Spacer height={0.512} />
        <h2>{product.name}</h2>
        <Spacer height={0.562} />
        <p className="price">{ appendCurrency(product.price, product.currency)}</p>
      </ProductDetail>
    </Card>
  )
};

export default Product;