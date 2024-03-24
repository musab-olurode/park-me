import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, Image, ScrollView, Text, View, XStack, YStack } from 'tamagui';
import SignupImg from '../../assets/images/signup-bg.png';
import PlanCard from '../../components/PlanCard';

const ChoosePlan = () => {
	return (
		<View bg='white' position='relative'>
			<Stack.Screen
				options={{
					title: 'Choose plan',
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
					color='#748181'
					fontWeight='500'
					fontSize={14}
					lineHeight={21}
					textAlign='center'
				>
					Hello, Muhandis Olagunju
				</Text>
				<Text
					color='#131515'
					fontWeight='500'
					fontSize={24}
					lineHeight={27.9}
					mb={32}
					textAlign='center'
				>
					Welcome to ParkME
				</Text>
				<YStack rowGap={24}>
					<XStack columnGap={24}>
						<View flexGrow={1}>
							<PlanCard
								selected
								bestValue
								plan='6 MONTH'
								price='₦52,999'
								features={['₦8000.33/month', 'Free 7 Day Trial']}
							/>
						</View>
						<View flexGrow={1}>
							<PlanCard
								plan='3 MONTH'
								price='₦35,999'
								features={['₦10000.33/month', 'Free 7 Day Trial']}
							/>
						</View>
					</XStack>
					<XStack columnGap={24}>
						<View flexGrow={1} flexShrink={0}>
							<PlanCard
								plan='1 MONTH'
								price='₦12,999'
								features={['Billed Monthly']}
							/>
						</View>
						<View flexGrow={1} flexShrink={0}>
							<PlanCard plan='PAY FOR A DAY' price='₦500/24hrs' />
						</View>
					</XStack>
					<View>
						<PlanCard
							plan='PAY AS YOU GO'
							price='₦300'
							features={['Billed per parking']}
						/>
					</View>
				</YStack>
				<YStack flexGrow={1} flexShrink={0} justifyContent='flex-end' pb={24}>
					<Button
						mt={79}
						width='100%'
						borderRadius={40}
						bg='#FFE400'
						py={16}
						height='fit-content'
					>
						<Text color='#fff' fontSize={16} lineHeight={24}>
							Submit
						</Text>
					</Button>
				</YStack>
			</ScrollView>
		</View>
	);
};

export default ChoosePlan;
