import { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch('https://66df1194de4426916ee37385.mockapi.io/items')
			.then((response) => response.json())
			.then((data) => setItems(data));
	}, []);

	const handleClickPlus = (obj) => {
		let exist = false;
		cartItems.forEach((item) => (item.id === obj.id ? (exist = true) : false));
		if (!exist) {
			setCartItems((prev) => [...prev, obj]);
		} else {
			handleRemoveItem(obj);
		}
		exist = false;
	};
	const handleRemoveItem = (obj) => {
		setCartItems([...cartItems.filter((item) => item.id !== obj.id)]);
	};

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="wrapper clear">
			<Drawer
				onClickCart={() => setCart(!cart)}
				handleRemoveItem={handleRemoveItem}
				visible={cart}
				data={cartItems}
			/>
			<Header onClickCart={() => setCart(!cart)} />
			<main className="content">
				<div className="search">
					<h1>
						{searchValue
							? `Search by request: "${
									searchValue.length >= 15
										? searchValue.substring(0, 15) + '...'
										: searchValue
							  }"`
							: 'All sneakers'}
					</h1>
					<div className="search__block">
						<img src="img/search.svg" alt="Search" />
						{searchValue && (
							<button
								className="button button__clear button__remove"
								onClick={() => {
									setSearchValue('');
								}}
							></button>
						)}
						<input
							onChange={handleSearch}
							type="text"
							placeholder="Search..."
							value={searchValue}
						/>
					</div>
				</div>

				<Card
					data={items}
					search={searchValue}
					handleClickPlus={handleClickPlus}
					cartItems={cartItems}
				/>
			</main>
		</div>
	);
}

export default App;
