import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import ImagePath from '../../constants/ImagePath';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        style={{height: 15, width: 15, left: 22, top: 52}}
        source={ImagePath.Arrow_left}></ImageBackground>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: 'black',
          left: 47.37,
          top: 34,
        }}>
        Privacy Policy
      </Text>

      <View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#666666',
            left: 22,
            marginRight: 25,
            top: 70,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Suspendisse faucibus interdum posuere lorem. Sit amet justo donec enim
          diam vulputate. Iaculis at erat pellentesque adipiscing.
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#666666',
            left: 22,
            marginRight: 28,
            top: 90,
          }}>
          Feugiat vivamus at augue eget arcu dictum. Consectetur purus ut
          faucibus pulvinar elementum integer enim neque volutpat. Nunc non
          blandit massa enim nec dui nunc mattis. A condimentum vitae sapien
          pellentesque habitant. Ipsum dolor sit amet consectetur adipiscing
          elit.
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#666666',
            left: 22,
            marginRight: 28,
            top: 120,
          }}>
          At auctor urna nunc id cursus metus aliquam eleifend. Bibendum neque
          egestas congue quisque egestas diam in. Volutpat est velit egestas dui
          id. Malesuada fames ac turpis egestas. Augue eget arcu dictum varius
          duis at consectetur lorem donec.
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#666666',
            left: 22,
            marginRight: 28,
            top: 140,
          }}>
          Aenean sed adipiscing diam donec. Diam sollicitudin tempor id eu nisl
          nunc mi ipsum faucibus. Purus sit amet volutpat consequat mauris.
          Adipiscing elit ut aliquam purus sit amet luctus. Augue ut lectus arcu
          bibendum.
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#666666',
            left: 22,
            marginRight: 28,
            top: 160,
          }}>
          Condimentum mattis pellentesque id nibh tortor id. Sit amet est
          placerat in egestas erat imperdiet sed euismod. Eleifend quam
          adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
          Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
          Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugia
        </Text>
      </View>
    </View>
  );
};
export default PrivacyPolicy;
