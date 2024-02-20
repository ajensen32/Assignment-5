import React from "react";
import { StyleSheet, Text, ScrollView, View, SafeAreaView } from "react-native";
import { displayTime } from "./util";

function Result({ results }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.resultItem} />
        {results.map((item, index) => (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.resultItemText}>Lap {results.length - index}</Text>
            <Text style={styles.resultItemText}>{displayTime(item)}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: { color: "#fff" },
});

export default React.memo(Result);
