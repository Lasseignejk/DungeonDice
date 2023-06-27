import { useEffect, useState } from "react";
// import ProductCard from './ProductCard';
import ProductCardCart from "./ProductCardCart";

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
}

interface CartProps extends AllProps {
	cartTotal: () => void;
	total: string;
	setTotal: (str: string) => void;
}

const Cart = ({
	// data,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	cartTotal,
	total,
	setTotal,
}: CartProps): JSX.Element => {
	useEffect(() => {
		cartTotal();
	});

	const checkItems = () => {
		if (totalCartItems > 1) {
			return "items";
		} else {
			return "item";
		}
	};

	return (
		<div className="flex flex-col justify-center pb-20 px-3">
			{cart.length != 0 ? (
				<>
					<h1 className="text-3xl py-3">
						{totalCartItems} {checkItems()} in your cart
					</h1>
					<div className="flex justify-between font-bold">
						<p>
							Total ({totalCartItems} {checkItems()})
						</p>
						<p>${total}</p>
					</div>
					<button>Checkout</button>
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
				</>
			) : (
				<h1>Your cart is empty</h1>
			)}
		</div>
	);
};

export default Cart;
