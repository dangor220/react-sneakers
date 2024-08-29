import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    return (
        <div className="wrapper clear">
            <Drawer visible={true} />
            <Header />
            <main className="content">
                <div className="search">
                    <h1>All sneakers</h1>
                    <div className="search__block">
                        <img src="img/search.svg" alt="Search" />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <div className="card">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    );
}

export default App;
