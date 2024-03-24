import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../tamagui-web.css';

import { config } from '../tamagui.config';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontLoaded, fontError] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
		Mulish: require('../assets/fonts/Mulish-VariableFont_wght.ttf'),
		CamptonLight: require('../assets/fonts/CamptonLight.otf'),
		CamptonMedium: require('../assets/fonts/CamptonMedium.otf'),
	});

	useEffect(() => {
		if (fontLoaded || fontError) {
			// Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
			SplashScreen.hideAsync();
		}
	}, [fontLoaded, fontError]);

	if (!fontLoaded && !fontError) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<TamaguiProvider config={config} defaultTheme={colorScheme as any}>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<SafeAreaProvider>
					<Stack
						screenOptions={{
							headerShown: false,
						}}
					/>
				</SafeAreaProvider>
			</ThemeProvider>
		</TamaguiProvider>
	);
}
