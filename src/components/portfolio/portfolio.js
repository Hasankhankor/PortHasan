import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio 1.png'
import IMG2 from "../../assets/XW.PNG";
import IMG3 from "../../assets/simple.png";
import IMG4 from "../../assets/porfolio 4.png";
import IMG5 from "../../assets/porfolio 5.png";
import IMG6 from "../../assets/porfolio 6.png";


const portfolio = () => {
  const data = [
		{
			id: 1,
			image: IMG1,
			title: "Used Furniture Web site",
			github: "https://www.github.com",
			demo: "https://furniturebuyersad.com/",
		},
		{
			id: 1,
			image: IMG2,
			title: "Kp karwane Pakistan ",
			github: "https://www.github.com",
			demo: "#",
		},
		{
			id: 1,
			image: IMG3,
			title: "Majid farms  ",
			github: "https://www.github.com",
			demo: "#",
		},
		{
			id: 1,
			image: IMG4,
			title: "CPConsult Cosultant Agency",
			github: "https://www.github.com",
			demo: "#",
		},
		{
			id: 1,
			image: IMG5,
			title: "Social Media App",
			github: "https://www.github.com",
			demo: "#",
		},
		{
			id: 1,
			image: IMG6,
			title: "USS enterprises",
			github: "https://www.github.com",
			demo: "#",
		},
	];
  return (
    <section id="portfolio">
      <h5>My Recnet Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo})=>{
           return (
             <article key={id} className="portfolio__item">
               <div className="portfolio__item-image">
                 <img src={image} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
                 <a href={github} className="btn" >
                   Github
                 </a>
                 <a href={demo} className="btn btn-primary" >
                   My Demo
                 </a>
               </div>
             </article>
           );
         })
       }
        
      </div>
    </section>
  );
}

export default portfolio
