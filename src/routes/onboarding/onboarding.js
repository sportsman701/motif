import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Image from 'react-native-fit-image'
import { useHistory } from 'react-router-native';
import Slider from 'react-native-app-intro-slider';
import Text from 'components/Text'
import Button from 'components/Button'
import CommonStyles, { Size, CustomStyles } from 'styles';
import ForwardIcon from 'icons/forward'
import img1 from 'images/onboarding/onboarding1.png'
import img2 from 'images/onboarding/onboarding2.png'
import img3 from 'images/onboarding/onboarding3.png'

const slides = [
  {
    image: img1,
    title: 'Introducing Motif',
    desc: 'A social network that will help you transform yourself while having tons of fun'
  },
  {
    image: img2,
    title: 'Influence with Actions',
    desc: 'Follow influencer-created challenges or create one yourself and influence others'
  },
  {
    image: img3,
    title: 'Become a Better You',
    desc: 'Become a better version of yourself here on Motif, starting today!'
  }
]

export default () => {
  const [slide, setSlide] = useState(0)
  const slider = useRef(null)
  const history = useHistory()

  const handlePrevPress = () => {
    if (slider.current && slide > 0) {
      slider.current.goToSlide(slide - 1, true)
    }
  }
  
  const handleNextPress = () => {
    if (slider.current) {
      if (slide === 2) {
        history.push('/explore-challenges')
      } else {
        slider.current.goToSlide(slide + 1, true)
      }
    }
  }

  const renderItem = ({ item: { image, title, desc }, dimensions }) => (
    <View style={{ height: dimensions.height }}>
      <Image
        source={image}
        resizeMode='contain'
        style={styles.image}
      />
      <Text style={styles.title} center>
        {title}
      </Text>
      <Text style={styles.desc} center>
        {desc}
      </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Slider
        data={slides}
        renderItem={renderItem}
        showNextButton={false}
        showDoneButton={false}
        dotClickEnabled={false}
        onSlideChange={setSlide}
        keyExtractor={(item, index) => index.toString()}
        ref={slider}
      />
      <View style={styles.buttonBar}>
        <Button style={styles.backButton} onPress={handlePrevPress}>
          <ForwardIcon style={styles.prevButtonIcon} />
        </Button>
        <Button
          style={styles.nextButton}
          onPress={handleNextPress}
          block
        >
          <Text style={CommonStyles.white}>
            {slide === 2 ? 'Done' : 'Next'}
          </Text>
          <ForwardIcon style={styles.nextButtonIcon} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Size(),
    paddingRight: Size(),
    paddingTop: Size(2),
    paddingBottom: Size(),
    ...CustomStyles.fullScreen,
    ...CustomStyles.bgSecondary
  },
  swiperDot: {
    backgroundColor:'#fff5',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 7
  },
  swiperActiveDot: {
    backgroundColor:'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 7
  },
  image: {
    flex: 1,
    margin: Size(2)
  },
  title: {
    marginBottom: Size(0.5),
    color: 'white',
    ...CustomStyles.textSubSection
  },
  desc: {
    color: 'white',
    marginBottom: 80,
  },
  buttonBar: {
    flexDirection: 'row'
  },
  backButton: {
    padding: Size(0.8),
    marginRight: Size(0.5),
    borderRadius: Size(0.5),
    backgroundColor: '#fff5'
  },
  nextButton: {
    padding: Size(0.8),
    borderRadius: Size(0.5),
  },
  prevButtonIcon: {
    transform: [{ rotate: '180deg' }]
  },
  nextButtonIcon: {
    marginLeft: Size(0.5)
  }
});
