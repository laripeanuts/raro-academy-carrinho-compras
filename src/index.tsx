import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
