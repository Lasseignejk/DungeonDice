import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import CartAddMinusBtns from "./CartAddMinusBtns";
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
	total: string;
	setTotal: (str: string) => void;
	cartTotal: () => void;
}

interface CartProps extends AllProps {
	cartTotal: () => void;
	total: string;
	setTotal: (str: string) => void;
}

const ProductCardCart = ({
	item,
	// product,
	// setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	// total,
	// setTotal,
	cartTotal,
}: CartProps): JSX.Element => {
	const [quantity, setQuantity] = useState(item?.quantity);

	const addToCart = (product: DiceData): void => {
		const alreadyInCart = cart.find((item) => item.id === product.id);

		if (alreadyInCart) {
			const updatedCart = cart.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCart(updatedCart);
			setTotalCartItems(totalCartItems + 1);
		} else {
			const updatedProduct: DiceData = { ...product, quantity: 1 };
			setCart([...cart, updatedProduct]);
			setTotalCartItems(totalCartItems + 1);
		}
	};
	const handleAddToCart = () => {
		setQuantity(quantity! + 1);
		addToCart(item!);
		cartTotal();
	};

	const removeFromCart = (product: DiceData): void => {
		const updatedCart = cart.map((item) => {
			if (item.id === product.id) {
				const updatedQuantity = item.quantity - 1;
				if (updatedQuantity <= 0) {
					return null;
				}
				return { ...item, quantity: updatedQuantity };
			}
			return item;
		});
		const filteredCart: DiceData[] = updatedCart.filter(
			(item): item is DiceData => item !== null
		);
		setCart(filteredCart);
		setTotalCartItems(totalCartItems - 1);
	};

	const handleRemoveFromCart = () => {
		setQuantity(quantity! - 1);
		removeFromCart(item!);
		cartTotal();
	};

	return (
		<div>
			<h1 className="font-bold text-xl mb-3">{item?.seller}</h1>
			<div className="flex gap-3">
				<div className="w-20 h-20 flex items-center justify-center">
					<img
						src={item?.picture}
						alt=""
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2">
						<a href={item?.product_link}>
							<h2>{item?.name}</h2>
						</a>
						<p>
							<strong>Quantity:</strong> {quantity}
						</p>
					</div>
					<div className="flex gap-3">
						<CartAddMinusBtns
							type={<FaPlus />}
							handleFunction={handleAddToCart}
						/>
						<CartAddMinusBtns
							type={<FaMinus />}
							handleFunction={handleRemoveFromCart}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardCart;
