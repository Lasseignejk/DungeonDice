import React, { useState } from 'react'
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

const ProductCardCart = ({
	item,
	product,
	setProduct,
	cart,
	setCart,
	totalCartItems,
	setTotalCartItems,
}:AllProps):JSX.Element => {
    const [quantity, setQuantity] = useState(item?.quantity)

    const addToCart = (product: DiceData): void => {
		const alreadyInCart = cart.find((item) => item.id === product.id);

		if (alreadyInCart) {
			const updatedCart = cart.map((item) => {
				if (item.id === product.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCart(updatedCart);
			setTotalCartItems(totalCartItems + 1);
		} else {
			const updatedProduct: DiceData = { ...product, quantity: 1 };
			setCart([...cart, updatedProduct]);
			setTotalCartItems(totalCartItems + 1);
		}
	};

    const removeFromCart = (product: DiceData): void => {
        const updatedCart = cart.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});

            setCart(updatedCart);
            console.log(cart)

            const filteredCart = cart.filter((dice) => dice.quantity!=0)

            console.log(filteredCart)
			
			
			setTotalCartItems(totalCartItems - 1);
		}
	

	return (
		<div>
			<img src={item?.picture} alt="" className="w-40" />
			<h2>{item?.name}</h2>
			<a href={item?.product_link}>
				<h3>{item?.seller}</h3>
			</a>
            <p>{quantity}</p>
            <div>
                <button className='w-12 border-black border-2' onClick={() => {
                    setQuantity(quantity! + 1); 
                    addToCart(item!)

                    }}>+
                </button>
                <button className='w-12 border-black border-2' onClick={() => {
                    setQuantity(quantity! - 1); 
                    removeFromCart(item!)
                    }}>-
                </button>
            </div>
		</div>
	);
};

export default ProductCardCart