export { Layout };

import { usePageContext } from "vike-react/usePageContext";
import { Counter } from "../components/Counter.tsx";
import "../components/style.css";

// `children` includes the +Page component (and all inner +Layout components)
function Layout({ children }: { children: React.ReactNode }) {
	const { denoData } = usePageContext();

	return (
		<div style={{ padding: "20px" }}>
			<nav style={{ marginBottom: "20px" }}>
				<a href="/">Home</a> | <a href="/star-wars">Star Wars Movies</a> |
				<Counter />
				<span>Deno data from page context: {denoData}</span>
			</nav>
			<div>{children}</div>
		</div>
	);
}