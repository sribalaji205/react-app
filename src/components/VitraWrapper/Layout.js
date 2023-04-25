import React from "react";
import VitraWebTranslator from "vitra-web-translator";

const Layout = ({ children }) => {
	return (
		<VitraWebTranslator
			apiKey="vitra.b8Fes0SfivO6FzM3fzZmZhnQpj_oRs"
			glossaryId="ff324dc4-3936-4960-8308-2c6e98030f16"
			position="center-right"
			theme="dark"
		>
			{children}
		</VitraWebTranslator>
	);
};

export default Layout;
