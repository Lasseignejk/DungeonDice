import {Link} from "react-router-dom"

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

interface CartProps {
	cart: DiceData[];
	totalCartItems: number,
	setTotalCartItems: (num:number) => void
}


const Nav = ({cart, totalCartItems, setTotalCartItems}:CartProps):JSX.Element => {
  return (
		<nav className="fixed bottom-0 flex justify-between px-5">
			<h1 className="text-3xl">Dungeon Dice</h1>
			<ul className="flex gap-5 text-xl">
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shop">Shop Dice</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>{totalCartItems}</li>
			</ul>
		</nav>
  );
}

export default Nav