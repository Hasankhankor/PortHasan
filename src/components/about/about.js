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
						My title is Full Stack Developer. I have one year of experience. I
						can assist you develop your business or special events and can
						accommodate you from the market in less time. I'll develop Front-end
						and back-end web pages and web apps using React JS, SQL I'll be
						designing the front-end and back-end of mobile apps using react
						native, I'll be employed as a requirement engineer.
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