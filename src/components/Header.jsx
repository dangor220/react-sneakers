import { Link } from 'react-router-dom';

export default function Header({ onClickCart, calcPrice }) {
	return (
		<header className="d-flex justify-between align-center p-40">
			<Link to="/">
				<div className="header__left d-flex align-center">
					<img
						style={{ width: 40, height: 40 }}
						src="/img/logo.png"
						alt="logo"
					/>
					<div className="header__info">
						<h3 className="text-uppercase">Sneakers</h3>
						<p className="opacity-5">Shop the best sneakers</p>
					</div>
				</div>
			</Link>
			<ul className="header__right d-flex">
				<li onClick={onClickCart} className="mr-30 cart__btn">
					<img
						style={{ width: 18, height: 18 }}
						src="/img/cart.svg"
						alt="cart"
					/>
					<span className="header__price">{calcPrice()} ₽</span>
				</li>
				<li className="mr-15 cart__btn cart__btn-favorite">
					<Link to={`favourite`}>
						<img
							style={{ width: 18, height: 18 }}
							src="/img/favorite.svg"
							alt="favorite"
						/>{' '}
					</Link>
				</li>
				<li className="cart__btn cart__btn-profile">
					<Link to={`profile`}>
						<img
							style={{ width: 18, height: 18 }}
							src="/img/user.svg"
							alt="user"
						/>
					</Link>
				</li>
			</ul>
		</header>
	);
}
