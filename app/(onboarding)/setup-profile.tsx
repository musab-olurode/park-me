import React, { useEffect, useRef, useState } from 'react';
import { Link, Stack, useRouter } from 'expo-router';
import { Button, Image, ScrollView, Text, View, XStack, YStack } from 'tamagui';
import ProfileCarImg from '../../assets/images/profile-car-img.png';
import ProfileAvatarImg from '../../assets/images/profile-avatar-img.png';
import ProfileOwnerSelected from '../../assets/icons/profile-owner-selected.svg';
import ProfileDriver from '../../assets/icons/profile-driver.svg';
import ChevronLeftIcon from '../../assets/icons/chevron-left.svg';
import PagerView from 'react-native-pager-view';
import { BackHandler, Pressable } from 'react-native';
import FloatingLabelInput from '../../components/FloatingLabelInput';

const SetupProfile = () => {
	const router = useRouter();
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const pagerRef = useRef<PagerView>(null);

	useEffect(() => {
		const backAction = () => {
			if (currentPageIndex === 0) {
				return false;
			}

			scrollPager(currentPageIndex - 1);
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);

		return () => backHandler.remove();
	}, [currentPageIndex]);

	const scrollPager = (index: number) => {
		pagerRef.current?.setPage(index);
		setCurrentPageIndex(index);
	};

	const onPressHeaderBack = () => {
		if (currentPageIndex === 0) {
			router.back();
		} else {
			scrollPager(currentPageIndex - 1);
		}
	};

	return (
		<View bg='white'>
			<Stack.Screen
				options={{
					title: '',
					headerLeft(props) {
						return (
							<Pressable onPress={onPressHeaderBack}>
								<ChevronLeftIcon />
							</Pressable>
						);
					},
					headerRight(props) {
						return <Text>Skip</Text>;
					},
				}}
			/>
			<PagerView
				style={{
					height: '100%',
				}}
				scrollEnabled={false}
				initialPage={0}
				ref={pagerRef}
			>
				<ScrollView
					key='page-1'
					bg='$backgroundTransparent'
					px={24}
					pt={39}
					contentContainerStyle={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingBottom: 65,
					}}
				>
					<Image
						width={116.46}
						height={181.5}
						resizeMode='contain'
						source={ProfileCarImg}
					/>
					<Image
						width={92}
						height={48}
						resizeMode='contain'
						source={ProfileAvatarImg}
						alignSelf='flex-start'
					/>
					<Text
						color='#131515'
						fontWeight='500'
						fontSize={24}
						lineHeight={27.9}
						mb={16}
						mt={40}
						textAlign='center'
					>
						Ok, let’s set up your profile
					</Text>
					<Text
						color='#748181'
						fontWeight='500'
						fontSize={14}
						lineHeight={21}
						textAlign='center'
					>
						This is how you will appear on PakLag
					</Text>
					<Text
						alignSelf='flex-start'
						color='#131515'
						fontWeight='400'
						fontSize={14}
						lineHeight={21}
						mt={48}
					>
						I am registering as
					</Text>
					<XStack columnGap={24} pt={8}>
						<YStack
							alignItems='center'
							bg='#F2FDF6'
							p={12}
							borderWidth={1}
							borderColor='#23CE6B'
							borderRadius={8}
							flex={1}
						>
							<ProfileOwnerSelected />
							<Text
								fontWeight='500'
								fontSize={14}
								lineHeight={21}
								color='#153E4C'
								mt={16}
								textAlign='center'
							>
								Car Owner
							</Text>
							<Text
								fontWeight='400'
								fontSize={14}
								lineHeight={21}
								color='#748181'
								textAlign='center'
							>
								Lorem ipsum dolor sit amet conse
							</Text>
						</YStack>
						<YStack
							alignItems='center'
							p={12}
							borderWidth={1}
							borderColor='#ECEEEE'
							borderRadius={8}
							flex={1}
						>
							<ProfileDriver />
							<Text
								fontWeight='500'
								fontSize={14}
								lineHeight={21}
								color='#153E4C'
								mt={16}
								textAlign='center'
							>
								Driver
							</Text>
							<Text
								fontWeight='400'
								fontSize={14}
								lineHeight={21}
								color='#748181'
								textAlign='center'
							>
								Lorem ipsum dolor sit amet conse
							</Text>
						</YStack>
					</XStack>
					<YStack
						flexGrow={1}
						justifyContent='flex-end'
						width='100%'
						flexShrink={0}
					>
						<Button
							mt={79}
							width='100%'
							borderRadius={40}
							bg='#FFE400'
							py={16}
							height='fit-content'
							onPress={() => scrollPager(1)}
						>
							<Text color='#fff' fontSize={16} lineHeight={24}>
								Continue
							</Text>
						</Button>
					</YStack>
				</ScrollView>
				<ScrollView
					key='page-2'
					bg='$backgroundTransparent'
					px={24}
					pt={39}
					contentContainerStyle={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingBottom: 65,
					}}
				>
					<Image
						width={116.46}
						height={181.5}
						resizeMode='contain'
						source={ProfileCarImg}
						rotateZ='90deg'
					/>
					<Text
						color='#131515'
						fontWeight='500'
						fontSize={24}
						lineHeight={27.9}
						mb={16}
						mt={40}
						textAlign='center'
					>
						Enter your registered plate number
					</Text>
					<Text
						color='#748181'
						fontWeight='500'
						fontSize={14}
						lineHeight={21}
						textAlign='center'
					>
						You can add multiple vehicle or add it later
					</Text>
					<View width='100%' pt={40}>
						<FloatingLabelInput label='Plate Number' width='100%' />
					</View>
					<YStack
						flexGrow={1}
						justifyContent='flex-end'
						width='100%'
						flexShrink={0}
					>
						<Button
							mt={79}
							width='100%'
							borderRadius={40}
							backgroundColor='#ABB7C1'
							py={16}
							height='fit-content'
							onPress={() => scrollPager(2)}
						>
							<Text color='#fff' fontSize={16} lineHeight={24}>
								Continue
							</Text>
						</Button>
					</YStack>
				</ScrollView>
				<ScrollView
					key='page-3'
					bg='$backgroundTransparent'
					px={24}
					pt={39}
					contentContainerStyle={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						paddingBottom: 65,
					}}
				>
					<Image
						width={116.46}
						height={181.5}
						resizeMode='contain'
						source={ProfileCarImg}
						rotateZ='90deg'
					/>
					<Text
						color='#131515'
						fontWeight='500'
						fontSize={24}
						lineHeight={27.9}
						mt={40}
						textAlign='center'
					>
						Enter your Driver’s license number
					</Text>
					<View width='100%' pt={40}>
						<FloatingLabelInput label='License Number' width='100%' />
					</View>
					<YStack
						flexGrow={1}
						justifyContent='flex-end'
						width='100%'
						flexShrink={0}
					>
						<Link href='/verify-plate-phone' asChild>
							<Button
								mt={79}
								width='100%'
								borderRadius={40}
								backgroundColor='#ABB7C1'
								py={16}
								height='fit-content'
							>
								<Text color='#fff' fontSize={16} lineHeight={24}>
									Continue
								</Text>
							</Button>
						</Link>
					</YStack>
				</ScrollView>
			</PagerView>
		</View>
	);
};

export default SetupProfile;
