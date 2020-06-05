import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    
    return (
        <View style = {styles.container}>
            <Image source = {{uri: result.image_url}} style = {styles.imageStyle}/>
            <Text style = {styles.nameStyle}>{result.name} </Text>
            <Text style = {styles.detailsStyle}>{result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#E8E8E8',
        borderRadius: 4,
        marginBottom: 15
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        margin: 4
    },
    detailsStyle: {
        marginLeft: 4,
        marginBottom: 4,
        marginRight: 4
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 4
    }
});

export default ResultsDetail;