import Button from '../Button';
import Favorite from '../Favorite';
import styles from './Card.module.scss';

export default function Card({ data, search, handleClickPlus, cartItems }) {
	return (
		<div className={styles.card}>
			{data
				.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
				.map(({ name, price, image, id }) => {
					return (
						<div className={styles.card__item} key={id}>
							<Favorite classFavorite={styles.card__favorite} />
							<img width={133} height={112} src={image} alt={name} />
							<p>{name}</p>
							<div className="d-flex justify-between">
								<div>
									<span className="d-flex flex-column">Price:</span>
									<b>{price} ₽</b>
								</div>
								<Button
									info={{
										id,
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
	);
}
