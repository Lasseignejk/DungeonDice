import {Link} from "react-router-dom"

const Nav = ():JSX.Element => {
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
			</ul>
		</nav>
  );
}

export default Nav