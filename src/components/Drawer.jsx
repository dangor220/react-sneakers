export default function Drawer({ visible }) {
    return (
        <div
            style={visible ? { display: 'block' } : { display: 'none' }}
            className="overlay"
        >
            <div className="drawer">
                <h2>
                    Cart{' '}
                    <button className="button button__close button__remove"></button>
                </h2>
                <ul className="drawer__items">
                    <li className="cart">
                        <div className="cart__item">
                            <img
                                width={80}
                                src="/img/sneakers/nike-air.jpg"
                                alt="Nike Air"
                            />
                            <div>
                                <p class="mb-5">Men's shoes Nike Air Max 270</p>
                                <b>15 999 ₽</b>
                            </div>
                            <button className="button button__remove"></button>
                        </div>
                    </li>

                    <li className="cart">
                        <div className="cart__item">
                            <img
                                width={80}
                                src="/img/sneakers/puma.jpg"
                                alt="Nike Air"
                            />
                            <div>
                                <p class="mb-5">
                                    Men's shoes Puma X Aka Boku Future Rider
                                </p>
                                <b>19 999 ₽</b>
                            </div>
                            <button className="button button__remove"></button>
                        </div>
                    </li>
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8.71436 1L14.7144 7L8.71436 13"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
