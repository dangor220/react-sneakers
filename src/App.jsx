import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const sneakersData = [
    {
        id: 11,
        name: "Men's shoes Nike Blazer Mid Suede",
        price: 15999,
        image: 'img/sneakers/nike-blazer.jpg',
    },
    {
        id: 22,
        name: "Men's shoes Puma X Aka",
        price: 19600,
        image: 'img/sneakers/puma.jpg',
    },
    {
        id: 33,
        name: "Men's shoes Nike Blazer Mid Suede",
        price: 8499,
        image: 'img/sneakers/nike-blazer-mid.jpg',
    },
    {
        id: 44,
        name: "Men's shoes Nike Air Max 270",
        price: 12499,
        image: 'img/sneakers/nike-air.jpg',
    },
    {
        id: 55,
        name: "Men's shoes Under Armour Curry 80",
        price: 15188,
        image: 'img/sneakers/under.jpg',
    },
    {
        id: 66,
        name: "Men's shoes Nike Kyrie 7",
        price: 15188,
        image: 'img/sneakers/nike-kyrie.jpg',
    },
    {
        id: 77,
        name: "Men's shoes Jordan Air Jordan 11",
        price: 10799,
        image: 'img/sneakers/nike-jordan.jpg',
    },
    {
        id: 88,
        name: "Men's shoes Nike LeBron XVIII",
        price: 16499,
        image: 'img/sneakers/nike-le.jpg',
    },
    {
        id: 99,
        name: "Men's shoes Nike Lebron XVIII Low",
        price: 13999,
        image: 'img/sneakers/nike-lebron.jpg',
    },
    {
        id: 111,
        name: "Men's shoesNike Blazer Mid-S Suede",
        price: 11999,
        image: 'img/sneakers/nike-blazer.jpg',
    },
    {
        id: 222,
        name: "Men's shoes Nike Kyrie Flytrap IV",
        price: 11299,
        image: 'img/sneakers/nike-kyrie.jpg',
    },
    {
        id: 333,
        name: "Men's shoes Puma XS Aka",
        price: 11420,
        image: 'img/sneakers/puma.jpg',
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer visible={false} />
            <Header />
            <main className="content">
                <div className="search">
                    <h1>All sneakers</h1>
                    <div className="search__block">
                        <img src="img/search.svg" alt="Search" />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <Card data={sneakersData} />
            </main>
        </div>
    );
}

export default App;
