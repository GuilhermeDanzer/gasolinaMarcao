import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

const Consumo = ({ route }) => {
  const { calculo } = route.params;
  const [indicioConsumo, setIndicioConsumo] = useState({});
  console.log("route.params", route.params);
  useEffect(() => {
    if (calculo <= 4) {
      setIndicioConsumo({ ranking: "E", cor: "red" });
    } else if (4 < calculo && calculo <= 8) {
      setIndicioConsumo({ ranking: "D", cor: "orange" });
    } else if (8 < calculo && calculo <= 10) {
      setIndicioConsumo({ ranking: "C", cor: "yellow" });
    } else if (10 < calculo && calculo <= 12) {
      setIndicioConsumo({ ranking: "B", cor: "lightgreen" });
    } else if (calculo > 12) {
      setIndicioConsumo({ ranking: "A", cor: "green" });
    }
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 22 }}>{calculo} KM/L</Text>
      <Text style={{ fontSize: 22 }}>
        Nivel de consumo:
        <Text style={{ color: indicioConsumo.cor, fontSize: 22 }}>
          {indicioConsumo.ranking}
        </Text>
      </Text>
    </View>
  );
};

export default Consumo;
