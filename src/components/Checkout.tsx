import React from "react";

const Checkout = () => {
	return (
		<div className="px-5 pb-24">
			<h1 className="text-3xl font-header p-3 text-center">Checkout</h1>
			<form action="#" className="text-lg flex flex-col gap-3">
				<div className="form-group">
					<label htmlFor="name">Name on card</label>
					<input type="text" id="name" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="cardNum">Card Number</label>
					<input type="text" id="cardNum" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="expiration">Expiration</label>
					<div>
						<select name="" id="" className="text-backgroundGray">
							<option value="">Jan</option>
							<option value="">Feb</option>
							<option value="">Mar</option>
							<option value="">May</option>
							<option value="">June</option>
							<option value="">July</option>
						</select>
						<select name="" id="" className="text-backgroundGray">
							<option value="">2023</option>
							<option value="">2024</option>
							<option value="">2025</option>
							<option value="">2026</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="cvv">CVV</label>
					<input type="text" id="cvv" className="form-input w-10" />
				</div>
				<div className="form-group">
					<label htmlFor="address1">Address 1</label>
					<input type="text" id="address1" className="form-input" />
				</div>
				<div className="form-group">
					<label htmlFor="address2">Address 2</label>
					<input type="text" id="address2" className="form-input" />
				</div>
				<div className="flex justify-between">
					<div className="form-group flex gap-3">
						<label htmlFor="city">City</label>
						<input
							type="text"
							id="city"
							className="form-input w-36"
						/>
					</div>
					<div className="form-group flex gap-3">
						<label htmlFor="state">State</label>
						<select className="text-backgroundGray">
							<option value="">AK</option>
							<option value="">AL</option>
							<option value="">AR</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="zip">Zip Code</label>
					<input type="text" id="zip" className="form-input w-24" />
				</div>
				<div className="flex justify-center mt-3 px-5 py-2 bg-textGray text-backgroundGray rounded-full font-bold text-xl">
					<input type="submit" value="Purchase" />
				</div>
			</form>
		</div>
	);
};

export default Checkout;
