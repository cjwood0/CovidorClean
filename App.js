/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  
  SafeAreaView,
  //wraps top level view with flex 1, for iOS >= 11
  
  ScrollView, 
  //generic scrolling container, greedy, use for short lists. can be used to swip between views

  FlatList,
  //lazy rendering list, changing, similarly structued data, use for long lists//pro
  //props
  //key?
  //data = data source. array?

  SectionList,
  //flatlist, but with sections
  //props
  //renderItem = takes an item from data and returns a formmatted component
  View, //base component
  Text, //displays text
  StatusBar, //allows styling status bar? iOS? not a fan
} from 'react-native';

//alows for vertical/horizontal scrolling between views
import ViewPager from '@react-native-community/viewpager';
//props
//orientation - horizonal, vertical
//scrollEnabled - true, false
//transitionStyle = scroll
//bunch of events
import SignIn from './components/SignIn';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView     
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
          </View>
                <View><SignIn /></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
