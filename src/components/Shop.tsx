import React from 'react'
import ProductCard from './ProductCard'

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

const Shop = ({
	data,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
}: AllProps): JSX.Element => {
	return (
		<div>
			{data?.map((item: DiceData) => (
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
					/>
				</div>
			))}
		</div>
	);
};

export default Shop