import React from "react";
import VitraWebTranslator from "vitra-web-translator";

const Layout = ({ children }) => {
	return (
		<VitraWebTranslator
			apiKey="vitra.kY49hOB8TLZC66qeIvz3Et8FYNeRUe"
			glossaryId="29be87f0-ffe6-4bd8-a4ca-0b9c5323e0de"
			position="center-right"
			theme="dark"
		>
			{children}
		</VitraWebTranslator>
	);
};

export default Layout;
