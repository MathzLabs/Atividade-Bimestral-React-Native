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
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>DEV.SPOT ✦</Text>

        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/400" }}
            style={styles.image}
          />
        </View>

        <Text style={styles.title}>
          Eleve seu negócio digital a outro nível
          <Text style={{ color: "#22D4FD" }}>
            {" "}
            com um Front-end de qualidade!
          </Text>
        </Text>

        <Text style={styles.description}>
          Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
          React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em
          prática boas ideias. Vamos conversar?
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={styles.buttonText}>Sobre mim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => Alert.alert("Contato")}
        >
          <Text style={styles.buttonText}>Entre em contato!</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>Acesse minhas redes:</Text>

        <View style={styles.switchContainer}>
          <Text style={{ color: "#C0C0C0" }}>Alterar visualização</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#22D4FD" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>

        {["GitHub", "LinkedIn", "Instagram", "Twitch"].map((redes) => (
          <TouchableOpacity key={redes} style={styles.socialButton}>
            <Text style={styles.socialText}>{redes}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido por Aluno.{"\n"}Projeto fictício sem fins comerciais.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001a2e",
  },
  content: {
    padding: 25,
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 30,
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: "#22D4FD",
    borderRadius: 15,
    padding: 5,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 25,
    lineHeight: 32,
  },
  description: {
    color: "#C0C0C0",
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
    textAlign: "left",
  },
  primaryButton: {
    backgroundColor: "#22D4FD",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    alignSelf: "flex-start",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 15,
  },
  socialButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#22D4FD",
    backgroundColor: "#001122",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  socialText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "#22D4FD",
    width: "120%", // Para cobrir as bordas se necessário
    padding: 15,
    marginTop: 40,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#000",
  },
});
