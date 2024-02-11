import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({

  OrangeButton: {
    backgroundColor: "#FF635A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf:'center',
    width:180,
    height:50,
    marginTop:70,
    justifyContent:'center'
  },
  appButtonText: {
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
 circlarButton:{
  backgroundColor: "#FF635A",
  borderRadius: 15,
  paddingVertical: 10,
  paddingHorizontal: 20,
  alignItems: 'center',
  alignSelf:'center',
  width:85,
  height:25,
  justifyContent:'center'

},

circlarButtonB:{
  backgroundColor: "#002880",
  borderRadius: 10,

  alignItems: 'center',
  alignSelf:'center',
  width:48,
  height:25,
  justifyContent:'center'

},

text:{
  color:'#002880',
  textTransform: "uppercase",
  textAlign:'center'
},

circleBorder:{
borderColor:'#002880',
borderWidth:2
},
rowContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
});
export default styles;