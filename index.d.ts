declare namespace srcset {
	interface SrcSetDefinition {
		url: string;
		width?: number;
		density?: number;
	}

	interface SrcSetOptions {
		/**
		When strict mode is enabled, errors will be thrown on invalid input.

		When disabled, a best effort will be made to handle invalid input and no errors will be thrown. The output may be invalid.

		@default true
		*/
		strict?: boolean;
	}
}

declare const srcset: {
	/**
	Parse the HTML `<img>` [srcset](http://mobile.smashingmagazine.com/2013/08/21/webkit-implements-srcset-and-why-its-a-good-thing/) attribute.

	Accepts a srcset string and returns an array of objects with the possible properties: `url` (always), `width`, `density`, and `height`.

	@param srcset - A srcset string.

	@example
	```
	import srcset = require('srcset');

	console.log(srcset.parse('banner-HD.jpg 2x, banner-phone.jpg 100w'));
	// [
	// 	{
	// 		url: 'banner-HD.jpg',
	// 		density: 2
	// 	},
	// 	{
	// 		url: 'banner-phone.jpg',
	// 		width: 100
	// 	}
	// ]
	```
	*/
	parse: (srcset: string, options?: srcset.SrcSetOptions) => srcset.SrcSetDefinition[];

	/**
	Stringify `SrcSetDefinition`s. Accepts an array of `SrcSetDefinition` objects and returns a srcset string.

	@param SrcSetDefinitions - An array of `SrcSetDefinition` objects. Each object should have a `url` field and may have either `width` or `density`. When `options.strict` is set to false, a `height` field is also accepted, and multiple descriptors (`width`, `height`, and`density`) are accepted.

	@returns A srcset string.

	@example
	```
	import srcset = require('srcset');

	const stringified = srcset.stringify([
		{
			url: 'banner-HD.jpg',
			density: 2
		},
		{
			url: 'banner-phone.jpg',
			width: 100
		}
	]);

	console.log(stringified);
	// banner-HD.jpg 2x, banner-phone.jpg 100w
	```
	*/
	stringify: (srcSetDefinitions: srcset.SrcSetDefinition[], options?: srcset.SrcSetOptions) => string;
};

export = srcset;
