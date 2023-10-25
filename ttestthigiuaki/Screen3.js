import { View, Text, Image, SafeAreaView ,Pressable} from 'react-native'
import React from 'react'


const Screen3 = ({ route, navigation }) => {
  const { data } = route.params || { data: 'No data' };

  return (
    <SafeAreaView style={{marginHorizontal:20,marginHorizontal:20,height:'50%',width:'100%'}}>
        <View style={{height:'60%',width:'90%',justifyContent:'center',alignItems:'center',marginVertical:30}}>
            <Image source={data.img} style={{ width: 300, height: 300 ,resizeMode:'contain'}} />
        </View>
        <Text style={{fontSize:35,fontWeight:400,marginTop:30}}>{data.name}</Text>
        <Text style={{fontSize:25,fontWeight:400,marginTop:30,color:'rgba(0, 0, 0, 0.59)'}}>Price: ${data.price}</Text>
        <Text style={{fontSize:25,fontWeight:700,marginTop:30}}>Description</Text>
        <Text style={{fontSize:22,fontWeight:400,marginTop:20,color:'rgba(0, 0, 0, 0.59)',width:'90%'}}>{data.content}</Text>
        <View style={{width:'90%',height:50,marginVertical:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:40}}>
          <Image source={require('./img/heart.png')}></Image>
          <View style={{width:'50%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(233, 65, 65, 1)',borderRadius:50}}>  
            <Pressable>
              <Text style={{fontSize:23,color:'white'}}>Add to cart</Text>
            </Pressable>
          </View>
        </View>
        <Pressable 
          style={{width:160,height:60,backgroundColor:'violet',justifyContent:'center',alignItems:'center',borderRadius:100,marginLeft:'30%'}}
          onPress={() => navigation.navigate('Screen1')}  
        >
          <Text style={{fontSize:23,color:'rgba(0, 0, 0, 0.59)'}}>Back to home</Text>
        </Pressable>
    </SafeAreaView>
  );
}

export default Screen3;
