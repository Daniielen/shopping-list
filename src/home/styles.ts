import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logo: {
        height: 134,
        width: 134,
    },
    container: {
        flex: 1,
        backgroundColor: '#edeef1',
        alignItems: 'center',
        paddingTop: 62,
        padding: 24
    },
    form: {
        width: "100%",
        paddingHorizontal: 16,
        gap: 10,
        marginTop: 42, 
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        marginTop: 24,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E4E6EC",
        paddingBottom: 12
    },
    separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },
  empty: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  }
});
