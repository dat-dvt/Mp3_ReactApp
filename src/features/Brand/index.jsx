import React from 'react';
import './Brand.scss';

function Brand({ brandList = [] }) {
	return (
		<div className="row medium-gutter brand--container">
			{brandList.map((brand, index) => (
				<div key={index} className="col l-1-5 m-3 c-4 container__footer-brand-item mb-30">
					<div className="footer__brand-container">
						<div className="container__footer-brand-background img--rec"></div>
						<img src={brand.image} alt="brand" className="container__footer-brand-img" />
					</div>
				</div>
			))}
		</div>
	);
}

export default Brand;
