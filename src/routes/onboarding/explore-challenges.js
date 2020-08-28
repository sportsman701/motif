import React, { useState } from 'react'
import { Platform, StyleSheet, View, ScrollView } from 'react-native';
import Text from 'components/Text'
import Button from 'components/Button'
import Link from 'components/Link'
import Image from 'react-native-fit-image';
import xor from 'lodash/xor'
import { flexOne, secondary, scrollPadding, Size, Colors } from 'styles';

import img1 from 'images/explore-challenges/gsp.jpg'
import img2 from 'images/explore-challenges/aaron-paul.jpg'
import img3 from 'images/explore-challenges/steph-curry.jpg'
import img4 from 'images/explore-challenges/chyna-cho.jpg'
import img5 from 'images/explore-challenges/jordan-peele.jpg'
import img6 from 'images/explore-challenges/gina-sowell.jpg'
import img7 from 'images/explore-challenges/mark-white.jpg'
import img8 from 'images/explore-challenges/emily-skye.jpg'
import img9 from 'images/explore-challenges/dave-nester.jpg'

const data = [
  ['GSP', 'MMA', img1],
  ['Chyna Cho', 'Crossfit', img2],
  ['Mark White', 'Wellness', img3],
  ['Aaron Paul', 'Acting', img4],
  ['Jordan Peele', 'Filming', img5],
  ['Emily Skye', 'Fitness', img6],
  ['Steph Curry', 'Basketball', img7],
  ['Gina Sowell', 'Culinary', img8],
  ['Dave Nester', 'Gambling', img9],
]

const challenges = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

export default () => {
  const [active, setActive] = useState([])

  const handleChallengeTouch = index => () =>
    setActive(xor(active, [index]))

  const handleSelectPress = () => {}

  return (
    <View style={flexOne}>
      <View>
        <Text format='section' align='center'>
          Explore Challenges
        </Text>
        <Link to='/onboarding' style={styles.skip}>
          <Text style={secondary} strong>
            Skip
          </Text>
        </Link>
      </View>
      
      <ScrollView style={[styles.challengeScroll, scrollPadding]}>
        <View style={styles.challengeView}>
          {challenges.map((column, key) => (
            <View key={key} style={[styles.widthOneThird, (key % 2 === 1) && styles.staggered]}>
              {column.map((index, key) => (
                <Button
                  key={index}
                  variant='nobg'
                  onPress={handleChallengeTouch(index)}
                  style={[styles.challengeTile, (key === column.length - 1) && styles.noMargin]}
                >
                  <View style={[styles.square, active.includes(index) && styles.selected]}>
                    <Image
                      source={data[index][2]}
                      resizeMode='cover'
                      indicator={false}
                      style={styles.image}
                    />
                  </View>
                  <Text format='subsection'>
                    {data[index][0]}
                  </Text>
                  <Text style={secondary}>
                    {data[index][1]}
                  </Text>
                </Button>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      <Button
        title='Select'
        onPress={handleSelectPress}
        style={styles.selectButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  skip:{
    position: 'absolute',
    right: 0
  },
  challengeScroll: {
    marginTop: Size(),
    marginBottom: Size()
  },
  challengeView: {
    flex: 1,
    flexDirection: 'row'
  },
  challengeTile: {
    flexDirection: 'column',
    marginBottom: Size(2),
    padding: 0
  },
  noMargin: {
    marginBottom: 0
  },
  selected: {
    borderColor: Colors.secondary,
  },
  square: {
    width: '100%',
    borderRadius: 1000,
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 2,
    padding: 3,

    ...Platform.select({
      ios: {
        aspectRatio: 1
      },
      android: {
        aspectRatio: 1
      },
      default: {
        height: 100
      }
    })
  },
  image: {
    borderRadius: 1000,
    overflow: 'hidden',
  },
  widthOneThird: {
    width: '33.33%'
  },
  staggered: {
    marginTop: Size(4)
  },
  selectButton: {
    marginLeft: Size(2),
    marginRight: Size(2)
  }
})
