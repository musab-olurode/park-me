import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { View, Input, Text, InputProps } from 'tamagui';

interface FloatingLabelInputProps extends InputProps {
	label: string;
}

const FloatingLabelInput = ({
	onChangeText,
	...props
}: FloatingLabelInputProps) => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState('');
	const moveText = useRef(new Animated.Value(5)).current;

	useEffect(() => {
		if (value !== '') {
			moveTextTop();
		}
	}, [value]);

	useEffect(() => {
		moveTextBottom();
	}, []);

	const onChangeComponentText = (text: string) => {
		setValue(text);
		if (onChangeText) {
			onChangeText(text);
		}
	};

	const onFocusHandler = () => {
		setIsActive(true);
		moveTextTop();
	};

	const onBlurHandler = () => {
		setIsActive(false);

		if (value === '') {
			moveTextBottom();
		}
	};

	const moveTextTop = () => {
		Animated.timing(moveText, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const moveTextBottom = () => {
		Animated.timing(moveText, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const yVal = moveText.interpolate({
		inputRange: [0, 1],
		// -12.5 is how high up to move the label
		outputRange: [4, -22.5],
	});

	const animStyle = {
		transform: [
			{
				translateY: yVal,
			},
		],
	};

	return (
		<View position='relative' pt={20}>
			<Animated.View
				pointerEvents='none'
				style={[styles.animatedStyle, animStyle]}
			>
				<Text
					fontWeight='400'
					fontSize={14}
					lineHeight={16}
					color='#748181'
					bg='#fff'
					px={4}
				>
					{props.label}
				</Text>
			</Animated.View>
			<Input
				py={12}
				color='#748181'
				bg='#fff'
				borderColor='#DFE2E2'
				fontSize={14}
				lineHeight={16}
				height='fit-content'
				value={value}
				style={[isActive && styles.activeInput]}
				onChangeText={(text: string) => onChangeComponentText(text)}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				blurOnSubmit
				borderRadius={8}
				{...props}
				placeholder={undefined}
			/>
		</View>
	);
};
export default FloatingLabelInput;

const styles = StyleSheet.create({
	activeInput: {
		borderColor: '#05A2BF',
	},
	animatedStyle: {
		top: 36,
		left: 18,
		position: 'absolute',
		borderRadius: 90,
		zIndex: 10000,
	},
});
