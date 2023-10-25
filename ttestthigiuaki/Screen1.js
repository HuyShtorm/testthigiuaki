import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.viewContent}>
        <Text style={{ fontSize: 26, fontWeight: '400', textAlign: 'center' }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={{ resizeMode: 'contain', width: '70%', height: '70%' }}
          source={require('./img/1.png')}
        />
      </View>
      <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 26, fontWeight: '700', textAlign: 'center' }}>
          POWER BIKE SHOP
        </Text>
      </View>
      <View style={{ width: '100%', height: 60, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable
          style={{ backgroundColor: 'red', width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}
          onPress={() => navigation.navigate('Screen2')}
        >
          <Text style={{ fontSize: 26, fontWeight: '700', textAlign: 'center', color: 'white' }}>
            GET STARTED
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  viewContent: {
    height: 100,
    width: '100%',
    marginTop: '10%',
    paddingHorizontal: '10%',
  },
  Image: {
    height: '50%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    marginHorizontal: '5%',
    borderRadius: 30,
  },
});
