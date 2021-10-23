import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import Login from '../components/Login'
import MyReddit from '../components/splashScreen'


const SearchStackNavigator = createStackNavigator({
    Login: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
      screen: Login,
      navigationOptions: {
        title: 'Rechercher'
      }
    }
  })

export default createAppContainer(SearchStackNavigator)