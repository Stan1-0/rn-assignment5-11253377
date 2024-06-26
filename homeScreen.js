import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "./myCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              source={require("./assets/profile.png")}
            />
          </View>
          <View style={{ flexDirection: "column", left: -90 }}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>Eric Atsu</Text>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              style={styles.searchIconImage}
              source={require("./assets/search.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardDetails}>
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>4562</Text>
              <Text style={styles.cardNumberText}>1122</Text>
              <Text style={styles.cardNumberText}>4595</Text>
              <Text style={styles.cardNumberText}>7852</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardHolder}>AR Jonson</Text>
              <View style={styles.cardExpiration}>
                <Text style={styles.cardExpirationText}>Expiry Date</Text>
                <Text style={styles.cardExpirationText}>24/2000</Text>
              </View>
              <View style={styles.cardCvv}>
                <Text style={styles.cardCvvText}>CVV</Text>
                <Text style={styles.cardCvvText}>6986</Text>
              </View>
            </View>
            <View style={styles.cardLogo}>
              <Image
                style={styles.mastercardLogo}
                source={require("./assets/mastercard.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              style={styles.optionIcon}
              source={require("./assets/send.png")}
            />
            <Text style={styles.optionText}>Sent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              style={styles.optionIcon}
              source={require("./assets/receive.png")}
            />
            <Text style={styles.optionText}>Receive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              style={styles.optionIcon}
              source={require("./assets/loan.png")}
            />
            <Text style={styles.optionText}>Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              style={styles.optionIcon}
              source={require("./assets/topup.png")}
            />
            <Text style={styles.optionText}>Topup</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 24,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#ODOD26",
              lineHeight: 20.8,
            }}
          >
            Transaction
          </Text>
            <Text
              style={{ fontsize: 14, fontWeight: "light", color: "#95969D" }}
            >
              Sell All
            </Text>
          </View>
        <View>
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profile: {
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchIcon: {
    padding: 8,
    backgroundColor: "#F2F2F3",
    borderRadius: 20,
  },
  searchIconImage: {
    width: 20,
    height: 20,
  },
  cardContainer: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    margin: 16,
    borderRadius: 10,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    flexDirection: "column",
    alignItems: "center",
  },
  cardNumberText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardInfo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cardHolder: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardExpiration: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 8,
  },
  cardExpirationText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  cardCvv: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 8,
  },
  cardCvvText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  cardLogo: {
    alignItems: "center",
  },
  mastercardLogo: {
    width: 40,
    height: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 20,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    top: 15,
    fontSize: 12,
  },
  transactionContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    margin: 16,
    borderRadius: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sellAllButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  sellAllButtonText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});

export default HomeScreen;
