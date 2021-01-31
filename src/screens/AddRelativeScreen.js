import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, TextInput} from 'react-native-paper';

const AddRelativeScreen = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');

	console.log(firstName)
	console.log(lastName)

	return (
		<Card style={styles.card}>
		<Card.Content>
		  <Title>Add Information</Title>
		  <TextInput label="First name" value={firstName} onChangeText ={(newText) =>setFirstName(newText)}/>


		  <TextInput label="Last name" value={lastName} onChangeText ={(newText) =>setLastName(newText)} underlineColor="green" selectionColor='green'/>
		</Card.Content>
	  </Card>
	);
};

export default AddRelativeScreen;

const styles = StyleSheet.create({
	card:{
		margin: 30,
	}
});

