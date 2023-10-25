import { View, Text ,Image, FlatList, Pressable} from 'react-native'
import React, {useState} from 'react'
import Screen3 from './Screen3'
const bikeImages = {
  bike1: require('./img/1.png'),
  bike2: require('./img/2.png'),
  bike3: require('./img/3.png'),
  bike4: require('./img/4.png'),
  bike5: require('./img/5.png'),
  bike6: require('./img/6.png'),
};

// Array of bike data
const listBike = [
  {
    id: 1,
    name: 'Bike Mountain',
    price: 1000,
    img: bikeImages.bike1,
    type: 'mountain',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 2,
    name: 'Bike Road',
    price: 2000,
    img: bikeImages.bike2,
    type: 'road',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 3,
    name: 'Bike Mountain',
    price: 3000,
    img: bikeImages.bike3,
    type: 'mountain',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 4,
    name: 'Bike Road',
    price: 4000,
    img: bikeImages.bike4,
    type: 'road',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 5,
    name: 'Bike Mountain',
    price: 5000,
    img: bikeImages.bike5,
    type: 'mountain',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 6,
    name: 'Bike Road',
    price: 6000,
    img: bikeImages.bike6,
    type: 'road',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 7,
    name: 'Bike Road',
    price: 4000,
    img: bikeImages.bike4,
    type: 'road',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 8,
    name: 'Bike Mountain',
    price: 5000,
    img: bikeImages.bike5,
    type: 'mountain',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    id: 9,
    name: 'Bike Road',
    price: 6000,
    img: bikeImages.bike6,
    type: 'road',
    content:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
];


const Screen2 = ({navigation}) => {
  const[filterBike,setFilterBike] = useState(listBike);

  return (
    <View style={{flex:1}}>
      <View style={{width:'100%',height:50,marginLeft:20,marginTop:30}}>
        <Text style={{fontSize:25,color:'red',fontWeight:'700'}}>The world’s Best Bike</Text>
      </View>
      {/* 3 button filter */}
      <View style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Pressable 
          style={{width:100,height:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30}}
          // click sẽ filter ra tất cả xe đạp 
          onPress={() => setFilterBike(listBike)}
        >
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>All</Text>
        </Pressable>
        <Pressable 
          style={{width:100,height:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30}}
          // click sẽ filter ra xe đạp road
          onPress={() => setFilterBike(listBike.filter(item => item.type === 'road'))}
        >
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>Road</Text>
        </Pressable>
        <Pressable 
          style={{width:100,height:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30}}
          // click sẽ filter ra xe đạp mountain
          onPress={() => setFilterBike(listBike.filter(item => item.type === 'mountain'))}  
        >
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>Mountain</Text>
        </Pressable>
      </View>

      {/* list bike */}
      <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        data={filterBike}
        renderItem={({ item }) => (
          <Pressable 
            style={{ width: 200, height: 200, backgroundColor: 'white', marginTop: 20, borderRadius: 20 }}
            onPress={() => navigation.navigate('Screen3',{data:item})}  
          >
            <View style={{ width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ resizeMode: 'contain', width: 160, height: 160 }}
                source={item.img} 
              />
            </View>
            <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>{item.name}</Text>
              <Text style={{ fontSize: 20, color: 'red', fontWeight: '700' }}>${item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Screen2

