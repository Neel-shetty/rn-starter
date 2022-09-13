import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const name = "neel narayan shetty";
const ComponentsScreen = () => {
    //const name = "neel";
   return( 
        <View>
            <Text> test </Text>
            <Text style={styles.textStyle}>This isxfgfndffgnfgfg the Comp Screen</Text>
            <Text style={styles.textStyle2}>my name is {name}</Text>
        
    
            {/*<Text> test </Text>*/}
        </View>
   );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen; 
