import React, {useState} from 'react';
import { Border } from '~atoms/Border';
import { Button } from '~atoms/Button';
import Cancel from '~atoms/Icons/Cancel';
import ShoppingCart from '~atoms/Icons/ShoppingCart';
import Spacer from '~atoms/Spacer';
import { CartWrapper, ItemBox, CartItemWrapper, CancelWrapper } from './style';

const CartsIcon = ({}) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartWrapper onClick={() => setShowCart(!showCart)}>
      <ShoppingCart className="cursor-pointer"/>
      <ItemBox>1</ItemBox>
      <CartItems showCart={showCart} setShowCart={setShowCart} />
    </CartWrapper>
  )
};

const CartItems = ({ showCart, setShowCart }) => {
  return (
    <CartItemWrapper className={showCart && 'toggle-item'}>
      <CancelWrapper onClick={() => setShowCart(!showCart)}>
        <Cancel />
      </CancelWrapper>
      <Border border={1} />
      <Spacer height={1.562} />
      <Button kind="secondary" width="xs" color="black" className="w-full text-center">
        clear
      </Button>
      <Spacer height={1.375} />
    </CartItemWrapper>
  )
}

export default CartsIcon;