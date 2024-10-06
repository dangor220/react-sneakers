import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useRef, useCallback, useState } from 'react';

const CustomSwiper = () => {
	const sliderRef = useRef(null);

	const [start, setStart] = useState(true);
	const [end, setEnd] = useState(false);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<div className="swiper-content">
			<Swiper
				ref={sliderRef}
				className="mySwiper"
				onReachBeginning={() => setStart(true)}
				onReachEnd={() => setEnd(true)}
				onFromEdge={() => {
					setStart(false);
					setEnd(false);
				}}
			>
				<SwiperSlide>
					<img src="/img/preview/1.webp" alt="preview-slider-1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/img/preview/2.webp" alt="preview-slider-2" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/img/preview/3.webp" alt="preview-slider-3" />
				</SwiperSlide>
			</Swiper>
			<div
				className={
					start
						? 'swiper-content-prev swiper-content-prev-disabled'
						: 'swiper-content-prev'
				}
				onClick={handlePrev}
			>
				<svg
					width="7"
					height="12"
					viewBox="0 0 7 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 0.999999L6 6L1 11"
						stroke="#C8C8C8"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div
				className={
					end
						? 'swiper-content-next swiper-content-next-disabled'
						: 'swiper-content-next'
				}
				onClick={handleNext}
			>
				<svg
					width="7"
					height="12"
					viewBox="0 0 7 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 0.999999L6 6L1 11"
						stroke="#C8C8C8"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default function Home({
	items,
	favourite,
	cartItems,
	searchValue,
	setSearchValue,
	handleFavourite,
	handleSearch,
	handleClickPlus,
	isLoading,
}) {
	return (
		<main className="content">
			<CustomSwiper />
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
				favourite={favourite}
				search={searchValue}
				handleClickPlus={handleClickPlus}
				handleFavourite={handleFavourite}
				cartItems={cartItems}
				isLoading={isLoading}
			/>
		</main>
	);
}
