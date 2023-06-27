import {} from "react-icons/fa";
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
}

interface ModalProps extends AllProps {
	openModal: boolean;
	setOpenModal: (bool: boolean) => void;
}

const ProductModal = ({
	item,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
	openModal,
	setOpenModal,
}: ModalProps) => {
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
			console.log(cart);
			setTotalCartItems(totalCartItems + 1);
		} else {
			const updatedProduct: DiceData = { ...product, quantity: 1 };
			setCart([...cart, updatedProduct]);
			setTotalCartItems(totalCartItems + 1);
		}
	};

	const capitalize = (str: string): string => {
		const capitalizedLetter = str[0].toUpperCase();
		const remainingLetters = str.slice(1);
		return capitalizedLetter + remainingLetters;
	};
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center p-5 py-10 bg-dkGrayBack/10">
			<div className="relative flex flex-col items-center bg-backgroundGray w-[90%] h-full rounded-xl px-5 gap-3 pt-12 overflow-auto py-5">
				<span
					onClick={() => {
						setOpenModal(false);
					}}
					className="absolute top-[10px] right-[10px] text-2xl w-[30px] flex items-center justify-center hover:cursor-pointer">
					&times;
				</span>
				<div className="flex flex-col gap-2">
					<div className="w-full flex justify-center">
						<div className="w-64 h-64 flex">
							<a href={product.product_link}>
								<img
									src={product?.picture}
									alt=""
									className="w-full h-full object-cover rounded lg"
								/>
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						{product && <ProductPrice item={product} />}
						<h2 className="text-lg mt-1">{product?.name}</h2>

						<a href={product?.product_link}>
							<h3 className="text-xs font-bold">
								{product?.seller}
							</h3>
						</a>
					</div>
					<p>{product.description}</p>
					<p>
						<strong>Material:</strong>{" "}
						{capitalize(product.material)}
					</p>
					{product && (
						<button
							className="border-2 border-textGray rounded-2xl py-2 text-xl font-bold mt-5 hover:bg-textGray hover:text-backgroundGray ease-in duration-200"
							onClick={() => addToCart(product)}>
							Add to Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductModal;
