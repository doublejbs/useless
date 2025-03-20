import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

const EquipmentScreen = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>내장비</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default EquipmentScreen;