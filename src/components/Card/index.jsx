import Button from '../Button';
import Favourite from '../Favourite';
import MyLoader from '../MyLoader';
import styles from './Card.module.scss';

export default function Card({
	data,
	favourite,
	search,
	handleClickPlus,
	handleFavourite,
	cartItems,
	isLoading,
}) {
	const renderCarts = () => {
		return data
			.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
			.map(({ name, price, image, uid }) => {
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
			});
	};
	return (
		<div className={styles.card}>
			{isLoading ? <MyLoader /> : renderCarts()}
		</div>
	);
}
