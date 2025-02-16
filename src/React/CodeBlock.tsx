const CodeBlock = () => {
	return (
		<pre className="text-[var(--white)] text-sm md:text-md lg:text-xl leading-none font-[var(--font)] p-4 rounded-lg bg-neutral-900 w-fit">
			<code>
				<span className="text-orange-400">const</span> name:{" "}
				<span className="text-blue-500">string</span> ={" "}
				<span className="text-green-500">"Gledrian Gutierrez"</span>;
				<br />
				<br />
				<span className="text-orange-400">const</span> traits:{" "}
				<span className="text-blue-500">
					Traits <span className="text-yellow-400">[]</span>
				</span>{" "}
				= <span className="text-yellow-400">[</span>
				<br />
				&nbsp;&nbsp;
				<span className="text-green-500">"Software Engineer"</span>,
				<br />
				&nbsp;&nbsp;
				<span className="text-green-500">"Web Developer"</span>,
				<br />
				&nbsp;&nbsp;
				<span className="text-green-500">"AI Enthusiast"</span>,
				<br />
				<span className="text-yellow-400">]</span>;
			</code>
		</pre>
	);
};

export default CodeBlock;
