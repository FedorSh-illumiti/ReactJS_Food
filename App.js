import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from './src/components/ResultsShowSreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business search",
    },
  }
);

export default createAppContainer(navigator);
