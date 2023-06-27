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

interface PriceProps {
	item: DiceData;
}
const ProductPrice = ({ item }: PriceProps): JSX.Element => {
	return (
		<>
			{item?.sale_price != null ? (
				<div className="flex items-center gap-3">
					<p className="text-xl font-bold font-mono">
						${item?.sale_price.toFixed(2)}
					</p>
					<div className="flex gap-1 text-green-500">
						<p className="text-xs line-through">${item?.price}</p>
						<p className="text-xs">
							(
							{Math.round(
								((item.price - item.sale_price) / item.price) *
									100
							)}
							% off)
						</p>
					</div>
				</div>
			) : (
				<p className="text-xl font-bold font-mono">${item?.price}</p>
			)}
		</>
	);
};

export default ProductPrice;
