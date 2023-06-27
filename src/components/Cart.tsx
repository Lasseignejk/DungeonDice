import { useEffect, useState } from "react";
// import ProductCard from './ProductCard';
import ProductCardCart from "./ProductCardCart";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

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
	openModal: boolean;
	setOpenModal: (bool: boolean) => void;
}

interface CartProps extends AllProps {
	cartTotal: () => void;
	total: string;
	setTotal: (str: string) => void;
}

const Cart = ({
	data,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	cartTotal,
	total,
	setTotal,
	openModal,
	setOpenModal,
}: CartProps): JSX.Element => {
	useEffect(() => {
		cartTotal();
	});

	const checkItems = () => {
		if (totalCartItems != 1) {
			return "items";
		} else {
			return "item";
		}
	};

	const featuredDice = data?.filter((dice) => dice.isFeatured);

	return (
		<div className="flex flex-col justify-center pb-20 px-3">
			{cart.length != 0 ? (
				<>
					<div className="">
						<h1 className="text-3xl py-3">
							{totalCartItems} {checkItems()} in your cart
						</h1>
					</div>
					<div className="flex justify-between font-bold mb-2">
						<p>
							Total ({totalCartItems} {checkItems()})
						</p>
						<p>${total}</p>
					</div>
					<Link to="/checkout">
						<button className="w-full border-2 rounded-full bg-textGray text-dkGrayBack text-xl py-2 mb-2 font-bold hover:scale-105 ease-in duration-200">
							Checkout
						</button>
					</Link>
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
				<div>
					<h1 className="text-3xl py-3">
						{totalCartItems} {checkItems()} in your cart
					</h1>
					<p className="text-center mb-3">
						Check out these featured items!
					</p>
					<div className="flex flex-col gap-5 items-center">
						{featuredDice?.map((item: DiceData) => (
							<div>
								<ProductCard
									item={item}
									key={item.id}
									product={product}
									setProduct={setProduct}
									cart={cart}
									setCart={setCart}
									totalCartItems={totalCartItems}
									setTotalCartItems={setTotalCartItems}
									openModal={openModal}
									setOpenModal={setOpenModal}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
