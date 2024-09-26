import { useEffect, useState } from 'react';

export default function Button({ info, handleClick, cartItems }) {
	const [buyBtn, setBuyBtn] = useState(false);
	useEffect(() => {
		if (buyBtn) {
			const exists = cartItems.some((item) => item.uid === info.uid);

			if (!exists) {
				setBuyBtn(!buyBtn);
			}
		}
		if (cartItems) {
			cartItems.forEach((item) =>
				item.uid === info.uid ? setBuyBtn(true) : false
			);
		}
	}, [cartItems, buyBtn, info.uid]);

	let handleAddded = () => {
		handleClick(info);

		setBuyBtn(!buyBtn);
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
