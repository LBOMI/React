import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, Text, View } from 'react-native';

const API_KEY = "2696b12d27412130352af8dfb78626b7"; //APIKEY는 app에 있으면 안됨.

const {width: I_width} = Dimensions.get('window');
console.log(I_width);
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {coords: {latitude, longitude}}= await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogleMaps: false});
    setCity(location[0].city);
    const response = await fetch(`https://openweathermap.org/current/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`)
    const json = await response.json();
    console.log(json)
  }
  useEffect(() => {
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
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
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
  }
});
