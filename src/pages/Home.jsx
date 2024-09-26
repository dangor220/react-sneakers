import Card from '../components/Card';
export default function Home({
	items,
	favourite,
	cartItems,
	searchValue,
	setSearchValue,
	handleFavourite,
	handleSearch,
	handleClickPlus,
}) {
	return (
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
				favourite={favourite}
				search={searchValue}
				handleClickPlus={handleClickPlus}
				handleFavourite={handleFavourite}
				cartItems={cartItems}
			/>
		</main>
	);
}
