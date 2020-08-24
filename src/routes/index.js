import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route, Redirect } from 'react-router-native';
import Onboarding from './onboarding'
import { Size } from 'styles'

export default () => (
  <NativeRouter>
    <View style={styles.container}>
      <Redirect to='/onboarding'/>
      <Route exact path='/onboarding' component={Onboarding} />
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Size(),
    paddingRight: Size()
  }
});
