import React, {Component} from "react";
import { UncontrolledCarousel } from 'reactstrap';


  const items = [
    {
      src: './img/banner/b1.jpg',
      altText: 'Slide 1',

    },
    {
      src: './img/banner/b2.jpg',
      altText: 'Slide 2',

    },
    {
      src: './img/banner/b3.jpg',
      altText: 'Slide 3',

    }
  ];

class Carousel extends Component{

    render(){
        return(
            <UncontrolledCarousel items={items} />
        )
    }
}

export default Carousel;