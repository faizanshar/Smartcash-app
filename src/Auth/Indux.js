import 'react-native-gesture-handler'

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Auth Splash
import Splash from './Splash';

// Auth Loginas
import Login from './Login';

// Staff
import Screenstaff from '../Staff/Screenstaff';
import Drawerstaff from '../Staff/Drawerstaff';

// Staff-Profilestaff-Profilestaff
import Profilestaff from '../Staff/profilestaff/Profilestaff' 

// Staff-Kategoristaff-Kategoristaff
import Kategoristaff from '../Staff/Kategoristaff/Kategoristaff'

// Staff-Perusahaanstaff
import Perusahaanstaff from '../Staff/Perusahaanstaff/Perusahaanstaff'
import Tambahperusahaan from '../Staff/Perusahaanstaff/Tambahperusahaan'
import Ubahperusahaanstaff from '../Staff/Perusahaanstaff/Ubahperusahaanstaff'

// Staff-Riwayatpembelian
import Riwayatstaff from '../Staff/Riwayatpembelian/Riwayatstaff'
import Detailriwayatstaff from '../Staff/Riwayatpembelian/Detailriwayatstaff'

// Staff-Passwordstaff
import Passwordstaff from '../Staff/Passwordstaff/Passwordstaff'

// Staff-Tambahbarang
import Tambahbarang from '../Staff/Tambahbarang/Tambahbarang'
import Barang from '../Staff/Tambahbarang/Barang'

// Staff-Gudangstaff
import Gudangstaff from '../Staff/Gudangstaff/Gudangstaff'
import Ubahdatastaff from '../Staff/Gudangstaff/Ubahdatastaff'

// Kasir
import Screenkasir from '../Kasir/Screenkasir'
// import Drawerkasir from '../Kasir/Drawerkasir'

// Kasir-Profilekasir
import Profilekasir from '../Kasir/Profilekasir/Profilekasir'
import Fotokasir from '../Kasir/Profilekasir/Fotokasir'

// Kasir-Kasir
import Kasir from '../Kasir/Kasir/Kasir'

// Kasir-Member
import Member from '../Kasir/Member/Member'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Drawer1 = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawerstaff {...props}/>}> 
      <Drawer.Screen name={'Screenstaff'} component={Screenstaff} />
    </Drawer.Navigator>
  );
};

// const Drawer2 = () => {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <Drawerkasir {...props}/>}> 
//       <Drawer.Screen name={'Screenkasir'} component={Screenkasir} />
//     </Drawer.Navigator>
//   );
// };

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer1" component={Drawer1 } />
        <Stack.Screen name="Drawer2" component={Screenkasir} />
        
        <Stack.Screen name="Profilestaff" component={Profilestaff} />
        <Stack.Screen name="Kategoristaff" component={Kategoristaff} />
        <Stack.Screen name="Perusahaanstaff" component={Perusahaanstaff}/>
        <Stack.Screen name="Ubahperusahaanstaff" component={Ubahperusahaanstaff}/>
        <Stack.Screen name="Tambahperusahaan" component={Tambahperusahaan}/>
        <Stack.Screen name="Passwordstaff" component={Passwordstaff}/>
        <Stack.Screen name="Tambahbarang" component={Tambahbarang}/>
        <Stack.Screen name="Gudangstaff" component={Gudangstaff}/>
        <Stack.Screen name="Ubahdatastaff" component={Ubahdatastaff}/>
        <Stack.Screen name="Riwayatstaff" component={Riwayatstaff}/>
        <Stack.Screen name="Detailriwayatstaff" component={Detailriwayatstaff}/>
        <Stack.Screen name="Barang" component={Barang}/>


        <Stack.Screen name="Profilekasir" component={Profilekasir}/>
        <Stack.Screen name="Fotokasir" component={Fotokasir}/>
        <Stack.Screen name="Kasir" component={Kasir}/>
        <Stack.Screen name="Member" component={Member}/>






        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Indux;
