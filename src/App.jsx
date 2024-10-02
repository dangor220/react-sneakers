import { useEffect, useState } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favourite from './pages/Favor';
import Profile from './pages/Profile';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [favourite, setFavourite] = useState([]);
	const [userOrders, setUserOrders] = useState([]);

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
		getUserOrders();
	}, []);

	const getUserOrders = () => {
		axios.get('https://ed0e52336482f229.mokky.dev/orders').then((res) => {
			let data = [];
			res.data.forEach((order) => {
				Object.values(order).forEach((item) => {
					if (typeof item !== 'number') {
						let ordersData = Object.assign({}, item);
						ordersData.orderID = order.id;
						data.push(ordersData);
					}
				});
			});
			setUserOrders(data);
		});
	};

	const getTotalPrice = () => {
		return cartItems.reduce((acc, value) => (acc += value.price), 0);
	};

	const handleClickPlus = (obj) => {
		let exist = false;
		cartItems.forEach((item) => {
			return item.uid === obj.uid ? (exist = true) : false;
		});
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

	const handleClearCart = async () => {
		setCartItems([]);
		const response = await axios.get(
			'https://ed0e52336482f229.mokky.dev/cards'
		);
		const items = response.data;

		for (const item of items) {
			await axios.delete(`https://ed0e52336482f229.mokky.dev/cards/${item.id}`);
		}
	};

	return (
		<>
			<div className="wrapper clear">
				<Drawer
					onClickCart={() => setCart(!cart)}
					calcPrice={getTotalPrice}
					handleRemoveItem={handleRemoveItem}
					getUserOrders={getUserOrders}
					visible={cart}
					cartItems={cartItems}
					setCartItems={setCartItems}
					handleClearCart={handleClearCart}
				/>
				<Header onClickCart={() => setCart(!cart)} calcPrice={getTotalPrice} />

				<Routes>
					<Route element={<Outlet />}>
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
						<Route
							path="/favourite"
							element={
								<Favourite
									favourite={favourite}
									handleClickPlus={handleClickPlus}
									cartItems={cartItems}
									handleFavourite={handleFavourite}
								/>
							}
						/>
						<Route
							path="/profile"
							element={
								<Profile
									favourite={favourite}
									handleClickPlus={handleClickPlus}
									cartItems={cartItems}
									handleFavourite={handleFavourite}
									userOrders={userOrders}
									setUserOrders={setUserOrders}
								/>
							}
						/>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
