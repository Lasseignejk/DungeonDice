import {useParams} from "react-router-dom"

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

const ProductPage = ({product, setProduct, cart, setCart}:AllProps):JSX.Element => {
    // const {id} = useParams()
  return (
    <div>
      <p>{product.name}</p>
      <img src={product.picture} alt="" className="h-36" />
    </div>

  )
}

export default ProductPage