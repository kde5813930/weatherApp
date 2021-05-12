import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from "axios";


const API_KEY = "ff4ddcc1394e505c96bfba494912d507";


export default class extends React.Component {
  state = {
    isLoading: true
  }
  
  getWeather = async(lat, long) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
      console.log(data);
      this.setState({isLoading:false, condition:data.weather[0].main, temp:data.main.temp})
  }

  getLocation = async() => {
    try{
      const response = await Location.requestForegroundPermissionsAsync(); //사용자에게 위치허용 여부를 체크하는 api
      const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync(); 
      // 현재위치의 온도등을 가져오는 api , api로 전송해서 날씨를 가져온다.
      this.getWeather(latitude, longitude);
    }catch (error){
      Alert.alert("Can't find you." , "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return(
     isLoading? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}></Weather>
    );
  }
}


