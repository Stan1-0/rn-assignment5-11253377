import { View, Text , StyleSheet, FlatList, Image} from "react-native";

const cardDetails = [
  {id:1, name: 'Apple Store', description: 'Entertainment', Image: require('./assets/apple.png'), transactionAmount: '-$5.99'},
  {id:2, name: 'Spofity',description: 'Music', Image: require('./assets/spotify.png'), transactionAmount: '-$12.99'},
  {id:3, name: 'Money Transfer',description: 'Transaction', Image: require('./assets/transaction.png'), transactionAmount: '$300'},
]

const Card = () => {
  return (
    <FlatList
    data={cardDetails}
    renderItem={({item}) => (
      <View style={styles.transactionItem}>
      <Image
        style={styles.transactionIcon}
        source={item.Image} 
      />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDescription}>{item.description}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.transactionAmount}</Text>
    </View>
    )}
    keyExtractor={(item) => item.id.toString()}
    vertical
    showsVerticalScrollIndicator={false}
    />

  );
};

export default Card;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    width: 'auto',
  },
  transactionIcon: {
    width: 32,
    height: 32,
  },
  transactionDetails: {
    flexDirection: "column",
    marginLeft: 16,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionDescription: {
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 16,
  }
}
);