import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { FileUploader } from "react-drag-drop-files";
import { useFilePicker } from "react-sage";
import { loadFile } from "react-sage/dist/utils";

const MAX_FILE_SIZE = 1;

const FilePickerComponent = () => {
  const [dataUrls, setDataUrls] = React.useState([]);
  const { files, onClick, HiddenFileInput } = useFilePicker({
    maxFileSize: MAX_FILE_SIZE,
    maxImageWidth: 1000,
    imageQuality: 0.92,
    resizeImage: true,
  });

  React.useEffect(() => {
    const getDataUrls = async (): Promise<void> => {
      const data = await Promise.all(files.map(loadFile));
      setDataUrls(data);
    };
    getDataUrls();
  }, [files]);

  return (
    <>
      <button onClick={onClick}>Click me to trigger hidden file input</button>
      <HiddenFileInput accept=".jpg, .jpeg, .png" multiple={false} />
      {dataUrls.map((imageBase64, i) => (
        <img src={imageBase64} key={i} style={{ width: "100%" }} />
      ))}
    </>
  );
};

export default class PickerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      name: null,
    };
  }
  handleChange = async (file) => {
    // this.setState({
    //   file: file,
    // });
    const data = await Promise.all([...file].map(loadFile));
    this.setState({ file: data, name: file?.[0]?.name });
  };

  render() {
    const { file, name } = this.state;
    const fileTypes = ["png", "jpeg", "jpg"];
    const source =
      "https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg";
    return (
      <ImageBackground
        source={source}
        style={styles.image}
        resizeMode="stretch"
      >
        <View>
          <View style={styles.fileUploader}>
            <FileUploader
              multiple={true}
              handleChange={this.handleChange}
              name="file"
              types={fileTypes}
              onDrop={(data) => {}}
            />
            <p>{name ? `File name: ${name}` : "no files uploaded yet"}</p>
            {file.map((imageBase64, i) => (
              <img src={imageBase64} key={i} style={{ width: "100%" }} />
            ))}
          </View>
          <View style={styles.uploadButton}>
            <FilePickerComponent />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // width: 1000,
    minHeight: 1000,
    justifyContent: "center",
    alignItems: "center",

    // marginTop: '1.5rem',
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    position: "relative",
    top: 50,
  },
  uploadButton: {
    left: 90,
    // top: 55,
  },
  uploadedImage: {
    width: "100%",
  },
  backButton: { marginVertical: 25, left: 90 },
  fileUploader: {
    left: 90,
  },
});
