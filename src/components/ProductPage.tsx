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
}

const ProductPage = ({
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
}: AllProps): JSX.Element => {
	// const {id} = useParams()

	const addToCart = (product: DiceData): void => {
    const alreadyInCart = cart.find(item => item.id === product.id)
    console.log(alreadyInCart)

    if (alreadyInCart) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
      	setCart(updatedCart);
        setTotalCartItems(totalCartItems + 1);
    } else {
      const updatedProduct:DiceData = {...product, quantity: 1}
      setCart([...cart, updatedProduct])
      setTotalCartItems(totalCartItems + 1);

    }

	};

	return (
		<div>
			<p>{product.name}</p>
			<img src={product.picture} alt="" className="h-36" />
			<button onClick={() => addToCart(product)}>Add to Cart</button>
		</div>
	);
};

export default ProductPage