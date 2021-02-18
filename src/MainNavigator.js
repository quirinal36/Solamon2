import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainSelectScreen from './screens/MainSelectScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/Signing/SignInScreen';
import SignUpScreen from './screens/Signing/SignUpScreen';
import SelectUserTypeScreen from './screens/SelectUserTypeScreen';
import CompanyInfoScreen from './screens/CompanyInfoScreen';
import UserPanelListScreen from './screens/UserPanelListScreen';
import ManagementWaitingScreen from './screens/ManagementWaitingScreen';
import ManagementDoneScreen from './screens/ManagementDoneScreen';
import ManagementScreen from './screens/ManagementScreen';
import PanelDetailScreen from './screens/PanelDetailScreen';
import ConsultAddScreen from './screens/Consult/ConsultAddScreen';
import ConsultListScreen from './screens/Consult/ConsultListScreen';
import ConsultDetailScreen from './screens/Consult/ConsultDetailScreen';
import ConsultAnswerScreen from './screens/Consult/ConsultAnswerScreen';
import SellerResisterScreen from './screens/Mypage/SellerResisterScreen';
import SellerPanelListScreen from './screens/Mypage/SellerPanelListScreen';
import SellerPanelDetailScreen from './screens/Mypage/SellerPanelDetailScreen';
import SellerInfoScreen from './screens/Mypage/SellerInfoScreen';
import SellerModifyScreen from './screens/Mypage/SellerModifyScreen';
import SellerScreen from './screens/Mypage/SellerScreen';
import BuyerScreen from './screens/Mypage/BuyerScreen';
import SettingScreen from './screens/SettingScreen';
import CertScreen from './screens/CertScreen';
import NativeBaseDrawer from './screens/NativeBaseDrawer';
import PhotoScreen from './screens/PhotoScreen';
import TermOfServiceScreen from './screens/TermOfServiceScreen';

const MainNavigator = createStackNavigator({
    //앱 시작시 인증
    //AuthLoading : {screen:AuthLoadingScreen},
    MainSelectScreen:{screen:MainSelectScreen},
    HomeScreen:{screen:HomeScreen},

    SignInScreen:{screen:SignInScreen},
    SignUpScreen:{screen:SignUpScreen},

    SelectUserTypeScreen:{screen:SelectUserTypeScreen},
    CompanyInfoScreen:{screen:CompanyInfoScreen},

    UserPanelListScreen:{screen:UserPanelListScreen},

    ManagementWaitingScreen:{screen:ManagementWaitingScreen},
    ManagementDoneScreen:{screen:ManagementDoneScreen},
    ManagementScreen:{screen:ManagementScreen},

    PanelDetailScreen:{screen:PanelDetailScreen},

    ConsultAddScreen:{screen:ConsultAddScreen},
    ConsultListScreen:{screen:ConsultListScreen},
    ConsultDetailScreen:{screen:ConsultDetailScreen},
    ConsultAnswerScreen:{screen:ConsultAnswerScreen},

    SellerResisterScreen:{screen:SellerResisterScreen},
    SellerPanelListScreen:{screen:SellerPanelListScreen},
    SellerInfoScreen:{screen:SellerInfoScreen},
    SellerPanelDetailScreen:{screen:SellerPanelDetailScreen},
    SellerModifyScreen:{screen:SellerModifyScreen},
    SellerScreen:{screen:SellerScreen},

    BuyerScreen:{screen:BuyerScreen},

    SettingScreen:{screen:SettingScreen},

    CertScreen:{screen:CertScreen},

    NativeBaseDrawer:{screen:NativeBaseDrawer},

    PhotoScreen:{screen:PhotoScreen},

    TermOfServiceScreen:{screen:TermOfServiceScreen},
    
},{
    initialRouteName : 'MainSelectScreen',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;