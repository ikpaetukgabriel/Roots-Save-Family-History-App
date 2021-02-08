import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";
import DateModal from "../components/DateModal";
import moment from "moment";

const AddRelativeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date())


  const onTouchDate = () => {
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate)

  }
  const onDateModalSubmit = () => {
    setShowModal(false)
    setDate(date)

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
              <TouchableOpacity onPress={onTouchDate}>
                <View style={styles.dateInput}>
                  <Text style={styles.dateInputText}>{date.toDateString()}</Text>
                </View>
              </TouchableOpacity>

              <DateModal
                textStyle={styles.datePickerTextStyle}
                showModal={showModal}
                onCloseModal={onCloseModal}
                date={date}
                onDateChange={onDateChange}
                onDateModalSubmit={onDateModalSubmit} />
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
    marginVertical: 10,
    paddingHorizontal: 20,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8
  },
  dateInputText: {
    fontSize: 15,
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
  datePickerTextStyle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: 'grey',
    borderWidth: 1
  }

});
