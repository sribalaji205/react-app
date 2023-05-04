import React from "react";
import VitraWebTranslator from "vitra-web-translator";

const Layout = ({ children }) => {
	return (
		<VitraWebTranslator
			apiKey="vitra.FgZDHMjt5v9tONXdwJ6gK7ECmYQkEG"
			glossaryId="857e09e6-abb7-42e0-bc01-556481024a39"
			position="center-right"
			theme="dark"
		>
			{children}
		</VitraWebTranslator>
	);
};

export default Layout;
