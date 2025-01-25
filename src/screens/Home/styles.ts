import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1753',
    },
    content: {
      padding: 32,
    },
    header: {
      marginVertical: 32,
      flexDirection: 'row'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      color: '#FFFFFF',
    },
    banner: {
      width: '100%',
      height: 250,
      backgroundColor: '#f8f8f8',
      borderRadius: 8
    },
    icon: {
      width: 100,
      height: 100,
    }
  });