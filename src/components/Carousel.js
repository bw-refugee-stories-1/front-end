import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const Caro = props => {

  // const story = {...props.storyState.stories[1]};

  // console.log('From Caro: ', story.img_url);
  const approvedStories = props.storyState.stories.filter( story => story.approved === 'true');

  const imgStories = [
    {...approvedStories[0]},
    {...approvedStories[1]},
    {...approvedStories[2]}
  ]

  const items = [
    {
      //TODO: add first three images to the carousel
      src: `${imgStories[0].img_url}`,
      id: 1,
      // altText: 'Slide 1',
      // caption: 'Slide 1',
    },
    {
      src: `${imgStories[1].img_url}`,
      id: 2,
      // altText: 'Slide 2',
      // caption: 'Slide 2',
    },
    {
      src: `${imgStories[2].img_url}`,
      id: 3,
      // altText: 'Slide 3',
      // caption: 'Slide 3',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          className="text-danger"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  // TODO: Move style to scss? -DJ
  return ( // The main returned carousel item
    <div>
      <style>
        {`.custom-tag {
              width: 100%; 
              height: 500px;
              background: black;
              
              
            }`}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    storyState: state.storyState,
  }
}

export default connect(
  mapStateToProps
)(Caro);
