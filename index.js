module.exports = {
	"parser": "@typescript-eslint/parser",
	"env": {
		"es6": true,
		"browser": true
	},
	"extends": [
		"xo-react/space",
		"xo-space/browser",
		"xo-space/esnext",
		"xo-typescript/space"
	],
	"rules": {
		"semi": "off",
		"@typescript-eslint/semi": ["error", "never", {
			"beforeStatementContinuationChars": "never"
		}],

		"no-extra-semi": "off",

		"@typescript-eslint/no-extra-semi": ["error"],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],

		"no-unexpected-multiline": "error",

		"comma-dangle": "off",
		"@typescript-eslint/comma-dangle": ["error", "only-multiline"],

		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": ["error", "never"],

		"object-curly-spacing": "off",
		"@typescript-eslint/object-curly-spacing": ["error", "always", {
			"arraysInObjects": false,
			"objectsInObjects": true
		}],

		"brace-style": "off",
		"@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],

		"operator-linebreak": ["error", "after", {
			"overrides": {
				"?": "before",
				":": "before"
			}
		}],

		"react/jsx-curly-newline": "off",

		"react/jsx-tag-spacing": ["error", {
			"closingSlash": "never",
			"beforeSelfClosing": "always",
			"afterOpening": "never",
			"beforeClosing": "never"
		}],

		"react/prop-types": ["error", {
			"skipUndeclared": true
		}],

		"@typescript-eslint/consistent-type-assertions": ["error", {
			"assertionStyle": "as",
			"objectLiteralTypeAssertions": "never"
		}]
	}
}
