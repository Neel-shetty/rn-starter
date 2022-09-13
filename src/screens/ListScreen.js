import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: '1'},
        { name: 'friend #2', age: '1'},
        { name: 'friend #3', age: '1'},
        { name: 'friend #4', age: '1'},
        { name: 'friend #5', age: '1'},
        { name: 'friend #6', age: '5'},
        { name: 'friend #7', age: '1'},
        { name: 'friend #8', age: '1'},
        { name: 'friend #9', age: '1'},
    ];
    return (
       <FlatList
            //horizontal={true}
            //showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                        </Text>;
            }} 

        />
         
        //<Text>List Screen test</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20
    }
});

export default ListScreen;