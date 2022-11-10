import React from 'react'

import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Branding</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Responsive web design.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Mobile app design.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>User experience consulting.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>User experience consulting.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Promotional designs using the latest tools and technologies.
							</p>
						</li>
					</ul>
				</article>
				{/* End of UI/UX */}
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Business analysis and consulting.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>UX/UI design.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>24/7 support.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Web solution engineering.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Quality assurance.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Integration.</p>
						</li>
					</ul>
				</article>
				{/* end of web */}
				<article className="service">
					<div className="service__head">
						<h3>Requirment Engineer</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Gather & Develop Requirements.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Write and Document Requirements.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Check Completeness..</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Minim incididunt excepteur non ex excepteur non enim irure culpa
								exercitation.
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Analyze, Refine, and Decompose Requirements.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Verify and Validate Requirements..</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Manage Requirements..</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default services
