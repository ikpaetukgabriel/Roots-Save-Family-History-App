import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";
import DateModal from "../components/DateModal";
import moment from "moment";

const AddRelativeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showBDateModal, setShowBDateModal] = useState(false);
  const [showDDateModal, setShowDDateModal] = useState(false);
  const [BDate, setBDate] = useState(new Date())
  const [DDate, setDDate] = useState(new Date())




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
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Add Information</Title>

          <View style={styles.inputContainer}>
            <TextInput
              style={{ height: 55 }}
              label="First name"
              value={firstName}
              onChangeText={(newText) => setFirstName(newText)}
              autoCorrect={false}
              underlineColor="green"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={{ height: 55 }}
              label="Last name"
              value={lastName}
              onChangeText={(newText) => setLastName(newText)}
              autoCorrect={false}
              underlineColor="green"
            />
          </View>

          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ ...styles.dateInputText, fontSize: 18, paddingBottom: 10 }}>Enter Birth Date: </Text>

              <TouchableOpacity onPress={onTouchBDate}>
                <View style={styles.dateInput}>
                  <Text style={styles.dateInputText}>{BDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>

              <DateModal
                showModal={showBDateModal}
                onCloseModal={onCloseBDateModal}
                date={BDate}
                onDateChange={onBDateChange}
                onDateModalSubmit={onBDateModalSubmit} />

              <Text style={{ ...styles.dateInputText, fontSize: 18, paddingBottom: 10 }}>Enter Death Date: </Text>

              <TouchableOpacity onPress={onTouchDDate}>
                <View style={styles.dateInput}>
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
    </>
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
  dateText: {
    fontSize: 17,
    paddingHorizontal: 10,
  },

  dateInput: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 50,
    borderBottomColor: '#75ad68',
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5
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
    backgroundColor: "#75ad68",
    width: 200,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,

  },


});
