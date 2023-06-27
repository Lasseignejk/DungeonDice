import {Link} from "react-router-dom"
import {FaDiceD20, FaEnvelope, FaDungeon, FaShoppingCart, FaUser, FaHome} from "react-icons/fa"

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
		<nav className="fixed bottom-0 w-full bg-[#242424] shadow-xl">
			<ul className="flex justify-evenly items-center gap-5 text-3xl py-2 px-5">
				{/* <li>
					<Link to="/about">
						<FaUser />
						<p className="hidden lg:block">About</p>
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<FaEnvelope />
						<p className="hidden lg:block">Contact</p>
					</Link>
				</li> */}
				<li className="nav-item">
					<Link to="/">
						<FaHome />
						<p className="hidden lg:block">Dungeon Dice</p>
					</Link>
				</li>
				<li className="text-5xl nav-item">
					<Link to="/shop">
						<FaDiceD20 />
						<p className="hidden lg:block">Shop</p>
					</Link>
				</li>

				<li className="relative nav-item">
					<Link to="/cart" className="relative">
						<FaShoppingCart />
						<p className="hidden lg:block">Cart</p>
						<div className="absolute top-[-10px] right-[-10px] rounded-full bg-blue-300 w-6 h-6 flex justify-center items-center text-sm text-backgroundGray">
							{totalCartItems}
						</div>
					</Link>
				</li>
			</ul>
		</nav>
  );
}

export default Nav