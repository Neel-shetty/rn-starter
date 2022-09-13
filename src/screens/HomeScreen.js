import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>newfox damn</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Components demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="List demo"
      />
      <Button
        onPress={() => navigation.navigate('Screen')}
        title="Image screen"
      />
      <Button
        onPress={() => navigation.navigate('Count')}
        title="Counter Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;


