import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MarketVehicles = () => {
  const vehicle = [
    {
      id: '1',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
    {
      id: '2',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
    {
      id: '3',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
    {
      id: '4',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
    {
      id: '5',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
    {
      id: '6',
      img: 'https://cdn.motor1.com/images/mgl/mrBRA/s3/tvs-jupiter-110.jpg',
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View style={{padding: 10, backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontWeight: '500'}}>
          Fresh recommendations
        </Text>
      </View>
      <View style={styles.container}>
        {vehicle.map(({id, img}) => (
          <TouchableOpacity key={id}>
            <View style={styles.cardItem}>
              <View style={styles.card}>
                <Image
                  source={{
                    uri: img,
                  }}
                  style={styles.cardImg}
                />
                <Image
                  source={{
                    uri: 'http://wheelsale.in/wheel/Asset1/images/favicon.png',
                  }}
                  style={styles.iconLogo}
                />
                <View style={{margin: 5}}>
                  <Text style={styles.vehName} numberOfLines={2}>Yaamah Royal Enfield Classic 350 - 2020</Text>
                  <Text style={styles.vehPrice}>
                    <FontAwesome name="rupee" size={16} color="#3d3d72" />
                    {''} 60,000/-
                  </Text>

                  <Text style={styles.shopName} numberOfLines={1}>
                    <FontAwesome name="map-marker" size={16} color="black" />{' '}
                    Taj Auto Delars Sadar
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'lightgray',
    borderWidth: 0.3,
    backgroundColor: 'white',
    elevation: 5,
  },
  cardItem: {
    shadowColor: 'lightgray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 165,
    marginVertical: 10,
  },
  cardImg: {
    width: '100%',
    height: 150,
  },
  iconLogo: {
    width: 25,
    height: 25,
    borderRadius: 100,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 120,
    right: 5,
  },
  shopName: {},
  vehName: {
    color: 'black',
    fontSize: 15,
  },
  vehPrice: {
    color: '#3d3d72',
    fontWeight: '500',
    fontSize: 15,
    alignSelf: 'center',
  },
  shopName: {
    // fontStyle: 'italic',
    fontSize: 13,
  },
});
export default MarketVehicles;
