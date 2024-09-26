import { Link } from 'react-router-dom';

export default function Profile() {
	return (
		<div className="profile">
			<div className="profile__header">
				<Link to="/">
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="0.5"
							y="0.5"
							width="34"
							height="34"
							rx="7.5"
							fill="white"
							stroke="#F2F2F2"
						/>
						<path
							d="M19 22L14 17L19 12"
							stroke="#C8C8C8"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Link>

				<h2>My purchases</h2>
			</div>
		</div>
	);
}
