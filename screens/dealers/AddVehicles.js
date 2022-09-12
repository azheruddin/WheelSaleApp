import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const AddVehicles = () => {
  return (
    <View>
      <Button
        title="Subscription Plan"
        color={'#3d3d72'}
        onPress={() =>
          Alert.alert(
            'WheelSale',
            'To use this feature please buy Our subscription & Contact us.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          )
        }
      />
    </View>
  );
};

export default AddVehicles;
