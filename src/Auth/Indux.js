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
import Fotostaff from '../Staff/profilestaff/Fotostaff'

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

// Kasir-Riwayatkasir
import Riwayatkasir from '../Kasir/Riwayatkasir/Riwayatkasir'
import Detailriwayat from '../Kasir/Riwayatkasir/Detailriwayat'


// Member
import Screenmember from '../Member/Screenmember'
import Profilemember from '../Member/Profilemember'
import Fotomember from '../Member/Fotomember'

// Pimpinan
import Screenpimpinan from '../Pimpinan/Screenpimpinan'

// Pimpinan-Profile
import Profilepimpinan from '../Pimpinan/Profilepimpinan/Profilepimpinan'
import Fotopimpinan from '../Pimpinan/Profilepimpinan/Fotopimpinan'

// Pimpinan-Gudangpimpinan
import Gudangpimpinan from '../Pimpinan/Gudangpimpinan/Gudangpimpinan'

// Pimpinan-Riwayatpembelianpimpinan
import Riwayapembelianpimpinan from '../Pimpinan/Riwayatpembelianpimpinan/Riwayapembelianpimpinan'
import Detailriwayatpembelianpimpinan from '../Pimpinan/Riwayatpembelianpimpinan/Detailriwayatpembelianpimpinan'

// Pimpinan-Perusahaanpimpinan
import Perusahaanpimpinan from '../Pimpinan/Perusahaanpimpinan/Perusahaanpimpinan'


// Pimpinan-Riwayattransaksipimpinan
import Riwayattransaksipimpinan from '../Pimpinan/Riwayattransaksipimpinan/Riwayattransaksipimpinan'
import Detailriwayattransaksipimpinan from '../Pimpinan/Riwayattransaksipimpinan/Detailriwayattransaksipimpinan'

// Pimpinan-Keuangan
import Keuanganpimpinan from '../Pimpinan/Keuangan/Keuanganpimpinan'

// Pimpinan-Member
import Memberpimpinan from '../Pimpinan/Member/Memberpimpinan'

// Pimpinan-Laba
import Laba from '../Pimpinan/Laba/Laba'

// Pimpinan-Karyawan
import Karyawan from '../Pimpinan/Karyawan/Karyawan'
import Tambahkaryawan from '../Pimpinan/Karyawan/Tambahkaryawan'

// Pimpinan-Absen
import Absen from '../Pimpinan/Absen/Absen'

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
        <Stack.Screen name="Screenmember" component={Screenmember} />
        <Stack.Screen name="Screenpimpinan" component={Screenpimpinan} />


        
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
        <Stack.Screen name="Fotostaff" component={Fotostaff}/>



        <Stack.Screen name="Profilekasir" component={Profilekasir}/>
        <Stack.Screen name="Fotokasir" component={Fotokasir}/>
        <Stack.Screen name="Kasir" component={Kasir}/>
        <Stack.Screen name="Member" component={Member}/>
        <Stack.Screen name="Riwayatkasir" component={Riwayatkasir}/>
        <Stack.Screen name="Detailriwayatkasir" component={Detailriwayat}/>


        <Stack.Screen name="Profilemember" component={Profilemember}/>
        <Stack.Screen name="Fotomember" component={Fotomember}/>

        <Stack.Screen name="Profilepimpinan" component={Profilepimpinan}/>
        <Stack.Screen name="Fotopimpinan" component={Fotopimpinan}/>
        <Stack.Screen name="Gudangpimpinan" component={Gudangpimpinan}/>
        <Stack.Screen name="Riwayatpembelianpimpinan" component={Riwayapembelianpimpinan}/>
        <Stack.Screen name="Detailriwayatpembelianpimpinan" component={Detailriwayatpembelianpimpinan}/>
        <Stack.Screen name="Perusahaanpimpinan" component={Perusahaanpimpinan}/>
        <Stack.Screen name="Riwayattransaksipimpinan" component={Riwayattransaksipimpinan}/>
        <Stack.Screen name="Detailriwayattransaksipimpinan" component={Detailriwayattransaksipimpinan}/>
        <Stack.Screen name="Keuanganpimpinan" component={Keuanganpimpinan}/>
        <Stack.Screen name="Memberpimpinan" component={Memberpimpinan}/>
        <Stack.Screen name="Laba" component={Laba}/>
        <Stack.Screen name="Karyawan" component={Karyawan}/>
        <Stack.Screen name="Tambahkaryawan" component={Tambahkaryawan}/>
        <Stack.Screen name="Absen" component={Absen}/>




      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Indux;












        
