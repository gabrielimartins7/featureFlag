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
      height: 180,
      backgroundColor: '#221E5B',
      borderRadius: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 22
    },
    icon: {
      width: 80,
      height: 80,
    },
    textBanner: {
      color: '#ffff',
      fontSize: 20
    },
    securite: {
      color: '#ffff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 18
    },
    section: {
      width: '100%',
      height: 80,
      backgroundColor: '#221E5B',
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 14,
      marginTop: 20
    },
    subSection: {
      marginLeft: 20
    },
    titleBold: {
      color: '#ffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    subtitle: {
      color: '#ffff',
      fontSize: 16,
    }
  });