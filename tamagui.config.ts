import { config as configBase } from '@tamagui/config';
import { createFont, createTamagui } from 'tamagui';

const bodyFont = createFont({
	family: 'Campton, Helvetica, Arial, sans-serif',
	size: {
		1: 12,
		2: 14,
		3: 15,
	},
	lineHeight: {
		// 1 will be 22
		2: 22,
	},
	weight: {
		1: '300',
		// 2 will be 300
		3: '600',
	},
	letterSpacing: {
		1: 0,
		2: -1,
		// 3 will be -1
	},
	// (native only) swaps out fonts by face/style
	face: {
		300: { normal: 'InterLight', italic: 'InterItalic' },
		600: { normal: 'InterBold' },
	},
});

export const config = createTamagui({
	...configBase,
	// defaultFont: 'Campton',
});

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
	interface TamaguiCustomConfig extends Conf {}
}
