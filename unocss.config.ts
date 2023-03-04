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
			'primary': '#0000ff', // class="text-very-cool"
			'secondary': "#000000"
		},
	}
});
