import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, Image, ScrollView, Text, View, YStack } from 'tamagui';
import SignupImg from '../../assets/images/signup-bg.png';
import VerifyPhoneSuccessImg from '../../assets/images/verify-phone-success.png';

const VerifyPhoneSuccess = () => {
	return (
		<View bg='white' position='relative'>
			<Stack.Screen
				options={{
					headerShown: false,
					contentStyle: {
						borderTopWidth: 0,
					},
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
			<YStack
				bg='$backgroundTransparent'
				px={24}
				pt={39}
				height='100%'
				justifyContent='center'
				alignItems='center'
			>
				<Image width={157} height={140.7} source={VerifyPhoneSuccessImg} />
				<Text
					color='#131515'
					fontWeight='500'
					fontSize={24}
					lineHeight={27.9}
					mt={40}
					mb={16}
					textAlign='center'
				>
					Great Job!
				</Text>
				<Text
					color='#748181'
					fontWeight='500'
					fontSize={14}
					lineHeight={21}
					textAlign='center'
				>
					You have successfully verified your phone number. Let’s get to know
					you better.
				</Text>
				<Link href='/setup-profile' asChild>
					<Button
						mt={79}
						width='100%'
						borderRadius={40}
						bg='#FFE400'
						py={16}
						height='fit-content'
					>
						<Text color='#fff' fontSize={16} lineHeight={24}>
							Continue
						</Text>
					</Button>
				</Link>
			</YStack>
		</View>
	);
};

export default VerifyPhoneSuccess;
