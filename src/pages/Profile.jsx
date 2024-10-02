import { Link } from 'react-router-dom';
import styles from '../components/Card/Card.module.scss';
import Button from '../components/Button';
import Favourite from '../components/Favourite';
import axios from 'axios';

export default function Profile({
	favourite,
	handleFavourite,
	handleClickPlus,
	cartItems,
	userOrders,
	setUserOrders,
}) {
	const handleRemoveOrder = (info) => {
		axios
			.get('https://ed0e52336482f229.mokky.dev/orders')
			.then(async (res) => {
				for (let i = 1; i <= res.data.length; i++) {
					await axios.delete(`https://ed0e52336482f229.mokky.dev/orders/${i}`);
				}
			})
			.then(async () => {
				const updateOrders = userOrders.filter(
					(item) => item.uid !== info.uid || item.orderID !== info.orderID
				);

				const groupedByOrderID = updateOrders.reduce((acc, item) => {
					if (!acc[item.orderID]) {
						acc[item.orderID] = [];
					}
					acc[item.orderID].push(item);
					return acc;
				}, {});
				const result = Object.values(groupedByOrderID);

				if (result.length !== 0) {
					result.forEach(async (item) => {
						await axios.post('https://ed0e52336482f229.mokky.dev/orders', item);
					});
				}

				setUserOrders(updateOrders);
			});
	};

	return (
		<div className="favor">
			{userOrders.length !== 0 ? (
				<>
					<div className="favor__header">
						<Link to="/">
							<svg
								width="35"
								height="35"
								viewBox="0 0 35 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="34"
									height="34"
									rx="7.5"
									fill="white"
									stroke="#F2F2F2"
								/>
								<path
									d="M19 22L14 17L19 12"
									stroke="#C8C8C8"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>
						<h2>My orders</h2>
					</div>
					<div className={styles.card}>
						{userOrders &&
							userOrders.map(({ name, price, image, uid, orderID }) => {
								return (
									<div className={styles.card__item} key={orderID + '' + uid}>
										{/* <Favourite
											handleFavourite={() =>
												handleFavourite({ name, price, image, uid })
											}
											classFavourite={styles.card__favourite}
											classActive={styles.card__favourite_active}
											favouriteData={favourite}
											info={uid}
										/> */}
										<img wuidth={133} height={112} src={image} alt={name} />
										<p>{name}</p>
										<div className="d-flex justify-between">
											<div>
												<span className="d-flex flex-column">Price:</span>
												<b>{price} ₽</b>
											</div>
											<button
												onClick={() => {
													handleRemoveOrder({
														name,
														price,
														image,
														uid,
														orderID,
													});
												}}
												className="button button__close button__remove"
											></button>
										</div>
									</div>
								);
							})}
					</div>
				</>
			) : (
				<div className="empty drawer__empty favor__empty">
					<img src="./img/no-orders.png" alt="box" />
					<h2>You don't have any orders(</h2>
					<p>Go to the catalog and select at least one product to order.</p>
					<Link className="btn-back" to="/">
						<button className="button  button__order button__back">
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
					</Link>
				</div>
			)}
		</div>
	);
}
