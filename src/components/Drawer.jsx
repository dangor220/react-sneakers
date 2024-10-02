import axios from 'axios';
import { useState } from 'react';

export default function Drawer({
	visible,
	onClickCart,
	calcPrice,
	cartItems = [],
	handleClearCart,
	handleRemoveItem,
	getUserOrders,
}) {
	const [order, setOrder] = useState(false);

	const handleOverlay = (e) => {
		if (e.target.classList.contains('overlay')) {
			handleOrder();
		}
	};
	const handleRemove = (item) => {
		handleRemoveItem(item);
	};
	const handleBuyBtn = () => {
		setOrder(true);

		let order = cartItems.map(({ image, name, price, uid }) => ({
			image,
			name,
			price,
			uid,
		}));

		if (order.length) {
			axios
				.post('https://ed0e52336482f229.mokky.dev/orders', order)
				.then(() => {
					getUserOrders();
				});
		}

		handleClearCart();
	};
	const handleOrder = () => {
		if (order) {
			onClickCart();
			setOrder(false);
		}
		onClickCart();
	};

	const getTax = (percent) => {
		return Math.floor(calcPrice() * (percent / 100));
	};

	return (
		<div
			onClick={(e) => {
				handleOverlay(e);
			}}
			className={visible ? 'overlay overlay__active' : 'overlay'}
		>
			<div className="drawer">
				<h2 className="drawer__title">
					Cart{' '}
					<button
						onClick={handleOrder}
						className="button button__close button__remove"
					></button>
				</h2>
				{!order ? (
					cartItems.length !== 0 ? (
						<>
							<ul className="drawer__items">
								{cartItems.map((item) => (
									<li className="cart" key={item.uid}>
										<div className="cart__item">
											<img width={80} src={item.image} alt="Nike Air" />
											<div>
												<p className="mb-5">{item.name}</p>
												<b>{item.price}</b>
											</div>
											<button
												className="button button__remove"
												onClick={() => handleRemove(item)}
											></button>
										</div>
									</li>
								))}
							</ul>
							<div className="drawer__summary">
								<div>
									<span>Total:</span>
									<span className="dash"></span>
									<b>{calcPrice()} ₽</b>
								</div>
								<div>
									<span>Tax 5%:</span>
									<span className="dash"></span>
									<b>{getTax(5)} ₽</b>
								</div>
							</div>
							<button onClick={handleBuyBtn} className="button button__order">
								Place an order
								<svg
									width="16"
									height="14"
									viewBox="0 0 16 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 7H14.7143"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.71436 1L14.7144 7L8.71436 13"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</>
					) : (
						<div className="drawer__empty">
							<img src="./img/empty-box.png" alt="box" />
							<h2>The basket is empty</h2>
							<p>
								Please add at least one pair of sneakers when placing an order.
							</p>
							<button
								className="button  button__order button__back"
								onClick={handleOrder}
							>
								<svg
									width="16"
									height="14"
									viewBox="0 0 16 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 7H14.7143"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8.71436 1L14.7144 7L8.71436 13"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Go back
							</button>
						</div>
					)
				) : (
					<div className="drawer__empty">
						<img src="./img/order-completed.jpg" alt="box" />
						<h2>The order has been placed!</h2>
						<p>Your order #18 will be delivered by courier soon.</p>
						<button
							className="button  button__order button__back"
							onClick={handleOrder}
						>
							<svg
								width="16"
								height="14"
								viewBox="0 0 16 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 7H14.7143"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8.71436 1L14.7144 7L8.71436 13"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							Go back
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
