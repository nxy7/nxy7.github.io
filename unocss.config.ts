import { defineConfig, presetAttributify, presetMini, presetUno, presetWind } from 'unocss';
import transformerVariantGroups from '@unocss/transformer-variant-group'

export default defineConfig({
	presets: [
		presetMini(),
		presetUno(),
		presetWind(),
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
