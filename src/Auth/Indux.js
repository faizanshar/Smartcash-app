import 'react-native-gesture-handler'

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Auth Splash
import Splash from './Splash';

// Auth Login
import Login from './Login';

// Staff
import Screenstaff from '../Staff/Screenstaff';
import Drawerstaff from '../Staff/Drawerstaff';

// Staff-Profilestaff-Profilestaff
import Profilestaff from '../Staff/profilestaff/Profilestaff' 

// Staff-Kategoristaff-Kategoristaff
import Kategoristaff from '../Staff/Kategoristaff/Kategoristaff'

// Staff-Pengaturanstaff-Pengaturanstaff
import Perusahaanstaff from '../Staff/Perusahaanstaff/Perusahaanstaff'

// Staff-Perusahaanstaff
import Tambahperusahaan from '../Staff/Perusahaanstaff/Tambahperusahaan'

// Staff-Passwordstaff
import Passwordstaff from '../Staff/Passwordstaff/Passwordstaff'

// Staff-Tambahbarang
import Tambahbarang from '../Staff/Tambahbarang/Tambahbarang'

// Staff-Gudangstaff
import Gudangstaff from '../Staff/Gudangstaff/Gudangstaff'
import Ubahdatastaff from '../Staff/Gudangstaff/Ubahdatastaff'

// Kasir
import Screenkasir from '../Kasir/Screenkasir'
import Drawerkasir from '../Kasir/Drawerkasir'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Drawer1 = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawerstaff {...props}/>}> 
      <Drawer.Screen name={'Screenstaff'} component={Screenstaff} />
    </Drawer.Navigator>
  );
};

const Drawer2 = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawerkasir {...props}/>}> 
      <Drawer.Screen name={'Screenkasir'} component={Screenkasir} />
    </Drawer.Navigator>
  );
};

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer1" component={Drawer1 } />
        <Stack.Screen name="Drawer2" component={Drawer2 } />
        
        <Stack.Screen name="Profilestaff" component={Profilestaff} />
        <Stack.Screen name="Kategoristaff" component={Kategoristaff} />
        <Stack.Screen name="Perusahaanstaff" component={Perusahaanstaff}/>
        <Stack.Screen name="Tambahperusahaan" component={Tambahperusahaan}/>
        <Stack.Screen name="Passwordstaff" component={Passwordstaff}/>
        <Stack.Screen name="Tambahbarang" component={Tambahbarang}/>
        <Stack.Screen name="Gudangstaff" component={Gudangstaff}/>
        <Stack.Screen name="Ubahdatastaff" component={Ubahdatastaff}/>




        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Indux;
