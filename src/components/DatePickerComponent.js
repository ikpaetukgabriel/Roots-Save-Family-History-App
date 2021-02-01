import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerComponent = ({ onDateSelect, date }) => {
  return (
    <View>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        textColor="green"
        onChange={(event, selectedDate) => onDateSelect(selectedDate)}
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({});
