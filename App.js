import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.a}>
      <Text  style={styles.textB}>時に、</Text>
      <Text  style={styles.textB}>西曆2022年</Text>
      </View>
      

      <Text  style={styles.textA}>作</Text>
      <Text  style={styles.textA}>業、襲來</Text>
      <StatusBar style="auto" />
      <View style={styles.b}>
    <Text  style={styles.textC}>110919026　李雅淳</Text>
    </View>
    <View style={styles.c}>
    <Text  style={styles.textD}>第壹週</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  a:{
    width: '100%',
    paddingBottom:50,
  },
  b:{
    position:'absolute',
    flexDirection:'row-reverse',
    top:280,
    right:20,
    height:1000,
  },
  c:{
    position:'absolute',
    top:500,
    left:100,
    height:1000,
    
  },
  textA: {
    width: '100%',
    fontSize: 100,
    textAlign: 'left',
    color: "#fff"
    
  },
  textB: {
    width: '100%',
    fontSize: 60,
    textAlign: 'left',
    color: "#fff"
  },
  textC: {
    width: 12,
    fontSize: 15,
    textAlign: 'right',
    color: "#aaa"
  },
  textD: {
    width: '100%',
    height: 55,
    fontSize: 80,
    textAlign: 'left',
    color: "#ba0000"
  },
});
