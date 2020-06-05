import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Images from '../../assets/Images';

const College = ({name, id}) => {
    const imgSource = () => {
        switch(id) {
            case 'harvard':
                return Images.harvard;
            case 'brown':
                return Images.brown;
            case 'yale':
                return Images.yale;
            case 'princeton':
                return Images.princeton;
            case 'cornell':
                return Images.cornell;
            case 'dartmouth': 
                return Images.dartmouth;
            case 'upenn':
                return Images.upenn;
            case 'columbia':
                return Images.columbia;
            default:
                return;
        }
    };
    return (
        <View style = {styles.container}>
            <Image source = {imgSource()} style = {styles.imageStyle}/>
            <Text style = {styles.nameStyle}>{name} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 6,
        backgroundColor: '#E8E8E8',
        borderRadius: 4,
        borderColor: '#BBBBBB',
        borderWidth: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 60
    },
    nameStyle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 22,
        margin: 6,
        marginTop: 14,
        fontFamily: 'Trebuchet MS'
    },

    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 4,
        margin: 4
    }
});

export default College;