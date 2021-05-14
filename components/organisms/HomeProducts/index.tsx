import React from 'react';
import { CustomCheckBox, CustomRadioBox } from '~molecules/CheckoutInputWithLabel';
import { Wrapper } from '~atoms/BackDrop';
import ArrowDown from '~atoms/Icons/ArrowDown';
import ArrowUp from '~atoms/Icons/ArrowUp';
import Label from '~atoms/Label';
import SelectField from '~atoms/Select';
import { FilterWrapper, CategoryProductWrapper, FilterGroups, InputGroup, ProductGroups, ProductWrapper } from './style';
import Product from '~molecules/Products';
import { Border } from '~atoms/Border';
import Spacer from '~atoms/Spacer';
import Pagination from '~molecules/Pagination';
import { Category, Product as ProductItem } from '~types/index';

const prices = [
  {
    id: 1,
    name: 'Lower than $20',
    value: '<20'
  },
  {
    id: 2,
    name: '$20 - $100',
    value: '20-100'
  },
  {
    id: 3,
    name: '$100 - $200',
    value: '100-200'
  },
  {
    id: 4,
    name: 'More than $200',
    value: '200>'
  },
]

const HomeProducts = ({ categories, products }: { categories?: Category[], products: ProductItem[] }) => {
  return (
    <Wrapper>
      <FilterWrapper>
          <div className="category-title">Photography /<span> Premium Photos</span></div>
          <div className="flex items-center">
            <ArrowUp />
            <ArrowDown />
            <p>Sort By</p>
            <SelectField>
              <option value="">Price</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </SelectField>
          </div>
      </FilterWrapper>
      <CategoryProductWrapper>
        <FilterGroups>
          <h1>Category</h1>
          {
          categories?.map(item => (
            <InputGroup key={item.id}>
              <Label className="cursor-pointer">
                <CustomCheckBox name="categories" value={item.slug} />
                {item.name}
              </Label>
            </InputGroup>
          ))
        }
          <Spacer height={2.5} />
          <Border border={1} />
          <Spacer height={1.937} />
          <h1>Price range</h1>
          {prices.map(item => (
            <InputGroup key={item.id}>
              <Label className="cursor-pointer">
                <CustomRadioBox name="prices" value={item.value} />
                {item.name}
              </Label>
            </InputGroup>
          ))}
        </FilterGroups>
        <ProductWrapper>
            <ProductGroups>
              {products?.map(item => (
                <Product product={item} key={item.id} />
              ))}
            </ProductGroups>
            <Pagination numberOfPages={4} currentPage={3} />
          <Spacer height={3.812} />
        </ProductWrapper>
      </CategoryProductWrapper>
    </Wrapper>
  )
}

export default HomeProducts;