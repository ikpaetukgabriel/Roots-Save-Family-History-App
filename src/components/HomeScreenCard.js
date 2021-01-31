import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

const message = {
	avatar: '../../assets/cook.png',
	title: 'Temple work',
	quote:
		"Don't underestimate the influence of the deceased in assisting your efforts and the joy of ultimately meeting those you serve. The eternally significant blessing of uniting our own families is almost beyond comprehension.",
	details: '—Elder Quentin L. Cook, “Roots and Branches”'
};

const HomeScreenCard = () => {
	console.log(message.avatar);
	return (
		<View style={{ paddingTop: 100 }}>
			<Card style={styles.card}>
				<Card.Content>
					<Title>
						<View style={styles.avaterTitleContainer}>
							<Avatar.Image size={55} source={require('../../assets/cook.png')} />
							<Text style={styles.cardTitle}>{message.title}</Text>
						</View>
					</Title>
					<Paragraph>
						<Text style={styles.cardParagraph}>{`"${message.quote}"`}</Text>
					</Paragraph>
					<View style={styles.detailsContainer}>
						<Text style={styles.details}>{message.details}</Text>
					</View>
				</Card.Content>
			</Card>
		</View>
	);
};

export default HomeScreenCard;

const styles = StyleSheet.create({
	card: {
		width: 300,
		height: 300,
		borderRadius: 15,
		backgroundColor: 'rgba(255, 255,255 , 0.85)'
	},
	avaterTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	cardTitle: {
		marginLeft: 25,
		fontSize: 20,
		fontWeight: 'bold'
	},
	cardParagraph: {
		fontSize: 16
	},
	detailsContainer: {
		marginTop: 10
	},
	details: {
		fontStyle: 'italic'
	}
});
