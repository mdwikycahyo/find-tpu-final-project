import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 5,
  },
  input: {
    height: 40,
    width: 150,
    marginTop: '1%',
    marginBottom: '3%',
    borderWidth: 1,
  },
  text: {
    textTransform: 'capitalize',
    marginHorizontal: '8%',
    fontWeight: "bold"
  },
})

export default styles