export default function Drawer({
	visible,
	onClickCart,
	data = [],
	handleRemoveItem,
}) {
	const handleOverlay = (e) => {
		if (e.target.classList.contains('overlay')) {
			onClickCart();
		}
	};
	const handleRemove = (item) => {
		handleRemoveItem(item);
		
	};
	return (
		<div
			onClick={(e) => {
				handleOverlay(e);
			}}
			className={visible ? 'overlay overlay__active' : 'overlay'}
		>
			<div className="drawer">
				<h2>
					Cart{' '}
					<button
						onClick={onClickCart}
						className="button button__close button__remove"
					></button>
				</h2>
				<ul className="drawer__items">
					{data.map((item) => (
						<li className="cart" key={item.id}>
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
						<b>{30000}₽</b>
					</div>
					<div>
						<span>Tax 5%:</span>
						<span className="dash"></span>
						<b>{1074}₽</b>
					</div>
				</div>
				<button className="button button__order">
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
			</div>
		</div>
	);
}
