import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerVariantGroups from '@unocss/transformer-variant-group'

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify()
	],

	transformers: [
		transformerVariantGroups()
	],
	theme: {
		// ...
		colors: {
			'primary': '#114B5F', // class="text-very-cool"
			'secondary': "#F45B69",
			'bgDark': '#37123C'
		},
	}
});
