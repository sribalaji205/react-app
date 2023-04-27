import React from "react";
import VitraWebTranslator from "vitra-web-translator";

const Layout = ({ children }) => {
	return (
		<VitraWebTranslator
			apiKey="vitra._vq5BCFmIwhHewcPtb5mznCo1mehrJ"
			glossaryId="24b6d493-4875-41b7-b6b6-b5540d19f0cb"
			position="center-right"
			theme="dark"
		>
			{children}
		</VitraWebTranslator>
	);
};

export default Layout;
