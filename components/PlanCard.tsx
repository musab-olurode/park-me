import { Text, View, YStack } from 'tamagui';

type PlanCardProps = {
	plan: string;
	price: string;
	features?: string[];
	selected?: boolean;
	bestValue?: boolean;
};

const PlanCard = ({
	plan,
	price,
	features,
	selected,
	bestValue,
}: PlanCardProps) => {
	return (
		<YStack
			flexGrow={1}
			borderWidth={1}
			borderColor='#ECEEEE'
			borderRadius={10}
			py={23}
			px={16}
			backgroundColor={selected ? '#0396D6' : '$backgroundTransparent'}
			justifyContent='center'
			position='relative'
		>
			{bestValue && (
				<View
					borderWidth={1}
					borderColor='#ECEEEE'
					bg='#FFFFFF'
					borderRadius={4}
					position='absolute'
					top={-11}
					left={16}
					px={14}
					py={5}
				>
					<Text color='#7C99F2' fontSize={9} fontWeight='500' lineHeight={10.4}>
						Best Value
					</Text>
				</View>
			)}
			<Text
				color={selected ? '#fff' : '#333333'}
				fontSize={10}
				fontWeight='400'
				lineHeight={11.64}
				mb={5}
			>
				{plan}
			</Text>
			<Text
				color={selected ? '#fff' : '#333333'}
				fontSize={20}
				fontWeight='500'
				lineHeight={23.28}
				mb={10}
			>
				{price}
			</Text>
			{features &&
				features.map((feature) => (
					<Text
						color={selected ? '#fff' : '#333333'}
						fontSize={9}
						fontWeight='400'
						lineHeight={10.4}
						key={feature}
					>
						• {feature}
					</Text>
				))}
		</YStack>
	);
};

export default PlanCard;
