import { Link } from 'react-router-dom';
import styles from '../components/Card/Card.module.scss';
import Button from '../components/Button';
import Favourite from '../components/Favourite';

export default function Favor({
	favourite,
	handleFavourite,
	handleClickPlus,
	cartItems,
}) {
	return (
		<div className="favor">
			{favourite.length !== 0 ? (
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
						<h2>My favorites</h2>
					</div>
					<div className={styles.card}>
						{favourite &&
							favourite.map(({ name, price, image, uid }) => {
								return (
									<div className={styles.card__item} key={uid}>
										<Favourite
											handleFavourite={() =>
												handleFavourite({ name, price, image, uid })
											}
											classFavourite={styles.card__favourite}
											classActive={styles.card__favourite_active}
											favouriteData={favourite}
											info={uid}
										/>
										<img wuidth={133} height={112} src={image} alt={name} />
										<p>{name}</p>
										<div className="d-flex justify-between">
											<div>
												<span className="d-flex flex-column">Price:</span>
												<b>{price} ₽</b>
											</div>
											<Button
												info={{
													uid,
													name,
													price,
													image,
												}}
												handleClick={handleClickPlus}
												cartItems={cartItems}
											/>
										</div>
									</div>
								);
							})}
					</div>
				</>
			) : (
				<div className="empty drawer__empty favor__empty">
					<img src="./img/empty-bookmarks.png" alt="box" />
					<h2>There are no bookmarks :(</h2>
					<p>You haven't added anything to your bookmarks</p>
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
