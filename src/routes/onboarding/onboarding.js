import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Slider from 'react-native-app-intro-slider';
import Text from 'components/Text'
import CommonStyles, { Size, CustomStyles, Colors } from 'styles';
import ForwardIcon from 'icons/forward'
import img1 from 'images/onboarding1.png'
import img2 from 'images/onboarding2.png'
import img3 from 'images/onboarding3.png'

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

export default function () {
  const [slide, setSlide] = useState(0)
  const slider = useRef(null)

  const handlePrevPress = () => {
    if (slider.current && slide > 0) {
      slider.current.goToSlide(slide - 1, true)
    }
  }
  
  const handleNextPress = () => {
    if (slider.current) {
      if (slide === 2) {
        // done
      } else {
        slider.current.goToSlide(slide + 1, true)
      }
    }
  }

  const renderItem = ({ item: { image, title, desc }, dimensions }) => (
    <View style={{ height: dimensions.height }}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.desc}>
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
        ref={slider}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonBar}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={handlePrevPress}
        >
          <View style={styles.buttonView}>
            <ForwardIcon style={styles.prevButtonIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          activeOpacity={0.7}
          onPress={handleNextPress}
        >
          <View style={styles.buttonView}>
            <Text style={[CommonStyles.white]}>
              {slide === 2 ? 'Done' : 'Next'}
            </Text>
            <ForwardIcon style={styles.nextButtonIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Size(),
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
    resizeMode: 'contain',
    margin: Size(2)
  },
  title: {
    marginBottom: Size(0.5),
    color: 'white',
    textAlign: 'center',
    ...CustomStyles.textSubSection
  },
  desc: {
    color: 'white',
    marginBottom: 80,
    textAlign: 'center'
  },
  buttonBar: {
    flexDirection: 'row'
  },
  backButton: {
    alignItems: 'center',
    padding: Size(0.5),
    borderRadius: Size(0.5),
    backgroundColor: '#fff5',
    marginRight: Size(0.5),
  },
  nextButton: {
    alignItems: 'center',
    padding: Size(0.5),
    backgroundColor: Colors.primary,
    borderRadius: Size(0.5),
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  prevButtonIcon: {
    transform: [{ rotate: '180deg' }]
  },
  nextButtonIcon: {
    marginLeft: Size(0.5)
  }
});
