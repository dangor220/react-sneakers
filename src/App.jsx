import { useEffect, useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [favourite, setFavourite] = useState([]);

	useEffect(() => {
		axios.get('https://ed0e52336482f229.mokky.dev/items').then((response) => {
			setItems(response.data);
		});

		axios
			.get('https://ed0e52336482f229.mokky.dev/cards')
			.then((response) => setCartItems(response.data));

		axios
			.get('https://ed0e52336482f229.mokky.dev/favourites')
			.then((response) => setFavourite(response.data));
	}, []);

	const getTotalPrice = () => {
		return cartItems.reduce((acc, value) => (acc += value.price), 0);
	};

	const handleClickPlus = (obj) => {
		let exist = false;
		cartItems.forEach((item) =>
			item.uid === obj.uid ? (exist = true) : false
		);
		if (!exist) {
			axios.post('https://ed0e52336482f229.mokky.dev/cards', obj);
			setCartItems((prev) => [...prev, obj]);
		} else {
			handleRemoveItem(obj);
		}

		exist = false;
	};

	const handleRemoveItem = (obj) => {
		setCartItems([...cartItems.filter((item) => item.uid !== obj.uid)]);

		axios.get('https://ed0e52336482f229.mokky.dev/cards').then((res) => {
			res.data.filter((items) =>
				items.uid === obj.uid
					? axios.delete(`https://ed0e52336482f229.mokky.dev/cards/${items.id}`)
					: false
			);
		});
	};

	const handleSearch = (event) => {
		setSearchValue(event.target.value);
	};

	const handleFavourite = (item) => {
		let exist = favourite.some((elem) => elem.uid === item.uid);

		if (!exist) {
			axios.post('https://ed0e52336482f229.mokky.dev/favourites', item);
			setFavourite((prev) => [...prev, item]);
		} else {
			handleRemoveFavourite(item);
		}
	};

	const handleRemoveFavourite = (item) => {
		setFavourite([...favourite.filter((elem) => elem.uid !== item.uid)]);

		axios.get('https://ed0e52336482f229.mokky.dev/favourites').then((res) => {
			res.data.filter((items) =>
				items.uid === item.uid
					? axios.delete(
							`https://ed0e52336482f229.mokky.dev/favourites/${items.id}`
					  )
					: false
			);
		});
	};

	return (
		<>
			<div className="wrapper clear">
				<Drawer
					onClickCart={() => setCart(!cart)}
					calcPrice={getTotalPrice}
					handleRemoveItem={handleRemoveItem}
					visible={cart}
					data={cartItems}
				/>
				<Header onClickCart={() => setCart(!cart)} calcPrice={getTotalPrice} />

				<div id="detail">
					<Outlet />
				</div>

				<Routes>
					<Route
						path="/"
						element={
							<Home
								items={items}
								favourite={favourite}
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								handleFavourite={handleFavourite}
								handleSearch={handleSearch}
								handleClickPlus={handleClickPlus}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
