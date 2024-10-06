import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card/Card.module.scss';

const MyLoader = (props) => (
	<>
		{[...Array(8)].map((i, index) => {
			return (
				<div className={styles.card__item} key={index}>
					<ContentLoader
						speed={1}
						width={150}
						height={216}
						viewBox="0 0 150 216"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"
						{...props}
					>
						<rect x="0" y="159" rx="2" ry="2" width="93" height="15" />
						<rect x="0" y="137" rx="2" ry="2" width="150" height="15" />
						<rect x="0" y="6" rx="10" ry="10" width="150" height="112" />
						<rect x="0" y="188" rx="4" ry="4" width="80" height="24" />
						<rect x="114" y="179" rx="6" ry="6" width="33" height="34" />
					</ContentLoader>
				</div>
			);
		})}
	</>
);

export default MyLoader;
