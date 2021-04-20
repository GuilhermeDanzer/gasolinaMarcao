import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

// import { Container } from './styles';

const Gasolina = ({ navigation }) => {
  const [gasolina, setGasolina] = useState(0);
  const [km, setKm] = useState(0);
  const [msgErro, setMsgErro] = useState("");

  const CalcularConsumo = ({ km, gasolina }) => {
    console.log(km, gasolina);
    if (!km || !gasolina) return false;

    return km / gasolina;
  };

  return (
    <View>
      <Text>KM</Text>
      <View style={styles.inputStyle}>
        <TextInput
          keyboardType="numeric"
          autoCorrect={false}
          style={{ flex: 1, fontSize: 18 }}
          placeholder=""
          value={km}
          onChangeText={(newTerm) => setKm(newTerm)}
        />
      </View>
      <Text>Litros</Text>
      <View style={styles.inputStyle}>
        <TextInput
          keyboardType="numeric"
          autoCorrect={false}
          style={{ flex: 1, fontSize: 18 }}
          placeholder=""
          value={gasolina}
          onChangeText={(newTerm) => setGasolina(newTerm)}
        />
      </View>
      {msgErro.length > 0 ? <Text>{msgErro}</Text> : null}
      <Button
        title=" Calcular"
        onPress={() => {
          const calculo = CalcularConsumo({ km, gasolina });
          calculo
            ? navigation.navigate("Consumo", { calculo })
            : setMsgErro("Informações faltando");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    //  backgroundColor: "#f0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#000",
  },
});

export default Gasolina;
