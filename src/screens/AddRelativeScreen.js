import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, Title, TextInput } from "react-native-paper";
import DatePickerComponent from "../components/DatePickerComponent";

const AddRelativeScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());

  const onDateSelect = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Add Information</Title>

          <View style={styles.inputContainer}>
            <TextInput
              label="First name"
              value={firstName}
              onChangeText={(newText) => setFirstName(newText)}
              autoCorrect={false}
              underlineColor="green"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Last name"
              value={lastName}
              onChangeText={(newText) => setLastName(newText)}
              autoCorrect={false}
              underlineColor="green"
            />
          </View>
          <View>
            <DatePickerComponent onDateSelect={onDateSelect} date={date} />
          </View>
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
});
