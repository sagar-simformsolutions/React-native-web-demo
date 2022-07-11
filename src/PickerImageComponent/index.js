import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default class PickerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: null,
    };
  }

  async launchPicker() {
    const result = await launchImageLibrary();
    console.log(result, "<=== result ");
    this.setState({
      fileData: result?.assets?.[0]?.uri,
    });
  }

  render() {
    const { fileData } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          style={{ marginTop: 150 }}
          onPress={() => this.launchPicker()}
          title="Open Picker"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        {fileData && (
          <Image
            style={{
              width: 350,
              height: 350,
            }}
            source={{ uri: fileData }}
          />
        )}

        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
          title="Go Back"
          color="#841584"
        />
      </View>
    );
  }
}
