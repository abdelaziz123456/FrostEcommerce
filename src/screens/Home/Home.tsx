import {View} from 'react-native';
import React from 'react';
import {Carousel, Container} from '../../SharedComponents';
import {CarouselData} from '../../Utiles/dummyData';
import CarouselCards from '../../SharedComponents/CarouselCard/CarouselCard';

export default function Home() {
  return (
    <Container>
      <View style={{flex: 1}}>
        <CarouselCards products={CarouselData} />
      </View>
    </Container>
  );
}
