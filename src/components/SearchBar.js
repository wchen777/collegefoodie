import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const SearchBar = ({ barText, term, onTermChange, onTermSubmit }) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Octicons name = "search" style = {styles.iconStyle}/> 
            <TextInput
                placeholder = {barText}
                style = {styles.inputStyle}
                value = {term}
                onChangeText = {onTermChange}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onEndEditing = {onTermSubmit}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#E0E0E0',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 15
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        marginTop: 5
    }
});

export default SearchBar;