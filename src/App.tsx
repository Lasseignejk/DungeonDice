import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";
import Shop from "./components/Shop";
import { data } from "./data/data";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

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

function App(): JSX.Element {
	const [product, setProduct] = useState<DiceData>({
		id: 0,
		name: "",
		price: 0,
		sale_price: null,
		picture: "",
		seller: "",
		product_link: "",
		description: "",
		material: "",
		category: "",
		isFeatured: false,
		quantity: 0,
	});
	const [cart, setCart] = useState<DiceData[]>([]);
	const [totalCartItems, setTotalCartItems] = useState<number>(0);
	const [total, setTotal] = useState<string>("");
	const [openModal, setOpenModal] = useState<boolean>(false);

	const cartTotal = (): void => {
		let price: number = 0;
		cart.map((item) => {
			price += item.price * item.quantity;
		});
		setTotal(price.toFixed(2));
	};

	return (
		<>
			<Nav
				cart={cart}
				totalCartItems={totalCartItems}
				setTotalCartItems={setTotalCartItems}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							data={data}
							product={product}
							setProduct={setProduct}
							cart={cart}
							setCart={setCart}
							totalCartItems={totalCartItems}
							setTotalCartItems={setTotalCartItems}
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/shop">
					<Route
						index
						element={
							<Shop
								data={data}
								product={product}
								setProduct={setProduct}
								cart={cart}
								setCart={setCart}
								totalCartItems={totalCartItems}
								setTotalCartItems={setTotalCartItems}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						}
					/>
					<Route
						path=":id"
						element={
							<ProductPage
								data={data}
								product={product}
								setProduct={setProduct}
								cart={cart}
								setCart={setCart}
								totalCartItems={totalCartItems}
								setTotalCartItems={setTotalCartItems}
							/>
						}
					/>
				</Route>
				<Route
					path="/cart"
					element={
						<Cart
							data={data}
							product={product}
							setProduct={setProduct}
							cart={cart}
							setCart={setCart}
							totalCartItems={totalCartItems}
							setTotalCartItems={setTotalCartItems}
							total={total}
							setTotal={setTotal}
							cartTotal={cartTotal}
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
