import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Platform, Text } from 'react-native';
import { Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';


export default function ImagePickerExample({ image, setImage }) {

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            {image ?
                <View>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 20 }} />
                </View> :
                <View >
                    <Image size={55} source={require('../../assets/defaultImage.png')} style={{ width: 200, height: 200, borderRadius: 20 }} />
                </View>

            }
            <Button
                style={styles.uploadButton}
                mode="contained"
                onPress={pickImage}
                contentStyle={{ height: 50 }}
            >
                <Text style={{ color: 'black' }}>Upload an Image</Text>
            </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    uploadButton: {
        marginVertical: 20,
        backgroundColor: "#f0f0f0",
        width: 200,
        height: 30,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

})