const CodeBlock = () => {
	return (
		<div>
			<div className="bg-neutral-700 text-white px-4 py-1 rounded-t-md flex items-center justify-center relative">
				<span className="absolute left-4 text-gray-400 text-lg">
					● ● ●
				</span>
				<span className="text-white">AboutMe.ts</span>
			</div>

			<pre className="text-[var(--white)] text-sm md:text-md lg:text-lg font-[var(--font)] p-4 bg-neutral-900">
				<code>
					<span className="text-orange-400">const</span> name:{" "}
					<span className="text-blue-500">string</span> ={" "}
					<span className="text-green-500">"Gledrian Gutierrez"</span>
					;
					<br />
					<br />
					<span className="text-orange-400">const</span> traits:{" "}
					<span className="text-blue-500">
						Traits <span className="text-yellow-400">[]</span>
					</span>{" "}
					= <span className="text-yellow-400">[</span>
					<br />
					&nbsp;&nbsp;
					<span className="text-green-500">"Software Engineer"</span>
					,
					<br />
					&nbsp;&nbsp;
					<span className="text-green-500">
						"Fullstack Web Developer"
					</span>
					,
					<br />
					<span className="text-yellow-400">]</span>;
				</code>
			</pre>
		</div>
	);
};

export default CodeBlock;
