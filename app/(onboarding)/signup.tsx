import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, Image, ScrollView, Text, View, YStack } from 'tamagui';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import SignupImg from '../../assets/images/signup-bg.png';

const Signup = () => {
	return (
		<View bg='white' position='relative'>
			<Stack.Screen
				options={{
					title: 'Create Account',
				}}
			/>
			<Image
				zIndex={-1}
				bottom={0}
				position='absolute'
				width='100%'
				height='90%'
				source={SignupImg}
			/>
			<ScrollView bg='$backgroundTransparent' px={24} pt={39} height='100%'>
				<Text
					color='#748181'
					fontWeight='500'
					fontSize={24}
					lineHeight={32}
					mb={16}
				>
					Get started ✌🏼
				</Text>
				<Text color='#748181' fontWeight='400' fontSize={14} lineHeight={16}>
					Fill it out your information to get started
				</Text>
				<YStack pt={20}>
					<FloatingLabelInput label='Username' />
					<FloatingLabelInput
						label='Email Address'
						keyboardType='email-address'
					/>
					<FloatingLabelInput label='Phone Number' keyboardType='phone-pad' />
					<FloatingLabelInput label='Password' />
					<FloatingLabelInput label='Referral Code' />
					<Link href='/verify-phone' asChild>
						<Button
							mt={79}
							width='100%'
							borderRadius={40}
							backgroundColor='#ABB7C1'
							py={16}
							height='fit-content'
						>
							<Text color='#fff' fontSize={16} lineHeight={24}>
								Next
							</Text>
						</Button>
					</Link>
					<Text
						textAlign='center'
						mt={24}
						fontSize={14}
						lineHeight={24}
						fontWeight='500'
						color='#131515'
					>
						By creating your account you agree to Breet{' '}
						<Text color='#05A2BF'>Terms of Use</Text> and{' '}
						<Text color='#05A2BF'>Privacy Policy</Text>
					</Text>
				</YStack>
			</ScrollView>
		</View>
	);
};

export default Signup;
