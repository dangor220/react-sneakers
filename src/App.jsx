import { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useState(false);

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
					<h1>All sneakers</h1>
					<div className="search__block">
						<img src="img/search.svg" alt="Search" />
						<input type="text" placeholder="Search..." />
					</div>
				</div>

				<Card
					data={items}
					handleClickPlus={handleClickPlus}
                    cartItems={cartItems}
				/>
			</main>
		</div>
	);
}

export default App;
