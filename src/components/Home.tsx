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

const Home = ({data, product, setProduct, cart, setCart}:AllProps):JSX.Element => {
  console.log(product)
  return (
    <div>
      <p>Home</p>
      <p>Welcome</p>
    </div>
  )
}

export default Home