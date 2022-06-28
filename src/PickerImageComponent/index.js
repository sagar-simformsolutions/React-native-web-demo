import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default class PickerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: '',
    };
  }

  async launchPicker() {
    const result = await launchImageLibrary();
    console.log(result, '<=== result ');
    this.setState({
      fileData: result?.assets?.[0]?.uri,
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.launchPicker()}>
          <Text>Open Picker</Text>
        </TouchableOpacity>
        <Image
          style={{
            width: 350,
            height: 350,
          }}
          source={{uri: this.state.fileData}}
        />
      </View>
    );
  }
}
