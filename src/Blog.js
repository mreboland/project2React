import React from "react";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {
    return (
        <section>

            <header class="blog-background">
            </header>
            
            <div className="wrapper-inner blog-shift">
                <div className="width-limiter">
                    <div className="blog-title">
                        <h2>Sunshine Hotel in top 5 best hotel from TripAdvisor magazine</h2>
                        <p>Home > Blog > <span>Sunshine Hotel in top 5 best hotel from TripAdvisor magazine</span></p>
                    </div>
                    <div className="blog-header">
                        <div className="author">
                            <img src={require("./assets/blog-2.jpeg")} alt="Photo of the upper half of a woman with her head turned."/>
                                <div className="author-name">
                                    <h3>Alex Furguson</h3>
                                    <p>Admin</p>
                                </div>
                        </div>
                            <div className="blog-misc">
                                <ul>
                                    <li>
                                        <h3>Date</h3>
                                        <p>June, 19th, 2018</p>
                                    </li>
                                    <li>
                                        <h3>Category</h3>
                                        <p>Travel, Life style</p>
                                    </li>
                                    <li>
                                        <h3>Tags</h3>
                                        <p>Hotel, magazine, top</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="blog-content">
                            <p className="bold">Adventure simple adventure, design webdesign fun webdesign Travel design design. Simple clean adventure colorful expedition organized expedition. Design modern darn simple excursion, Travel traveler traveler traveling cute.</p>
                            <p>Adventure simple adventure, design webdesign fun webdesign Travel design design. Simple clean adventure colorful expedition organized expedition. Design modern darn simple excursion, Travel traveler traveler traveling cute.</p>
                            <p>Design cute traveling organized, simple design traveler colorful wanderlust WordPress. Simple WordPress travelblogger, WordPress simple travelblogger traveling Travel darn traveling. Darn darn expedition whimsical fun simple design. Design theme traveling blogger darn, travelblogger traveling webdesign fun traveling. Fun organized organized wanderlust website organized cute, cute colorful website theme</p>
                            <p>Design cute traveling organized, simple design traveler colorful wanderlust WordPress. Simple WordPress travelblogger, WordPress simple travelblogger traveling Travel darn traveling. Darn darn expedition whimsical fun simple design. Design theme traveling blogger darn, travelblogger traveling webdesign fun traveling. Fun organized organized wanderlust website organized cute, cute colorful website theme</p>
                        </div>

                        <div className="blog-media">
                            <h3>Share:</h3>
                            <ul>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-google-plus-g"></i></li>
                            </ul>
                        </div>

        <div className="blog-related">
            <h2>Related Posts</h2>
            <div className="related-gallery">
                <ul>
                    <li>
                        <img src={require("./assets/blog-3.jpeg")} alt="Water plane parked on the beach."/>
                        <div>
                            <p>June, 24th, 2016</p>
                            <h3>Five reasons to stay at the beautiful Sunshine Hotel</h3>
                            <p>Continue <i className="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </li>
                    <li>
                        <img src={require("./assets/blog-4.jpeg")} alt="Woman floating in ocean on her back"/>
                        <div>
                            <p>April, 24th, 2016</p>
                            <h3>Experience romantic space just have only at Sunshine hotel</h3>
                            <p>Continue <i className="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </li>
                    <li>
                        <img src={require("./assets/blog-5.jpeg")} alt="Photo of an inter courtyard of a hote of the balconies of the suites"/>
                        <div>
                            <p>May, 08th, 2016</p>
                            <h3>Discover activities interested in Sunshine Hotel</h3>
                            <p>Continue <i className="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="blog-comments">
            <h2>02 Comments</h2>
            <div className="comment-post-one">
                <img src={require("./assets/blog-6.jpeg")} alt=""/>
                    <div className="comment bubble">
                        <p><span className="name">Daniel Vandaft</span> - <span className="reply">Reply</span></p>
                        <p>Pretty excursion website pretty fun excursion excursion fun. Colorful traveler theme blogger fun, website blogger design organized travelblogger.</p>
                        <p className="comment-date">Jul 17, 2015 at 15 hours ago</p>
                    </div>
            </div>
        <div className="comment-post-two">
            <img src={require("./assets/blog-7.jpeg")} alt=""/>
            <div className="comment bubble">
                <p><span className="name">Jenifer Loopz</span> - <span className="reply">Reply</span></p>
                <p>Pretty excursion website pretty fun excursion excursion fun. Colorful traveler theme blogger fun, website blogger design organized travelblogger.</p>
                <p className="comment-date">Jul 17, 2015 at 15 hours ago</p>
            </div>
        </div>
        <h2>Leave A Comment</h2>
        <form className="comment-form">
            <div className="container-comment">
                <div className="comment-list">
                    <ul>
                        <li><input type="text" className="form2" placeholder="Enter your name..." name="mail" required/></li>
                        <li><input type="text" className="form2" placeholder="youremail@domain.com" name="mail" required/></li>
                        <li><input type="text" className="form2 third-box" placeholder="Subject (Optional)" name="mail" required/></li>
                    </ul>
                </div>
                <textarea name="field" id="field" className="msg-area" placeholder="Here goes your message"></textarea>
                <button>SEND MESSENGER</button>
            </div>
        </form>
    </div>

    </div>
    </div>
</section>




    )


}

export default Blog;