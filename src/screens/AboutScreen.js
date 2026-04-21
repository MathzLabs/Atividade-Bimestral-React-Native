import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>

      <Text style={styles.text}>
        Sou a Joana Santos, desenvolvedora Front-end apaixonada por transformar
        ideias em interfaces funcionais...
      </Text>

      <Text style={styles.footer}>
        Desenvolvido por Aluno{"\n"}
        Projeto fictício sem fins comerciais.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001a2e",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 15,
  },

  text: {
    color: "#ccc",
    lineHeight: 20,
  },

  footer: {
    marginTop: 40,
    textAlign: "center",
    color: "#00d4ff",
  },
});
