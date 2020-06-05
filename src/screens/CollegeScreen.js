import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import College from '../components/College';
import { withNavigation } from 'react-navigation';


const CollegeScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const collegeList = [
        {name: 'Brown University', id: 'brown'},
        {name: 'Harvard University', id: 'harvard'},
        {name: 'Columbia University', id: 'columbia'},
        {name: 'Princeton University', id: 'princeton'},
        {name: 'University of Pennsylvania', id: 'upenn'},
        {name: 'Cornell University', id: 'cornell'},
        {name: 'Yale University', id: 'yale'},
        {name: 'Dartmouth College', id: 'dartmouth'}
    ]
    const [list, setList] = useState(collegeList);

    const filterList = newTerm => {
        setTerm(newTerm);
        newTerm.length === 0 
        ? setList(collegeList) 
        : setList(collegeList.filter(college => college.name.toLowerCase().indexOf(term.toLowerCase()) > -1));
    }
    return (
        <View style = {{flex: 1}}>
            <SearchBar 
                term = {term} 
                onTermChange = {filterList} 
                onTermSubmit = {() => console.log('')}
                barText = "Search Colleges"
                />
            <FlatList
                data = {list}
                keyExtractor = {(item) => item.id}
                renderItem = {( {item} ) => {
                    return <TouchableOpacity 
                    onPress = {() => navigation.navigate('Search', {
                        name: item.name,
                        id: item.id
                        })}>
                    <College name = {item.name} id = {item.id}/>
                    </TouchableOpacity>;
                }}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8
    },
    textStyle: {
        fontSize: 18,
        marginBottom: 8, 
    }
});

export default withNavigation(CollegeScreen);