import React from "react";
import './css/Testimonials.css';

function Testimonials(){
    //carousel referred taken from https://www.w3schools.com/bootstrap/bootstrap_carousel.asp
    return(
        <>           
            <div id="myCarousel" className="carousel carousel-dark slide" data-ride="carousel">
                <div className="carousel-inner" >

                    <div className="item active">
                        <img src={require(`./images/reviews/t1.JPG`)} alt="Testimonials" className="center" />
                    </div>

                    <div className="item">
                        <img src={require(`./images/reviews/t2.JPG`)} alt="Testimonials" className="center" />
                    </div>
            
                    <div className="item">
                        <img src={require(`./images/reviews/t3.JPG`)} alt="Testimonials" className="center" />
                    </div>

                    <div className="item">
                        <img src={require(`./images/reviews/t4.JPG`)} alt="Testimonials" className="center" />
                    </div>

                    <div className="item">
                        <img src={require(`./images/reviews/t5.JPG`)} alt="Testimonials" className="center" />
                    </div>
                </div>
                <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a> 
            </div>
        </>
    )
    
}

export default Testimonials;