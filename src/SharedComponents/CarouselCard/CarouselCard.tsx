import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CarouselData} from '../../Utiles/dummyData';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from '../Carousel/Carousel';

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={CarouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;
