import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Bai2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: 'Cocacola',
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h1>Bai2</h1>
      <h2>Thông tin sản phẩm</h2>
      <h5>id: {product.id}</h5>
      <h5>Name: {product.name}</h5>
      <h5>Price: {product.price}</h5>
      <h5>Quantity: {product.quantity}</h5>
    </div>
  );
}
