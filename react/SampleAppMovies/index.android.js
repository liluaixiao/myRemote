/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015'},
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
//       movies: null,
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2,
        }),
        loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }
// 创建期最后一个阶段 它会在组件刚加载完成时候调用一次，以后不会再被调用
  componentDidMount() {
      this.fetchData();
  }

  render() {
  // 渲染一个电影信息
//    if (!this.state.movies) {
//       return this.renderLoadingView();
//    }
//
//    var movie = this.state.movies[0];
//    return this.renderMovie(movie);

    if (!this.state.loaded) {
        return this.renderLoadingView();
    }

    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView}
        />
    )
  }

  renderLoadingView() {
    return (
        <View style={styles.container}>
            <Text>正在加载电影。。。。</Text>
        </View>
    )
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
          <Image
          style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
      </View>
    );
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((response) => {
    // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
       this.setState({
//           movies: response.movies,
            dataSource: this.state.dataSource.cloneWithRows(response.movies),
            loaded: true,
       })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 5,
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  listView: {
    paddingTop: 29,
    backgroundColor: '#f5fcff',
  }
});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);
