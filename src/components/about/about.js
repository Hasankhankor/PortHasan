import React from 'react'
import './about.css'
import Me from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Me} alt="" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experinces</h5>
							<small>1+ Years Working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>8+ World wide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>8+ complets</small>
						</article>
					</div>
					<p>
					Software engineer I have one year of experience. To help you reach the market more quickly, I can assist you with developing your websites and mobile applications utilising React native and Next JS. I'll build front-end and back-end web pages and apps using React JS and SQL. and creating the front-end and back-end of mobile apps with react native. I'll be a requirement engineer in my job.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talks
					</a>
				</div>
			</div>
		</section>
	);
}

export default about