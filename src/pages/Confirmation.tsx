import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "😚",
  smile: "😃",
};

export function Confirmation() {
  const { navigate } = useNavigation();
  const routes = useRoute();

  const {
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
    title,
  } = routes.params as Params;

  function handleMoveOn() {
    navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: fonts.text,
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 10,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
