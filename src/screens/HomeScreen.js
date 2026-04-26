import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Switch,
  ScrollView,
  SafeAreaView,
  Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Alert.alert("Switch pressionado");
  };

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Erro ao abrir link: ${url}`);
    }
  };

  // Tema dinâmico
  const theme = {
    background: isEnabled ? "#FFFFFF" : "#000d1f",
    text: isEnabled ? "#000d1f" : "#FFFFFF",
    description: isEnabled ? "#555555" : "#AFB2B1",
    card: isEnabled ? "#F0F0F0" : "#051321",
    accent: "#22D4FD",
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Header Logo */}
          <View style={styles.header}>
            <Text style={[styles.logo, { color: theme.text }]}>
              DEV.SPOT <Text style={styles.sparkle}>✦</Text>
            </Text>
          </View>

          {/* MOLDURA DUPLA COM AS DUAS FOTOS */}
          <View style={styles.duoPhotoContainer}>
            {/* Foto 1 (Matheus) - Deslocada para a esquerda/trás */}
            <View style={styles.photoWrapperLeft}>
              <View style={styles.frameBehind} />
              <Image
                source={{ uri: "https://github.com/MathzLabs.png" }}
                style={styles.image}
              />
            </View>

            {/* Foto 2 (Sarah) - Deslocada para a direita/frente */}
            <View style={styles.photoWrapperRight}>
              <View style={[styles.frameBehind, { borderColor: "#FF6B6B" }]} />
              <Image
                source={{ uri: "https://github.com/SarahBea11.png" }}
                style={styles.image}
              />
            </View>
          </View>

          {/* Título e Descrição */}
          <Text style={[styles.title, { color: theme.text }]}>
            Eleve seu negócio digital
            <Text style={styles.highlight}>
              {" "}
              com um Front-end de qualidade!
            </Text>
          </Text>

          <Text style={[styles.description, { color: theme.description }]}>
            Olá! Somos Matheus e Sarah, desenvolvedores focados em transformar
            ideias em interfaces incríveis. Especialistas em React Native,
            ajudamos a tirar seu projeto do papel.
          </Text>

          {/* Botões de Navegação */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("Sobre")}
          >
            <Text style={styles.buttonText}>Sobre nós</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => Alert.alert("Entre em contato")}
          >
            <Text style={styles.buttonText}>Entre em contato!</Text>
          </TouchableOpacity>

          {/* Redes Sociais e Switch */}
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Nossas redes:
          </Text>

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

          {/* Botões Sociais */}
          <SocialButton
            icon="github"
            label="GitHub Matheus"
            theme={theme}
            onPress={() => openLink("https://github.com/MathzLabs")}
          />
          <SocialButton
            icon="github"
            label="GitHub Sarah"
            theme={theme}
            onPress={() => openLink("https://github.com/SarahBea11")}
          />
          <SocialButton
            icon="linkedin"
            label="LinkedIn Matheus"
            theme={theme}
            onPress={() =>
              openLink(
                "https://www.linkedin.com/in/matheus-prazeres-288aab282/",
              )
            }
          />
          <SocialButton
            icon="linkedin"
            label="LinkedIn Sarah"
            theme={theme}
            onPress={() =>
              openLink("https://www.linkedin.com/in/sarahbeatrizlimapina-/")
            }
          />
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido por Matheus & Sarah.{"\n"}Projeto para atividade
            acadêmica.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const SocialButton = ({ icon, label, onPress, theme }) => (
  <TouchableOpacity
    style={[styles.socialButton, { backgroundColor: theme.card }]}
    onPress={onPress}
  >
    <MaterialCommunityIcons
      name={icon}
      size={22}
      color="#22D4FD"
      style={styles.icon}
    />
    <Text style={[styles.socialText, { color: theme.text }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 30, alignItems: "center" },
  header: { marginVertical: 30 },
  logo: { fontSize: 20, fontWeight: "800", letterSpacing: 2 },
  sparkle: { color: "#22D4FD" },

  // ESTILO DA MOLDURA DUPLA
  duoPhotoContainer: {
    flexDirection: "row",
    height: 220,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  photoWrapperLeft: {
    width: 140,
    height: 140,
    position: "absolute",
    left: "15%",
    zIndex: 1,
  },
  photoWrapperRight: {
    width: 140,
    height: 140,
    position: "absolute",
    right: "15%",
    top: 60,
    zIndex: 2,
  },
  frameBehind: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: "#22D4FD",
    borderRadius: 15,
    top: 8,
    left: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    backgroundColor: "#051321",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    lineHeight: 32,
  },
  highlight: { color: "#22D4FD" },
  description: {
    fontSize: 15,
    lineHeight: 24,
    marginTop: 15,
    marginBottom: 25,
    textAlign: "left",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#22D4FD",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginVertical: 6,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#000814",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    alignSelf: "flex-start",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  switchLabel: { fontSize: 14 },
  socialButton: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#22D4FD",
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  icon: { marginRight: 15 },
  socialText: { fontSize: 15, fontWeight: "600" },
  footer: {
    backgroundColor: "#22D4FD",
    width: "100%",
    padding: 20,
    marginTop: 40,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#000814",
    fontWeight: "600",
  },
});
