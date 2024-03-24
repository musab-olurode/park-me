import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, Image, ScrollView, Text, View, YStack } from 'tamagui';
import SignupImg from '../../assets/images/signup-bg.png';
import OTPInput from '../../components/OTPInput';

const VerifyPhone = () => {
	return (
		<View bg='white' position='relative'>
			<Stack.Screen
				options={{
					title: 'Verify Phone Number',
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
			<ScrollView
				bg='$backgroundTransparent'
				px={24}
				pt={39}
				height='100%'
				display='flex'
				flexDirection='column'
				contentContainerStyle={{
					flexGrow: 1,
				}}
			>
				<Text
					color='#131515'
					fontWeight='500'
					fontSize={24}
					lineHeight={27.9}
					mb={16}
					textAlign='center'
				>
					Just one last step
				</Text>
				<Text
					color='#748181'
					fontWeight='500'
					fontSize={14}
					lineHeight={21}
					textAlign='center'
				>
					Enter the 4-digit otp sent to{' '}
					<Text color='#036C7F'>**** *** 879</Text>
				</Text>
				<View pb={24} pt={40}>
					<OTPInput />
				</View>
				<Text
					color='#748181'
					fontWeight='500'
					fontSize={14}
					lineHeight={21}
					textAlign='center'
				>
					Didn’t receive code? Resend in <Text>59s</Text>
				</Text>
				<YStack flexGrow={1} justifyContent='flex-end' pb={24}>
					<Link href='/verify-phone-success' asChild>
						<Button
							mt={79}
							width='100%'
							borderRadius={40}
							backgroundColor='#ABB7C1'
							py={16}
							height='fit-content'
						>
							<Text color='#fff' fontSize={16} lineHeight={24}>
								Submit
							</Text>
						</Button>
					</Link>
				</YStack>
			</ScrollView>
		</View>
	);
};

export default VerifyPhone;
