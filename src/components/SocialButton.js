import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SocialButton({ icon, label }) {
  return (
    <TouchableOpacity
      style={styles.socialButton}
      onPress={() => Alert.alert(`Rede Social`, `Você clicou no ${label}`)}
    >
      <MaterialCommunityIcons name={icon} size={24} color="#22D4FD" style={styles.icon} />
      <Text style={styles.socialText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#22D4FD",
    backgroundColor: "#051321",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  socialText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});