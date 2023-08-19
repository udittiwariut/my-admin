module.exports = (phase, { defaultConfig }) => {
	if ("sassOptions" in defaultConfig) {
		defaultConfig["sassOptions"] = {
			includePaths: ["./"],
			prependData: `@import "./styles/scss/foundation/_all.scss";`,
			rule: [
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
			],
		};
	}

	return defaultConfig;
};
