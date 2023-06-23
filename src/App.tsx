import { useState } from 'react';
import './App.css'
import About from './components/About';
import Cart from './components/Cart';
import Error from './components/Error';
import Home from './components/Home';
import Nav from './components/Nav'
import ProductPage from './components/ProductPage';
import Shop from './components/Shop';
import {data} from "./data/data"
import {Route, Routes} from "react-router-dom"

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


function App():JSX.Element {
  const [product, setProduct] = useState<DiceData>({
    id:0,
    name: '',
    price: 0,
    sale_price: null,
    picture: '',
    seller: '',
    product_link: '',
    description: '',
    material: '',
    category: '',
    isFeatured: false,
  })
  const [cart, setCart] = useState<DiceData[]>([])

 return (
		<>
			<Nav />
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
						/>
					}
				/>
				<Route path="/about" element={<About />} />
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
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
 );
}

export default App
