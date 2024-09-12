export default function Header({ onClickCart }) {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="header__left d-flex align-center">
				<img style={{ width: 40, height: 40 }} src="/img/logo.png" alt="logo" />
				<div className="header__info">
					<h3 className="text-uppercase">Sneakers</h3>
					<p className="opacity-5">Shop the best sneakers</p>
				</div>
			</div>
			<ul className="header__right d-flex">
				<li onClick={onClickCart} className="mr-30 cart__btn">
					<img
						style={{ width: 18, height: 18 }}
						src="/img/cart.svg"
						alt="cart"
					/>
					<span>1205 ₽</span>
				</li>
				<li>
					<img
						style={{ width: 18, height: 18 }}
						src="/img/favorite.svg"
						alt="favorite"
					/>
				</li>
				<li>
					<img
						style={{ width: 18, height: 18 }}
						src="/img/user.svg"
						alt="user"
					/>
				</li>
			</ul>
		</header>
	);
}
