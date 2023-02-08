import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function ListOfVideos({ id, title, description, published, image }) {
    
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Image 
                style={styles.img}
                source={{
                    uri:image
                }} />
          </View>
          <View style={styles.innerContainer}>
              <View style={styles.circle}>
                  
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.text}>{title}</Text>
              </View>
          </View>
        </View>
      </SafeAreaView>
    );
}

export default ListOfVideos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  circle: {
    width: 50,
    height:50,
    borderRadius: '50%',
    borderColor: '#fff',
    borderWidth:2
  },
  img: {
    height: 300,
    width: 420,
    resizeMode: "default",
  },
  titleContainer: {
    width: '80%',
    marginLeft:10
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    fontSize: 6,
  },
});