import { useState } from "react";

const Page = () => {
	const [count, setCount] = useState(0);

	return (
		<section>
			<h1>Counter: {count}</h1>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<button
				type="button"
				onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}
			>
				Decrement
			</button>
		</section>
	);
};

export default Page;