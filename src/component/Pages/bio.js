import React from "react";
import ImageProfile from "../../assets/images/elham.jpg"


const Bio = () => {

    return (

        <React.Fragment>
            <header className="header">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main "> welcome to my portfolio </span>
                        <span className="heading-primary-sub"> know me better as a web developer... </span>
                    </h1>
                    <a href="#about-me" className="btn btn--white btn--wave"> let's start </a>
                </div>
            </header>
            <main>
                <section className="section-stories">

                    <div className="about-card" id="about-me">
                        <div className="about-card__side about-card__side--front">
                            <div className="about-card__picture about-card__picture--1">
                                
                            </div>
                        <h4 className="about-card__heading">
                            <figure className="story__shape">
                                <img src={ImageProfile} alt="elham poshtiban" className="story__img"/>
                            </figure>
                        </h4>
                            <div className="about-card__details">
                                    <div className="heading-about">

                                        <h1 className="heading-about__main">
                                            ELHAM POSHTIBAN
                                        </h1>
                                            <hr></hr>

                                        <p className="heading-about__sub">  WEB DEVELOPER | CREATIVE | ambitious | Innovator </p>

                                    </div>
                            </div>
                        </div>
                        <div className="about-card__side about-card__side--back about-card__side--back">
                            <div className="about-card__cta">
                            <p> ABOUT ME</p>
                            <hr></hr>
                            <p> Passionate, detail-oriented Full Stack Web Developer with a certificate from UT Austin coding Boot-camp and degree in Software Engineering.
                                Highly enthusiastic about coding and learning new materials.
                                Prepared to excel under stressful situations and maintain a sense of humor to collaborate with a team in a productive, positive manner across fast-paced settings.
                            </p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </React.Fragment>
    )
}

export default Bio



{/* <h4 className="font-weight-bold">About me</h4>
<hr />
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Maxime quae, dolores dicta. Blanditiis rem amet repellat,
  dolores nihil quae in mollitia asperiores ut rerum
  repellendus, voluptatum eum, officia laudantium quaerat?
</p>
<hr /> */}


    
                    {/* <div className="story" id="about-me">
                            <figure className="story__shape">
                                <img src={ImageProfile} alt="elham poshtiban" className="story__img"/>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-third  u-margin-bottom-small"> HI! My name is Elham Poshtiban</h3>
                            </div>
                            <p> Passionate, detail-oriented Full Stack Web Developer with a certificate from UT Austin coding Boot-camp and degree in Software Engineering.
                                Highly enthusiastic about coding and learning new materials.
                                Prepared to excel under stressful situations and maintain a sense of humor to collaborate with a team in a productive, positive manner across fast-paced settings.
                            </p>
                        <h2 className="heading-third">
                            My Info
                        </h2>
                        <div className="row">
                                <div className="story__navigation">
                                    <ul className="story__list">
                                        <li className="story__item"> 
                                            <a href="https://github.com/elhamposhtiban" className="story__link">
                                            <FontAwesomeIcon icon={faGithub} size="2x" className="media-link"/>
                                            </a> 
                                        </li>
                                        <li className="story__item"> 
                                            <a href="https://www.linkedin.com/in/elham-poshtiban-2a40a4149/" className="story__link">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="media-link"/>
                                            </a> 
                                        </li>
                                        <li className="story__item"> 
                                            <a href="./public/assets/images/ElhamPoshtiban Tech-Resume.pdf" className="story__link">
                                            <FontAwesomeIcon icon={faFilePdf} size="2x" className="media-link"/>
                                            </a> 
                                        </li>
                                        <li className="story__item"> 
                                            <a href="mailto:elham.poshtiban@gmail.com" className="story__link">
                                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="media-link"/>
                                            </a> 
                                        </li>
                                        <li className="story__item"> 
                                            <a href="tel:2814259682" className="story__link">
                                            <FontAwesomeIcon icon={faPhone} size="2x" className="media-link"/>
                                            </a> 
                                        </li>
                                    </ul> 
                                </div>
                        </div>
                        </div> */}