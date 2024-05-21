import React, { Component } from "react";
import "./Carousel.css";
import {images} from '../data/CarouselData'
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            cur_Index:0
        };
    }
    goToPreviousSlide= () =>{
        const {cur_Index} =this.state;
        const newIndex=(cur_Index - 1 +images.length)%images.length;
        this.setState({cur_Index: newIndex});
    };
    goToNextSlide= () =>{
        const {cur_Index} =this.state;
        const newIndex=(cur_Index + 1 +images.length)%images.length;
        this.setState({cur_Index: newIndex});
    };
  

render(){
    const {cur_Index} =this.state;
    return(
        <div class="carousel">
            <ArrowBackIosIcon className="arrow left" onClick={this.goToPreviousSlide}/>
            <div className="image-container">
            <img src={images[cur_Index].img} className="image"/>
            <div className="overlay">
            <div className="title-box">
              <h2 className="title">{images[cur_Index].title}</h2>
            </div>
            <div className="subtitle-box">
              <p className="subtitle">{images[cur_Index].subtitle}</p>
            </div>
          </div>
            </div>
            <ArrowForwardIosIcon className="arrow right" onClick={this.goToNextSlide}/>

        </div>
    );
}
}

export default Carousel;
