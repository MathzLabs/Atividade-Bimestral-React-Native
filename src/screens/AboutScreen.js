import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Switch,
  Alert
} from "react-native";

export default function AboutScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  // Função do Switch (Requisito obrigatório de exibir Alert)
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Alert.alert("Switch pressionado");
  };

  // Definição do tema (mesmas cores da Home para manter o padrão)
  const theme = {
    background: isEnabled ? "#FFFFFF" : "#000d1f",
    text: isEnabled ? "#000d1f" : "#FFFFFF",
    description: isEnabled ? "#555555" : "#AFB2B1",
    accent: "#22D4FD",
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          {/* Header Logo */}
          <View style={styles.header}>
            <Text style={[styles.logo, { color: theme.text }]}>
              DEV.SPOT <Text style={styles.sparkle}>✦</Text>
            </Text>
          </View>

          {/* MOLDURA DUPLA (MATHEUS & SARAH) */}
          <View style={styles.duoPhotoContainer}>
            <View style={styles.photoWrapperLeft}>
              <View style={styles.frameBehind} />
              <Image
                source={{ uri: "https://github.com/MathzLabs.png" }}
                style={styles.image}
              />
            </View>

            <View style={styles.photoWrapperRight}>
              <View style={[styles.frameBehind, { borderColor: "#FF6B6B" }]} />
              <Image
                source={{ uri: "https://github.com/SarahBea11.png" }}
                style={styles.image}
              />
            </View>
          </View>

          {/* Controle de Tema nesta tela também */}
          <View style={styles.switchContainer}>
            <Text style={[styles.switchLabel, { color: theme.description }]}>
              {isEnabled ? "Modo Claro" : "Modo Escuro"}
            </Text>
            <Switch
              trackColor={{ false: "#3e3e3e", true: "#22D4FD" }}
              thumbColor="#f4f3f4"
              value={isEnabled}
              onValueChange={toggleSwitch}
            />
          </View>

          {/* Título da Tela */}
          <Text style={[styles.title, { color: theme.text }]}>Sobre nós</Text>

          {/* Biografia */}
          <Text style={[styles.text, { color: theme.description }]}>
            Somos Matheus e Sarah, uma dupla de desenvolvedores apaixonados por transformar
            ideias em interfaces mobile funcionais e bem pensadas. Atuamos com o ecossistema
            React Native e Expo para entregar experiências fluidas tanto para Android quanto iOS.{"\n\n"}

            Nosso foco é colaborar com times criativos e empreendedores, ajudando a tirar
            projetos do papel com código limpo, atenção aos detalhes e uma comunicação clara.
            Acreditamos que o sucesso de um aplicativo nasce do equilíbrio entre performance
            técnica e uma interface que faça sentido para o usuário final.{"\n\n"}

            Estamos em constante evolução, explorando novas bibliotecas e aprimorando nossas
            soluções em cada linha de código. Se você busca uma parceria para construir algo
            real e inovador no mundo mobile, vamos conversar!
          </Text>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido por Matheus & Sarah.{"\n"}Projeto para atividade acadêmica.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 2,
  },
  sparkle: {
    color: '#22D4FD',
  },
  duoPhotoContainer: {
    flexDirection: 'row',
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 40,
  },
  photoWrapperLeft: {
    width: 130,
    height: 130,
    position: 'absolute',
    left: '10%',
    zIndex: 1,
  },
  photoWrapperRight: {
    width: 130,
    height: 130,
    position: 'absolute',
    right: '10%',
    top: 40,
    zIndex: 2,
  },
  frameBehind: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: "#22D4FD",
    borderRadius: 15,
    top: 6,
    left: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: '#051321',
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "left",
    marginBottom: 50,
  },
  footer: {
    backgroundColor: "#22D4FD",
    width: "100%",
    padding: 20,
  },
  footerText: {
    textAlign: "center",
    fontSize: 13,
    color: "#000814",
    lineHeight: 18,
    fontWeight: "600",
  },
});