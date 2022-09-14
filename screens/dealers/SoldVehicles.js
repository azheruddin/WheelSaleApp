import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const SoldVehicles = () => {
  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={{marginVertical: 10}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: '#aaa',
            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 6,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontSize: 13, fontWeight: '500'}}>
                    Vehicle No :
                  </Text>
                  <Text
                    style={{
                      backgroundColor: '#ff9800',
                      color: '#ffffff',
                      marginLeft: 4,
                      paddingTop: 1,
                      paddingBottom: 2,
                      paddingLeft: 6,
                      paddingRight: 6,
                      borderRadius: 4,
                      fontSize: 12,
                    }}>
                    MH 31 BE 8599
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 6,
                }}>
                <View
                  style={{
                    alignSelf: 'flex-end',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: 11, fontWeight: '500'}}>
                      13-09-2022,{' '}
                    </Text>
                    <Text style={{fontSize: 11, fontWeight: '500'}}>
                      {' '}
                      12:04 PM
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <Text style={{fontSize: 13, fontWeight: '500'}}>
              Vehicle Name :{' '}
            </Text>
            <Text style={{}}>Royal Enfield Classic 350</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  paddingRight: 3,
                  fontWeight: 'bold',
                }}>
                {/* Pending */}
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 15, color: '#000', fontWeight: ''}}>
                {/* Qty: 4 */}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#3d3d72',
                  fontWeight: '500',
                  fontSize: 15,
                  alignSelf: 'center',
                }}>
                <FontAwesome name="rupee" size={16} color="#3d3d72" />
                {''} 60,000/-
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 6}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#fff',
                  backgroundColor: 'green',
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 20,
                }}>
                Sold <Icon name="checkmark-circle" size={15} color="white" />
              </Text>
              <TouchableOpacity
                style={{
                  // paddingHorizontal: 4,
                  borderColor: '#00b8dc',
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                onPress={() => {
                  navigation.navigate('Order Details');
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    padding: 4,
                    color: '#00b8dc',
                    fontWeight: '500',
                  }}>
                  View Detail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SoldVehicles;
