import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AuthorScreen() {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.titleWrapper, alignSelf: 'center' }}>
        <Text style={styles.title}>About author</Text>
        <Text style={styles.smile}>☺</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
        style={styles.image}
        source={require('../assets/images/iam.jpg')}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>Github:</Text>
        <TouchableHighlight><Text style={styles.link}>https://github.com/artyom-causelove</Text></TouchableHighlight>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>VK:</Text>
        <TouchableHighlight><Text style={styles.link}>https://vk.com/cause1ove</Text></TouchableHighlight>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>GitLab:</Text>
        <TouchableHighlight><Text style={styles.link}>https://gitlab.com/a.kozlov5</Text></TouchableHighlight>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>Instagram:</Text>
        <TouchableHighlight><Text style={styles.link}>https://www.instagram.com/eshenespyatil/</Text></TouchableHighlight>
      </View>
      <Text style={styles.group}>603a2</Text>
      <Text style={styles.name}>Artyom Kozlov</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
    paddingHorizontal: 10,
    position: 'relative'
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 7
  },
  separator: {
    marginVertical: 15,
    height: 1
  },
  smile: {
    alignSelf: 'center',
    fontSize: 16
  },
  image: {
    height: 300,
    width: 200,
    borderColor: '#eee',
    borderWidth: 4,
    borderRadius: 8
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    textDecorationLine: 'underline',
    color: '#303f9f',
    marginLeft: 7
  },
  group: {
    marginLeft: 'auto',
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 170
  },
  name: {
    position: 'absolute',
    top: 160,
    right: 50,
    fontSize: 36,
    fontWeight: 'bold',
    textShadowRadius: 0,
    transform: [{
      rotateZ: '15deg'
    }]
  }
});
