import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, YStack } from 'tamagui';
import OnboardingImg from '../assets/images/onboarding-bg.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function Home() {
	return (
		<>
			<StatusBar hidden backgroundColor='#007ECB' />
			<YStack
				flex={1}
				backgroundColor='#007ECB'
				justifyContent='flex-end'
				position='relative'
			>
				<Image
					zIndex={-1}
					top={0}
					position='absolute'
					width='100%'
					height='70%'
					source={OnboardingImg}
				/>
				<LinearGradient
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						height: '55%',
						width: '100%',
					}}
					colors={['#0B0D1000', '#232A6C']}
					locations={[0.01, 0.5]}
				/>
				<YStack px={24} pb={64} rowGap={16} alignItems='center'>
					<YStack mb={8} rowGap={16} width='90%'>
						<Text
							fontSize={32}
							fontWeight='700'
							textAlign='center'
							lineHeight={32}
							color='#fff'
						>
							Park smarter with our car parking app
						</Text>
						<Text
							fontSize={16}
							fontWeight='500'
							textAlign='center'
							lineHeight={24}
							color='#E7EFF9'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do
							eiusmod.
						</Text>
					</YStack>
					<Link href='/signup' asChild>
						<Button
							width='100%'
							borderRadius={40}
							backgroundColor='#3AB2E6'
							py={16}
							height='fit-content'
						>
							<Text color='#fff' fontSize={16} lineHeight={24}>
								Get Started
							</Text>
						</Button>
					</Link>
					<Button
						width='100%'
						variant='outlined'
						borderRadius={40}
						borderColor='#fff'
						py={16}
						height='fit-content'
					>
						<Text color='#fff' fontSize={16} lineHeight={24}>
							Log in
						</Text>
					</Button>
				</YStack>
			</YStack>
		</>
	);
}
