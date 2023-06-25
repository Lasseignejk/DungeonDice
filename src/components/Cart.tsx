import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import ProductCardCart from './ProductCardCart';

interface DiceData {
	id: number;
	name: string;
	price: number;
	sale_price: number | null;
	picture: string;
	seller: string;
	product_link: string;
	description: string;
	material: string;
	category: string;
	isFeatured: boolean;
  quantity: number;
}

interface AllProps {
	item?: DiceData;
	data?: DiceData[];
	product: DiceData;
	setProduct: (item: DiceData) => void;
	cart: DiceData[];
	setCart: (items: DiceData[]) => void;
	totalCartItems: number;
	setTotalCartItems: (num: number) => void;
	cartTotal: () => void
}

const Cart = ({
	data,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
}: AllProps): JSX.Element => {
		const [total, setTotal] = useState<string>("");

		
	useEffect(() => {
		cartTotal();
	});

		const cartTotal = (): void => {
			let price: number = 0;
			cart.map((item) => {
				price += item.price * item.quantity;
			});
			setTotal(price.toFixed(2));
		};

	return (
		<div>
			<h1>Cart</h1>
			
			{cart.length != 0 ? (
				<>
				{cart?.map((item: DiceData) => (
					<ProductCardCart
						item={item}
						key={item.id}
						product={product}
						setProduct={setProduct}
						cart={cart}
						setCart={setCart}
						totalCartItems={totalCartItems}
						setTotalCartItems={setTotalCartItems}
						total={total}
						setTotal={setTotal}
						cartTotal={cartTotal}
					/>
				))}
				<p>Your total is ${total}</p>
				</>
			) : (
				<h1>Your cart is empty</h1>
			)}
			
		</div>
	);
};

export default Cart