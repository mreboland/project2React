import React from "react";

const Home = () => {
    return (
        <div>
        <header class="background">
        </header>
        
        <section class="about wrapper-outer" id="about">
            <div className="wrapper-inner about-us">
                <h3>A LITTLE ABOUT US</h3>
                <div className="about-us-content">
                    <div className="about-image">
                        <img class="circle" src={require("./assets/home-2.jpeg")} alt="Girl in bathing suit laying on white sandy beach"/>
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

        </div>







    )
}

export default Home;