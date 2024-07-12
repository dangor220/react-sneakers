import { useState } from 'react';

function Favorite() {
    return (
        <div className="card__favorite">
            <svg
                height="17px"
                width="19px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="100 100 400 490"
            >
                <path d="M562.413,284.393c-9.68,41.044-32.121,78.438-64.831,108.07L329.588,542.345l-165.11-149.843 c-32.771-29.691-55.201-67.076-64.892-108.12c-6.965-29.484-4.103-46.14-4.092-46.249l0.147-0.994 c6.395-72.004,56.382-124.273,118.873-124.273c46.111,0,86.703,28.333,105.965,73.933l9.061,21.477l9.061-21.477 c18.958-44.901,61.694-73.922,108.896-73.922c62.481,0,112.478,52.27,119,125.208C566.517,238.242,569.379,254.908,562.413,284.393z" />
            </svg>
        </div>
    );
}
function Button() {
    const [buyBtn, setBuyBtn] = useState(false);
    let handleAddded = () => {
        setBuyBtn((state) => !state);
    };
    return (
        <button className="button" data-checked={buyBtn} onClick={handleAddded}>
            {buyBtn ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 26"
                    width="15px"
                    height="15px"
                >
                    <path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" />
                </svg>
            ) : (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                        fill="#D3D3D3"
                    />
                </svg>
            )}
        </button>
    );
}

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2>Cart</h2>
                    <div className="cart">
                        <div className="cart__item">
                            <img
                                src="/img/sneakers/nike-air.jpg"
                                alt="Nike Air"
                            />
                            <div>
                                <p>Men's shoes Nike Air Max 270</p>
                                <b>15 999 ₽</b>
                            </div>
                            <button className="button button__remove"></button>
                        </div>
                    </div>
                </div>
            </div>
            <header className="d-flex justify-between align-center p-40">
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
                <ul className="header__right d-flex">
                    <li className="mr-30">
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
            <main className="content">
                <div className="search">
                    <h1>All sneakers</h1>
                    <div className="search__block">
                        <img src="img/search.svg" alt="Search" />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <div className="card">
                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer.jpg"
                            alt="Nike Blazer Mid Suede"
                        />
                        <p>Men's shoes Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>15 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>
                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-air.jpg"
                            alt="Nike Air Max 270"
                        />
                        <p>Men's shoes Nike Air Max 270</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>12 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>
                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer-mid.jpg"
                            alt="Nike Blazer Mid"
                        />
                        <p>Men's shoes Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>11 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/puma.jpg"
                            alt="Puma"
                        />
                        <p>Кроссовки Puma X Aka Boku Future Rider</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>18 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/under.jpg"
                            alt="Under"
                        />
                        <p>Men's shoes Under Armour Curry 8</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>5 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-kyrie.jpg"
                            alt="Nike Kyrie 7"
                        />
                        <p>Men's shoes Nike Kyrie 7</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>19 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-jordan.jpg"
                            alt="Jordan Air Jordan 11"
                        />
                        <p>Men's shoes Jordan Air Jordan 11</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>22 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-le.jpg"
                            alt="Nike LeBron XVIII"
                        />
                        <p>Men's shoes Nike LeBron XVIII</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>9 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-lebron.jpg"
                            alt="Nike Lebron XVIII Low"
                        />
                        <p>Men's shoes Nike Lebron XVIII Low</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>16 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>

                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer.jpg"
                            alt="Nike Blazer Mid Suede"
                        />
                        <p>Men's shoes Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>15 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>
                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/puma.jpg"
                            alt="Puma X Aka Boku Future Rider"
                        />
                        <p>Кроссовки Puma X Aka Boku Future Rider</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>19 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>
                    <div className="card__item">
                        <Favorite />
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-kyrie.jpg"
                            alt="Nike Kyrie Flytrap IV"
                        />
                        <p>Men's shoes Nike Kyrie Flytrap IV</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Price:
                                </span>
                                <b>10 999 ₽</b>
                            </div>
                            <Button />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
