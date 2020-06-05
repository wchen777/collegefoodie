import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {
    const[term, setTerm] = useState('');
    const name = navigation.getParam('name');
    // const id = navigation.getParam('id');
    const[searchAPI, results, error] = useResults(name);
    

    const filterResultsByPrice = (price) => {
        return results.filter(result => { return result.price === price; }).sort((a, b) => (a.rating < b.rating) ? 1 : -1)
    };
    return (
        // instead of view flex 1, can just wrap everything in <> </>
        <View style = {{flex: 1}}> 
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm} 
                onTermSubmit = {() => searchAPI(term)}
                barText = "Search Restaurants"
                />
            {error ? <Text style= {styles.textStyle}>{error}</Text> : null}
            {/* <Text style= {styles.textStyle}>Found {results.length} restaurants: </Text> */}
            <ScrollView>
            <Text 
                style= {styles.header}>Restaurants near {name}: </Text>
            <ResultsList 
                title = 'Cheapskate' 
                results = {filterResultsByPrice('$')}
                />
            <ResultsList
                title = 'A Bit Pricier'
                results = {filterResultsByPrice('$$')}
                />
            <ResultsList
                title = 'Big Spender'
                results = {filterResultsByPrice('$$$')}
                />
            <ResultsList
                title = 'Going Broke?'
                results = {filterResultsByPrice('$$$$')}
            />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 10,
        marginBottom: 10
    },
    header: {
        margin: 10,
        marginBottom: 10,
         fontSize: 18, 
         fontWeight: 'bold', 
         fontStyle: 'italic', 
         alignSelf: 'center', 
         textAlign: 'center',
         fontFamily: 'Trebuchet MS'
    }
});

export default SearchScreen;