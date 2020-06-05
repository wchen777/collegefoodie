import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import ResultsShowScreen from '../screens/ResultsShowScreen';
import { withNavigation } from 'react-navigation';


// view location and other properties, go to website, etc


const ResultsList = ({title, results, navigation}) => {
    return ( results.length > 0 ? 
         <View style ={{borderTopColor: '#BBBBBB', borderTopWidth: 1, marginTop: 10}}>
            <Text style = {styles.titleStyle}> {title} </Text>
            <FlatList
                horizontal
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {( {item} ) => {
                    return <TouchableOpacity 
                    onPress = {() => navigation.navigate('ResultsShow', {
                        id: item.id
                        })}> 
                        <ResultsDetail result = {item}/> 
                    </TouchableOpacity>;
                }}
                />
        </View> 
        : null 
    );
};
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 2,
        marginTop: 8,
        fontFamily: 'Trebuchet MS'
    }
});

export default withNavigation(ResultsList);