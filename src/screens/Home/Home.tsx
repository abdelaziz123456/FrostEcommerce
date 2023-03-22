import {View} from 'react-native';
import React from 'react';
import {Carousel, Container} from '../../SharedComponents';
import {CarouselData} from '../../Utiles/dummyData';

export default function Home() {
  return (
    <Container>
      <View style={{flex: 1}}>
        <Carousel products={CarouselData} />
      </View>
    </Container>
  );
}
