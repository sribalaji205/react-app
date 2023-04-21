import React from "react";
import VitraWebTranslator from "vitra-web-translator";

const Layout = ({ children }) => {
	return (
		<VitraWebTranslator
			apiKey="vitra.oVPNAOAnilCVHr0hOUM0BfAyuZDuTh"
			glossaryId="cd8db087-4158-46cf-9f8f-2bb78e07f7fa"
			position="center-right"
			theme="dark"
		>
			{children}
		</VitraWebTranslator>
	);
};

export default Layout;
