import React from 'react';

import './style.css'

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.div = React.createRef();
        this.ids = [1,2,3,4,5];
        this.current = 0;
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.onHit(0),6000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    onHit(dir){
        const carousel = this.div.current;
        const width = carousel.scrollWidth/carousel.childElementCount;
        const scrollWidth = carousel.scrollWidth;

        if(dir === 0)
            if(carousel.scrollLeft+width < scrollWidth)
                carousel.scrollLeft += width;
            else 
                carousel.scrollLeft = 0;
        else if(dir === 1)
            if(carousel.scrollLeft-width > 0)
                carousel.scrollLeft -= width;
            else
                carousel.scrollLeft = scrollWidth;
    }

    render(){
        return (
            <div className='container' 
                onMouseEnter={() => clearInterval(this.timerID)} 
                onMouseLeave={() => this.timerID = setInterval(() => this.onHit(0),6000)}>
                <div ref={this.div} className='carousel'>
                    <img className='carousel__product' src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80' alt='Resource not available'></img>
                    <img className='carousel__product' src='https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' alt='Resource not available'></img>
                </div>
                <button onClick={() => this.onHit(1)} className='rem-def-btn left-button'><i className="fas fa-chevron-left fa-2x"></i></button>
                <button onClick={() => this.onHit(0)} className='rem-def-btn right-button'><i className="fas fa-chevron-right fa-2x"></i></button>
            </div>
        )
    }
}

export default Carousel;