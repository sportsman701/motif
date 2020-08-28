import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';
import { Onboarding, ExploreChallenges } from './onboarding'
import { Home } from './home'
import { flexOne, basicPadding } from 'styles'

export default () => (
  <NativeRouter>
    <SafeAreaView style={[flexOne, basicPadding]}>
      <Redirect to='/home' />
      <Route exact path='/onboarding' component={Onboarding} />
      <Route exact path='/explore-challenges' component={ExploreChallenges} />
      <Route exact path='/home' component={Home} />
    </SafeAreaView>
  </NativeRouter>
)

