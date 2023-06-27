import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductPrice from "./ProductPrice";

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

const ProductCard = ({
	item,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	openModal,
	setOpenModal,
}: AllProps): JSX.Element => {
	const formatName = (str: string): string => {
		if (str.length > 25) {
			return str.slice(0, 25) + "...";
		}
		return str;
	};
	return (
		<div className="flex flex-col w-56 productCard">
			{openModal && (
				<ProductModal
					item={item}
					product={product}
					setProduct={setProduct}
					cart={cart}
					setCart={setCart}
					totalCartItems={totalCartItems}
					setTotalCartItems={setTotalCartItems}
					openModal={openModal}
					setOpenModal={setOpenModal}
				/>
			)}
			<div className="w-56 h-56 flex items-center">
				<img
					src={item?.picture}
					alt=""
					className="w-full h-full object-cover rounded-lg productImg"
					onClick={() => {
						setProduct(item!);
						setOpenModal(true);
					}}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="text-md mt-1">
					{item && formatName(item.name)}
				</h2>
				{item && <ProductPrice item={item} />}

				<a href={item?.product_link}>
					<h3 className="text-xs">{item?.seller}</h3>
				</a>
			</div>
		</div>
	);
};

export default ProductCard;
