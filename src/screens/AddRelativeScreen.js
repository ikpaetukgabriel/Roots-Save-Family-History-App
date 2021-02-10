import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import DateModal from "../components/DateModal";
import ImagePickerComponent from "../components/ImagePickerComponent";
import moment from "moment";


const AddRelativeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showBDateModal, setShowBDateModal] = useState(false);
  const [showDDateModal, setShowDDateModal] = useState(false);
  const [BDate, setBDate] = useState(new Date())
  const [DDate, setDDate] = useState(new Date())
  const [image, setImage] = useState(null);



  const onTouchBDate = () => {
    setShowBDateModal(true)
  }

  const onCloseBDateModal = () => {
    setShowBDateModal(false)
  }

  const onBDateChange = (event, selectedDate) => {
    setBDate(selectedDate)

  }
  const onBDateModalSubmit = () => {
    setShowBDateModal(false)
    setBDate(BDate)
  }



  const onTouchDDate = () => {
    setShowDDateModal(true)
  }

  const onCloseDDateModal = () => {
    setShowDDateModal(false)
  }

  const onDDateChange = (event, selectedDate) => {
    setDDate(selectedDate)

  }
  const onDDateModalSubmit = () => {
    setShowDDateModal(false)
    setDDate(DDate)
  }

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.addInfoText}>Add Relative Info</Text>



          <View style={styles.inputContainer}>

            <ImagePickerComponent
              image={image}
              setImage={setImage}
            />



            <TextInput
              style={{ height: 55 }}
              label="First name"
              value={firstName}
              onChangeText={(newText) => setFirstName(newText)}
              autoCorrect={false}
              underlineColor="#a8eb34"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={{ height: 55 }}
              label="Last name"
              value={lastName}
              onChangeText={(newText) => setLastName(newText)}
              autoCorrect={false}
              underlineColor="#a8eb34"
            />
          </View>

          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>



              <TouchableOpacity style={{ marginTop: 5 }} onPress={onTouchBDate}>

                <View style={styles.dateInput}>
                  <Text style={{ ...styles.dateInputText, fontSize: 15, fontWeight: 'bold' }}>Birth Date
                  <Text style={{ fontSize: 12 }}> (If any)</Text>
                  </Text>
                  <Text style={styles.dateInputText}>{BDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>

              <DateModal
                showModal={showBDateModal}
                onCloseModal={onCloseBDateModal}
                date={BDate}
                onDateChange={onBDateChange}
                onDateModalSubmit={onBDateModalSubmit} />



              <TouchableOpacity style={{ marginTop: 15 }} onPress={onTouchDDate}>
                <View style={styles.dateInput}>
                  <Text style={{ ...styles.dateInputText, fontSize: 15, fontWeight: 'bold' }}>Death Date:
                  <Text style={{ fontSize: 12 }}> (If any)</Text>
                  </Text>
                  <Text style={styles.dateInputText}>{DDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>

              <DateModal
                showModal={showDDateModal}
                onCloseModal={onCloseDDateModal}
                date={DDate}
                onDateChange={onDDateChange}
                onDateModalSubmit={onDDateModalSubmit} />

            </View>
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Submited")}
            contentStyle={{ height: 50 }}
          >
            <Text>Submit</Text>
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default AddRelativeScreen;

const styles = StyleSheet.create({
  card: {
    margin: 30,
  },
  inputContainer: {
    marginBottom: 10,
  },
  addInfoText: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 15,
    color: '#535949',
    fontWeight: 'bold',

  },
  dateText: {
    fontSize: 17,
    paddingHorizontal: 10,
  },

  dateInput: {

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    width: 320,
    backgroundColor: "#dbe3cc",
    borderRadius: 10,



  },
  dateInputText: {
    fontSize: 15,
    color: '#545c56'
  },

  touchableDatePicker: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 200
  },

  button: {
    marginVertical: 20,
    backgroundColor: "#82ba22",
    width: 200,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,

  },


});
