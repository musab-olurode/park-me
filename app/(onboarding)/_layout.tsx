import { Stack, useRouter } from 'expo-router';
import ChevronLeftIcon from '../../assets/icons/chevron-left.svg';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
	const router = useRouter();

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<StatusBar hidden={false} backgroundColor='#fff' />
			<Stack
				screenOptions={{
					headerShadowVisible: false,
					headerBackVisible: false,
					headerTitleAlign: 'center',
					contentStyle: {
						borderTopWidth: 1,
						borderTopColor: '#F7F7F8',
					},
					headerLeft(props) {
						return (
							<Pressable onPress={router.back}>
								<ChevronLeftIcon />
							</Pressable>
						);
					},
				}}
			/>
		</SafeAreaView>
	);
}
