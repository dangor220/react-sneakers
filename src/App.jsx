import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		axios
			.get('https://66df1194de4426916ee37385.mockapi.io/items')
			.then((response) => setItems(response.data));

		axios
			.get('https://66df1194de4426916ee37385.mockapi.io/card')
			.then((response) => setCartItems(response.data));
	}, []);

	const handleClickPlus = async (obj) => {
		let exist = false;
		cartItems.forEach((item) => (item.id === obj.id ? (exist = true) : false));
		if (!exist) {
			axios.post('https://66df1194de4426916ee37385.mockapi.io/card', obj);
			setCartItems((prev) => [...prev, obj]);
		} else {
			handleRemoveItem(obj);
		}

		exist = false;
	};

	const handleRemoveItem = (obj) => {
		setCartItems([...cartItems.filter((item) => item.id !== obj.id)]);
		axios
			.get('https://66df1194de4426916ee37385.mockapi.io/card')
			.then((res) => {
				res.data.filter((items) =>
					items.id == obj.id
						? axios.delete(
								`https://66df1194de4426916ee37385.mockapi.io/card/${items.position}`
						  )
						: false
				);
			});
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
