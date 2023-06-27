import { useState } from "react";
import ProductCard from "./ProductCard";
import ShopBtn from "./ShopBtn";

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

const Shop = ({
	data,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	openModal,
	setOpenModal,
}: AllProps): JSX.Element => {
	const [all, setAll] = useState<boolean>(true);
	const [sets, setSets] = useState<boolean>(false);
	const [single, setSingle] = useState<boolean>(false);
	const [sale, setSale] = useState<boolean>(false);
	const [accessories, setAccessories] = useState<boolean>(false);
	const diceSets: DiceData[] = data!.filter(
		(dice): dice is DiceData => dice.category == "set"
	);
	const singleDice: DiceData[] = data!.filter(
		(dice): dice is DiceData => dice.category == "single"
	);
	const saleDice: DiceData[] = data!.filter(
		(dice): dice is DiceData => dice.sale_price != null
	);
	const diceAccessories: DiceData[] = data!.filter(
		(dice): dice is DiceData => dice.category == "accessory"
	);
	const links = [
		{ name: "All" },
		{ name: "Sets" },
		{ name: "Single" },
		{ name: "On Sale" },
		{ name: "Extras" },
	];
	return (
		<div className="pb-20">
			{all && (
				<h1 className="text-3xl text-center pb-3 py-3">All Products</h1>
			)}
			{sets && (
				<h1 className="text-3xl text-center pb-3 py-3">Dice Sets</h1>
			)}
			{single && (
				<h1 className="text-3xl text-center pb-3 py-3">Solo Dice</h1>
			)}
			{sale && (
				<h1 className="text-3xl text-center pb-3 py-3">Dice On Sale</h1>
			)}
			{accessories && (
				<h1 className="text-3xl text-center pb-3 py-3">
					Dice Accessories
				</h1>
			)}

			<div className="w-full flex justify-around flex-wrap mb-5 gap-2">
				{links.map((link, index) => (
					<ShopBtn
						key={index}
						name={link.name}
						setSets={setSets}
						setSingle={setSingle}
						setSale={setSale}
						setAccessories={setAccessories}
						setAll={setAll}
					/>
				))}
			</div>
			<div className="flex flex-wrap justify-center px-5">
				{all && (
					<div className="flex flex-wrap justify-center px-5 gap-10">
						{data!.map((item: DiceData) => (
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
						))}
					</div>
				)}
				{sets && (
					<div className="flex flex-wrap justify-center px-5 gap-10">
						{diceSets.map((item: DiceData) => (
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
						))}
					</div>
				)}
				{single && (
					<div className="flex flex-wrap justify-center px-5 gap-10">
						{singleDice.map((item: DiceData) => (
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
						))}
					</div>
				)}
				{sale && (
					<div className="flex flex-wrap justify-center px-5 gap-10">
						{saleDice.map((item: DiceData) => (
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
						))}
					</div>
				)}
				{accessories && (
					<div className="flex flex-wrap justify-center px-5 gap-10">
						{diceAccessories.map((item: DiceData) => (
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
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Shop;
