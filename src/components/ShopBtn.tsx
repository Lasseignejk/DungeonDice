interface ShopBtnProps {
	name: string;
	setSets: (bool: boolean) => void;
	setSingle: (bool: boolean) => void;
	setSale: (bool: boolean) => void;
	setAccessories: (bool: boolean) => void;
	setAll: (bool: boolean) => void;
}

const ShopBtn = ({
	name,
	setSets,
	setSingle,
	setSale,
	setAccessories,
	setAll,
}: ShopBtnProps) => {
	return (
		<button
			className="shop-nav-button"
			onClick={() => {
				setSets(name == "Sets");
				setSingle(name == "Single");
				setSale(name == "On Sale");
				setAccessories(name == "Extras");
				setAll(name == "All");
			}}>
			{name}
		</button>
	);
};

export default ShopBtn;
