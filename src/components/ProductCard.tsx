import React from 'react'
import { Link } from 'react-router-dom';

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
}

interface AllProps {
  item?: DiceData;
	data?: DiceData[];
	product: DiceData;
	setProduct: (item: DiceData) => void;
	cart: DiceData[];
	setCart: (items: DiceData[]) => void;
}

const ProductCard = ({item, product, setProduct, cart, setCart}:AllProps):JSX.Element => {
  return (
		<div>
			<Link to={`/shop/${item?.id}`} onClick={() => setProduct(item!)}>
				<img src={item?.picture} alt="" className="w-40" />
				<h2>{item?.name}</h2>
			</Link>
			<a href="">
				<h3>{item?.seller}</h3>
			</a>
		</div>
  );
}

export default ProductCard