import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Dimensions, Text, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

const API_KEY = "2696b12d27412130352af8dfb78626b7"; //APIKEY는 app에 있으면 안됨.

const icons = {
  Clear:"day-sunny",
  Clouds:"day-cloudy",
  Rain:"rain",
  Snow:"snows",
  Drizzle:"day-rain",
  Thunderstorm:"lightning",
  Atmosphere: "cloudy-gusts"
}

const {width: I_width} = Dimensions.get('window');
console.log(I_width);
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){ //유저가 허락하지 않으면
      setOk(false);
    }
    const {coords: {latitude, longitude}}= await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync( //위도와 경도를 이용해서 주소를 알아냄
      {latitude, longitude},
      {useGoogleMaps: false});
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.8/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    // 오류 날 때 2.8 -> 2.5
    const json = await response.json();
    setDays(json.daily);
  }
  useEffect(() => { //useEffect 함수는 컴포넌트가 렌더링 될 때마다 특정 작업을 실행하는 Hook
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
      pagingEnabled  
      horizontal
      // indicatorStyle='white'
      showsHorizontalScrollIndicator={false}
      contentcontainerstyle={styles.weather}>
        {days.length === 0 ? <View style={styles.day}>
          <ActivityIndicator 
          color="white" 
          size="large"
          style={{marginTop: 10}}/></View>
        : days.map((day, index) =>
        <View key={index} style={styles.day}>
          <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between", width:"100%"}}> 
          <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
          <Fontisto name={icons[day.weather[0].main]} size={80} color="black" />
          
          </View>
          <Text style={styles.description}>{day.weather[0].main}</Text>
          <Text style={styles.tinyText}>{day.weather[0].description} </Text>
        </View>)}
          
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:"pink"
  },
  text: {
    fontSize: 28,
    color: "blue"
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500"
  },
  weather: {

    
  },
  day: {
    width: I_width,
    alignItems:"center",
  },
  temp: {
    marginTop: 50,
    fontSize: "165",
  },
  description: {
    fontSize: "40"
  },
  tinyText: {
    fontSize: '20'
  }
});
