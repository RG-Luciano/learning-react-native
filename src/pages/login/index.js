import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export function Login() {

  return (
    <View style={styles.container}>
      <Image 
      source={require("../../assets/teste.png") }
      style= {styles.logo}
      />
      <Text style={styles.title}>WorkFlow</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F3F3FF',
    justifyContent:'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 30
  },
  buttons:{
    width: "80%"
  },  
  button:{
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CC3333",
    marginBottom: 10
  },
  buttonText:{
    color: "#666666",
    fontSize: 18
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#666666",
    marginBottom:25
  }
})
