import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Button } from "react-native-paper";

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'



const DateModal = (props) => {
  const { showModal, onCloseModal, date, onDateChange, onDateModalSubmit } = props;


  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={showModal}
        onRequestClose={onCloseModal}>
        <TouchableOpacity style={styles.mainModalView} onPress={onCloseModal}>

          <View style={styles.modalView}>
            <View style={{ flex: 1, width: 300 }}>
              <DateTimePicker
                value={new Date(date)}
                mode='date'
                onChange={onDateChange}
                display='spinner' />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                style={{ ...styles.button, backgroundColor: "red" }}
                mode="contained"
                onPress={onCloseModal}
                contentStyle={{ height: 50 }}
              >
                <Text style={styles.buttonTxt}>Cancel</Text>
              </Button>
              <Button
                style={styles.button}
                mode="contained"
                onPress={onDateModalSubmit}
                contentStyle={{ height: 50 }}
              >
                <Text style={styles.buttonTxt}>Submit</Text>
              </Button>
            </View>
          </View>

        </TouchableOpacity>

      </Modal>

    </View >
  )
}

export default DateModal

const styles = StyleSheet.create({
  mainModalView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 280,
    width: 300,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  button: {
    backgroundColor: "#75ad68",
    width: 100,
    height: 30,
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 20

  },
  buttonTxt: {
    fontSize: 10,
  }
})















