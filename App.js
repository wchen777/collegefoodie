import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import CollegeScreen from './src/screens/CollegeScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  CollegeSelect: CollegeScreen
}, 
{
  initialRouteName: 'CollegeSelect',
  defaultNavigationOptions: {
    title: 'CollegeFoodie'
  }
});

export default createAppContainer(navigator);