import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CadastroI({ navigation }) {

  

  const [nome, setNome] = useState('');
  const [dtnasc, setDtnasc] = useState('');
  const [cpf, setCpf] = useState('');
  const [rm, setRm] = useState('');


  
  const proximoI = () => {
     if (nome === "" || dtnasc === "" || cpf === "" || rm === "") {
      alert("Preencha todos os campos");
    } else {
      proxPag(nome, dtnasc, cpf, rm);
    }
  }

  const proxPag = (nomeParam, dtnascParam, cpfParam, rmParam) => {
    navigation.navigate('CadastroIV', { nome: nomeParam, dtnasc: dtnascParam, cpf: cpfParam, rm: rmParam });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informe seus dados pessoais</Text>
      <TextInput
        style={styles.TextoInput}
        placeholder="Nome completo: "
        onChangeText={(nome) => setNome(nome)}
        value={nome}
      />
      <TextInput
        style={styles.TextoInput}
        placeholder="Data de Nascimento: "
        onChangeText={(dtnasc) => setDtnasc(dtnasc)}
        value={dtnasc}
      />
      <TextInput
        style={styles.TextoInput}
        placeholder="CPF: "
        onChangeText={(cpf) => setCpf(cpf)}
        value={cpf}
      />

      <TextInput
        style={styles.TextoInput}
        placeholder="RM:"
        onChangeText={(rm) => setRm(rm)}
        value={rm}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={proximoI}
      >
        <Text style={styles.botaotexto}>Próximo</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 25, flexDirection: "row", alignItems: "center", alignSelf: "center", }}>Já possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontWeight: 'bold', color: '#0000CD', fontSize: 15 }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextoInput: {
    width: 300,
    backgroundColor: '#E0E0E0',
    color: '#000',
    fontSize: 25,
    marginTop: 20,
    borderRadius: 10
  },
  titulo: {
    fontSize: 40
  },
  botao: {
    width: 250,
    backgroundColor: '#0000CD',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 150,
    color: '#fff',
  },
  botaotexto: {
    color: '#fff',
    fontSize: 30
  }
});
