/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  WebView,
  TextInput
} from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput editable = {true}
                  maxlength = {5}
                  {...this.props} />
    )
  }
}

export default class ScrollViewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : 'write a sentence say hello',
      changBg : true
    }
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false} >
        <View>
          <TextInput value={this.state.text}
                    onChangeText = {(text) => this.setState({text})} 
                    {...this.props}/>
          <TouchableOpacity>
            <Text>{this.state.text}</Text>
          </TouchableOpacity>
          <Text>{this.state.onBlur}</Text>
        </View>
        <View style={{
                       borderBottomColor: '#000000',
                       borderBottomWidth: 5 }} style={this.state.changBg ? styles.inputBg : styles.inputBgred}>
          <UselessTextInput multiline = {false}
                            numberOfLines = {4}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                            autoFocus={false}
                            selectTextOnFocus={true}
                            secureTextEntry={true}
                            onBlur={() => this.setState({changBg: !this.state.changBg})}
                            onFocus={() => this.setState({changBg: !this.state.changBg})} />
        </View>
        <WebView
            ref="webview"
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
          />
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native! 我进来了 哈哈hhhh
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 20
  },
  webView: {
    backgroundColor: 'lightblue',
    height: 350,
  },
  inputBg: {
    backgroundColor: 'lightgreen'
  },
  inputBgred: {
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('ScrollViewProject', () => ScrollViewProject);
