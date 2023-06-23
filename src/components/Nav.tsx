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
		<nav className="flex">
			<ul className="flex gap-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/shop">Shop Dice</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					{totalCartItems}
				</li>
			</ul>
		</nav>
  );
}

export default Nav