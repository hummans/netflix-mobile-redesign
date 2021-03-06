import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header goBack={this.props.navigation.goBack} shouldGoBack={true} notSearch={true}/>
        <View style={styles.historyContainer}>
          <LinearGradient
            colors={["#ad1616", "#c11616", "#ad1616"]}
            style={styles.linear}
          >
            <Text style={styles.history}> History </Text>
            <TouchableOpacity>
              <Text style={styles.edit}> Edit </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.body}>
          <View style={styles.left}>
            <View style={styles.circle} backgroundColor='#c11616' />
            <View style={styles.line} backgroundColor='rgb(117,117,117)' />
            <View style={styles.circle} backgroundColor='#c11616' />
            <View style={styles.line} backgroundColor='rgb(117,117,117)' />
            <View style={styles.circle} backgroundColor='rgb(117,117,117)' />
            <View style={styles.line} backgroundColor='rgb(117,117,117)' />
            <View style={styles.circle} backgroundColor='rgb(117,117,117)' />
          </View>
          <View style={styles.right}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
              <View style={styles.movieContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.content}>Episode 5 | 52 mins</Text>
                  <Text style={styles.title}>How i met your mother</Text>
                </View>
                <Image style={styles.img} source={require('../assets/images/his0.jpg')} />
                <AntDesign size={20} color='rgb(117,117,117)' name='right' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
              <View style={styles.movieContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.content}>Episode 12 | 47 mins</Text>
                  <Text style={styles.title}>Friends</Text>
                </View>
                <Image style={styles.img} source={require('../assets/images/his1.jpg')} />
                <AntDesign size={20} color='rgb(117,117,117)' name='right' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
              <View style={styles.movieContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.content}>108 mins</Text>
                  <Text style={styles.title}>Spiderman</Text>
                </View>
                <Image style={styles.img} source={require('../assets/images/spiderman.jpg')} />
                <AntDesign size={20} color='rgb(117,117,117)' name='right' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Movie')}>
              <View style={styles.movieContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.content}>124 mins</Text>
                  <Text style={styles.title}>Avengers: Endgame</Text>
                </View>
                <Image style={styles.img} source={require('../assets/images/endgame.jpg')} />
                <AntDesign size={20} color='rgb(117,117,117)' name='right' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#181818',
  },
  body: {
    width: winWidth,
    height: '80%',
    paddingTop: '4%',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  footer: {
    height: winHeight/10,
    width: winWidth,
  },
  historyContainer: {
    marginTop: 20,
    width: winWidth,
    height: '20%',
    alignItems: 'center',
    backgroundColor: '#BD1818',
  },
  linear: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  history: {
    fontSize: 33,
    fontWeight: '400',
    color: '#fff',
    letterSpacing: 3.5,
  },
  edit: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: '300',
    color: '#fff',
    letterSpacing: 1.5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  left: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  line: {
    height: 80,
    width: 3,
  },
  right: {
    width: '100%',
    height: '100%',
  },
  movieContainer: {
    width: winWidth-50,
    height: 105,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: winWidth - 200,
  },
  img: {
    width: winWidth/4.5,
    height: winWidth/4.5/100*65,
    resizeMode: 'cover',
    marginLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgb(141,141,141)',
    letterSpacing: 0.3,
  },
  content: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(117,117,117)',
    letterSpacing: 1,
  }
})
