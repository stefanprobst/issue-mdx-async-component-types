import type { MDXComponents } from "mdx/types";

async function MyComponent() {
	await new Promise((resolve) => setTimeout(resolve, 500))

	return <p style={{ fontSize: 72 }}>Hello from MyComponent</p>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
		MyComponent,
    ...components,
  };
}
