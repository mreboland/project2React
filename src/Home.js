import React from "react";

const Home = () => {
    return (
        <div>
        <header className="background">
        </header>
        
        <section className="about wrapper-outer" id="about">
            <div className="wrapper-inner about-us">
                <h3>A LITTLE ABOUT US</h3>
                <div className="about-us-content">
                    <div className="about-image">
                        <img className="circle" src={require("./assets/home-2.jpeg")} alt="Girl in bathing suit laying on white sandy beach"/>
                        <div className="about-circle">
                            <img src={require("./assets/home-circle-text.png")} alt=""/>
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="line"></div>
                        <p>Expedition colorful design theme fun pretty fun WordPress. Wanderlust WordPress excursion modern webdesign wanderlust excursion traveler. Traveler Travel whimsical, organized design clean expedition whimsical traveler webdesign theme colorful. Adventure blogger Travel modern excursion, design blogger expedition traveler organized blogger. Organized excursion darn simple modern cute colorful.</p>
                        <p><span>Ethan Hunt</span> - Director at Monalisa</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="amenities wrapper-outer">
                <div className="wrapper-inner experience">
                    <ul>
                        <li>
                            <h3 className="amenities-image"><i className="fas fa-sun"></i></h3>
                            <div className="amenities-info">
                                <h3>SUNNY SEASON</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                        <li>
                            <h3 ><i className="fas fa-utensils"></i></h3>
                            <div className="amenites-info">
                                <h3>FIVE STAR RESTAURANTS</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                        <li>
                            <h3><i className="fas fa-plane"></i></h3>
                            <div className="amenities-info">
                                <h3>FLIGHT INCLUDED</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                        <li>
                            <h3><i className="fas fa-glass-martini"></i></h3>
                            <div className="amenities-info">
                                <h3>ALL INCLUSIVE</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                        <li>
                            <h3><i className="fas fa-leaf"></i></h3>
                            <div className="amenities-info">
                                <h3>GUIDED NATURE EXPEDITIONS</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                        <li>
                            <h3><i className="fas fa-bell"></i></h3>
                            <div className="amenities-info">
                                <h3>WAKE UP SERVICES</h3>
                                <p>Clean design design traveling modern travelblogger cute theme Travel. Website design WordPress webdesign adventure adventure theme.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="experience-image">
                    <img src={require("./assets/home-3.jpeg")} alt="Picture of moutains ocean side with blue water"/>
                </div>
        </section>

        <section className="testimonial-gallery wrapper-outer">
            <div className="testimonial wrapper-inner">
                <div className="test-inner-wrapper">
                    <h3>TESTIMONIAL</h3>
                    <h2>What Clients Say</h2>
                    <blockquote>
                        <p>" Fun adventure colorful traveling Travel traveler fun, traveling cute expidetion simple traveling. Organized traveler colorful whimsical simple, design clean design expedition trevelblogger. Simple whimsical expedition design organized."</p>
                    </blockquote>
                    <div className="stars">
                        <ul>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                        </ul>
                    </div>
                    <p><span className="name">Adam Levine</span> - review from <span>TripAdvisor</span></p>
                </div>
            </div>

            <div className="gallery wrapper-inner">
                <h3>EXPLORE</h3>
                <h2>Gallery</h2>
                <ul>
                    <li><img src={require("./assets/home-4.jpeg")} alt="Image of tropical leaves"/></li>
                    <li><img src={require("./assets/home-5.jpeg")} alt="Image of woman floating on her back in the ocean"/></li>
                    <li><img src={require("./assets/home-6.jpeg")} alt="Image of a ocean wave breaking"/></li>
                    <li><img src={require("./assets/home-7.jpeg")} alt=">Image of resort chairs on a dock"/></li>
                    <li><img src={require("./assets/home-8.jpeg")} alt="Image of an open suitcase with travel related clothing and gear"/></li>
                    <li><img src={require("./assets/home-9.jpeg")} alt="Image of someone looking at a tropical waterfall"/></li>
                </ul>
            </div>
        </section>

        <section className="contact">
            <img src={require("./assets/home-10.jpeg")} alt="Image of a small bay with people partaking in water activities."/>
                <div className="contact-info wrapper-inner">
                    <div className="inner-contact">
                        <h3>INFORMATION</h3>
                        <h2>Contact us</h2>
                        <h3><span className="city">Honolulu, </span> <span className="country">Hawaii</span></h3>
                        <p>123 King Str, 4th Floor, Utral Hosue Building. <br></br>Honolulu, Hawaii</p>
                        <p><span className="email">Email:</span> info@sunshineohotel.com</p>
                        <div>
                            <p>Call directly:</p>
                            <h2 className="phone-number">+99 (0) 344 956 4050</h2>
                        </div>
                    </div>
                </div>
        </section>


        </div>







    )
}

export default Home;