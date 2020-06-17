import React from 'react';
import Card from '../Card';
import './style.css'
import ScrollArrows from '../ScrollArrows';

class Scrollable extends React.Component {

    constructor(props){
        super(props);

        this.div = React.createRef();
    }

    onHit(dir){
        const carousel = this.div.current;
        const width = carousel.clientWidth*0.6;

        if(dir === 0)
            carousel.scrollLeft += width;
        else if(dir === 1)
            carousel.scrollLeft -= width;
    }

    render(){
        return(
            <div className='section-seperator'>
            <h1 className='scrollable__heading'>New offers are lining uppp!<span role='img' aria-label='celebrate'>🎉</span></h1>
            <h1 className='scrollable__sub-heading'>Save more than 15%</h1>
            <div className='scrollable-container'>
                <div className='scrollable remove-scrollbar' ref={this.div}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <ScrollArrows onHit={(i) => this.onHit(i)}/>
            </div>
            </div>
        );
    }
}

export default Scrollable;