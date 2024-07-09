function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="header__left d-flex align-center">
                    <img
                        style={{ width: 40, height: 40 }}
                        src="/img/logo.png"
                        alt="logo"
                    />
                    <div className="header__info">
                        <h3 className="text-uppercase">React Sneakers</h3>
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
                        <span>1205 руб.</span>
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
                <h1>All sneakers</h1>
                <div className="card">
                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer.jpg"
                            alt="Nike Blazer Mid Suede"
                        />
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>15 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-air.jpg"
                            alt="Nike Air Max 270"
                        />
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer-mid.jpg"
                            alt="Nike Blazer Mid"
                        />
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>11 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
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
                                    Цена:
                                </span>
                                <b>18 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/under.jpg"
                            alt="Under"
                        />
                        <p>Мужские Кроссовки Under Armour Curry 8</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>5 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-kyrie.jpg"
                            alt="Nike Kyrie 7"
                        />
                        <p>Мужские Кроссовки Nike Kyrie 7</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>19 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-jordan.jpg"
                            alt="Jordan Air Jordan 11"
                        />
                        <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>22 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-le.jpg"
                            alt="Nike LeBron XVIII"
                        />
                        <p>Мужские Кроссовки Nike LeBron XVIII</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>9 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-lebron.jpg"
                            alt="Nike Lebron XVIII Low"
                        />
                        <p>Мужские Кроссовки Nike Lebron XVIII Low</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>16 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-blazer.jpg"
                            alt="Nike Blazer Mid Suede"
                        />
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>15 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card__item">
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
                                    Цена:
                                </span>
                                <b>19 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card__item">
                        <img
                            width={133}
                            height={112}
                            src="img/sneakers/nike-kyrie.jpg"
                            alt="Nike Kyrie Flytrap IV"
                        />
                        <p>Мужские Кроссовки Nike Kyrie Flytrap IV</p>
                        <div className="d-flex justify-between">
                            <div>
                                <span className="d-flex flex-column">
                                    Цена:
                                </span>
                                <b>10 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/add.svg"
                                    alt="Add"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
