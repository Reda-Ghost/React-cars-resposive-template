import React from 'react';
import styles from './Luxury.module.css';
import CARS from './data';

const Luxury = () => {
	return (
		<div className={styles.luxury}>
			<div className={styles.heading}>
				<h1>Luxury Selection</h1>
				<div className={styles.text_bg}>
					<p>
						<span>Select from the top luxury vehicles to roll in style</span>
					</p>
				</div>
			</div>

			<div className={styles.container}>
				{CARS.map(({ image, make }, index) => {
					return (
						<div className={styles.card} key={index}>
							<img src={image} alt="" />
							<div className={styles.content}>
								<h3>{make}</h3>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Luxury;
