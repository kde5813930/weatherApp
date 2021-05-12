import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Clear: {
    iconName:"white-balance-sunny",
    gradient:["#1FA2FF", "#12D8FA", "#A6FFCB"],
    title:"sunny day ☀",
    subtitle:"The weather is clear today."
  },
  Thunderstorm: {
    iconName:"weather-lightning",
    gradient:["#373b44","#4286f4"],
    title:"Thunderstorm 🌩",
    subtitle:"There could be thunderstorms, so be careful."
  },
  Drizzle: {
    iconName:"weather-pouring",
    gradient:["bdc3c7","#2c3e50"],
    title:"Drizzle 🌂",
    subtitle:"It's drizzling today."
  },
  Rain: {
    iconName:"weather-pouring",
    gradient:["bdc3c7","#2c3e50"],
    title:"Rainy day 🌧",
    subtitle:"The weather is rainy today."
  },
  Atmosphere: {
    iconName:"weather-windy",
    gradient:["#2980b9", "#6dd5fa", "#ffffff"],
    title:"Windy 🌀 ",
    subtitle:"just don't go outside"
  },
  Snow: {
    iconName:"weather-snowy-heavy",
    gradient:["#acb6e5", "#86fde8"],
    title:"snow ❄",
    subtitle:"The weather snowing today."
  },
  Clouds: {
    iconName:"weather-cloudy",
    gradient:["#00416A", "#E4E5E6"],
    title:"Cloudy ☁",
    subtitle:"It's cloudy today."
  }
}

export default function Weather({temp, condition}){
  return(
    <LinearGradient 
    colors={weatherOptions[condition].gradient}
    style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"]).isRequired
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize:46,
    color:"white"
  },
  halfContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color:"white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color:"white",
    fontWeight:"600",
    fontSize: 24,
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems:"flex-start"
  }
})