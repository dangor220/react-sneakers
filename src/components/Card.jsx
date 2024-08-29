import Button from './Button';
import Favorite from './Favorite';

export default function Card() {
    return (
        <div className="card__item">
            <Favorite />
            <img
                width={133}
                height={112}
                src="img/sneakers/nike-blazer.jpg"
                alt="Nike Blazer Mid Suede"
            />
            <p>Men's shoes Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between">
                <div>
                    <span className="d-flex flex-column">Price:</span>
                    <b>15 999 ₽</b>
                </div>
                <Button />
            </div>
        </div>
    );
}
