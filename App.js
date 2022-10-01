import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1,setValor1]= useState("");
  const [valor2,setValor2]= useState("");
  const [resultado,setResultado]= useState();




function divisao(){
  let v1 = parseFloat(valor1);
let v2 =  parseFloat(valor2);
let r = v2/v1;


if(r <= 0.7 ){
setResultado("Etanol");

}
else{
setResultado("Gasolina");
}

}


//Form f = new from(); instancia
  return (
    <View style={styles.container}>
			  <View  style={styles.containerprinc}>

      	<Text style={styles.textotitulo}>Aula de Mobile</Text>
 	<View style={styles.bloco}>
 		<Text style={styles.titulo}>Calculadora Combustível</Text>
 	</View>
 	
	<View style={styles.bloco}>
 		<Text  style={styles.texto}>Preço da Gasolina: </Text>
 		<TextInput style={styles.input} value={valor1} onChangeText={(valor)=>setValor1(valor)} //Altera o valor
 keyboardType="numeric" // Deixa o usario somente digitar numeros evitando um possivel erro
  />
 	</View>
 	<View style={styles.bloco}>
 		<Text  style={styles.texto}>Preço do Etanol: </Text> 
		<TextInput style={styles.input} value={valor2} onChangeText={(valor)=>setValor2(valor)} //Altera o valorkeyboardType="numeric" // Deixa o usario somente digitar numeros evitando um possivel erro
/>  
 	</View>
 	<View style={styles.bloco2}> 
		<TouchableOpacity style={styles.botao} onPress={divisao}>
			<Text style={styles.textoBotao}>Calcular</Text>
		</TouchableOpacity>
 	</View>


  	<View style={styles.bloco2}>
		{resultado}
  	</View>

</View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
	 backgroundColor:'#FDF5E6',
    flex: 1,

   
  },
containerprinc:{
backgroundColor:'#FDF5E6',
marginTop:'15%'
},
	
bloco:{

   width:'80%',
marginLeft:'10%'
},
	
bloco2:{
marginTop:'20px',
   width:'80%',
marginLeft:'10%',
alignItems:'center'
},
titulo:{
fontSize:30,
textAlign:'center'
},
input:{
borderWidth:2,
	backgroundColor:'#ffffff',
fontSize:20,
	width:'40%',
	marginLeft:'30%',
borderRadius:20
},
botao:{
backgroundColor:'#32CD32',
borderRadius:20,
width:'28%',
   margin:'5px'
},
textoBotao:{
color:'#FFF',
textAlign:'center',
fontsize:20
},
textotitulo:{
textAlign:'center',
fontSize: 25,

},
texto:{
	marginLeft:'30%'
}


});
