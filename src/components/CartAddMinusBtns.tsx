import { ReactNode } from "react";

interface AddMinusBtnProps {
	type: ReactNode;
	handleFunction: () => void;
}

const CartAddMinusBtns = ({ type, handleFunction }: AddMinusBtnProps) => {
	return (
		<button
			className="bg-textGray text-backgroundGray py-2 px-4 rounded-full"
			onClick={() => handleFunction()}>
			{type}
		</button>
	);
};

export default CartAddMinusBtns;
