import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';
import { Onboarding, ExploreChallenges } from './onboarding'
import { Size } from 'styles'

export default () => (
  <NativeRouter>
    <SafeAreaView style={styles.container}>
      {/* <Redirect to='/explore-challenges' /> */}
      <Redirect to='/onboarding' />
      <Route exact path='/onboarding' component={Onboarding} />
      <Route exact path='/explore-challenges' component={ExploreChallenges} />
    </SafeAreaView>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Size(),
    paddingRight: Size(),
    paddingTop: Size(2),
    paddingBottom: Size()
  }
});
