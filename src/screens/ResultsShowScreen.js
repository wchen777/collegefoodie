import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Linking} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const[result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    
    
    return !result ? null : (
        <View style = {{flex: 1, marginHorizontal: 12}}>
            <Text style = {styles.titleStyle}>Address: </Text>
            <Text style = {styles.textStyle}>{result.location.display_address.join(', ')} </Text>
            <Text style = {{...styles.textStyle, color: 'blue', fontStyle: 'italic'}} 
                  onPress={() => Linking.openURL(`http://maps.google.com/?q=${result.location.display_address.join(', ')}`)}>Open in Google Maps </Text>
            {(result.hours.is_open_now) 
                ? <Text style = {styles.textStyle}>{result.name} is currently open! </Text>
                : <Text style = {styles.textStyle}>{result.name} is currently closed. </Text>}

            <Text style = {styles.titleStyle}>Website: </Text>
            <Text style = {{...styles.textStyle, color: 'blue', fontStyle: 'italic'}} onPress={() => Linking.openURL(result.url)}>Go to website! </Text>
            <Text style = {styles.titleStyle}>Photos of {result.name}: </Text>
            <FlatList 
                horizontal
                data = {result.photos}
                keyExtractor = {(photo) => photo}
                renderItem= {({item}) => {
                    return <Image style= {styles.imageStyle} source = {{uri: item}}/>
                }}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginVertical: 10,
        marginRight: 20
    },
    titleStyle: {
        fontSize: 27,
        fontWeight: 'bold',
        marginVertical: 8,
        fontFamily: 'Trebuchet MS'
    },
    textStyle: {
        fontSize: 18,
        marginBottom: 8, 
        fontFamily: 'Trebuchet MS'
    }
});
export default ResultsShowScreen;