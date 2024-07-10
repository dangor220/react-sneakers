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
