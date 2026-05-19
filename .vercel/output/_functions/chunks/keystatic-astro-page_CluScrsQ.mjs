import { c as createComponent } from './astro-component_69_zbALv.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate } from './entrypoint_tcEtlPBt.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/portfólio/Portfólio-site/Blog/astro-o-que-me-tira-o-sono/meu-blog/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "C:/portfólio/Portfólio-site/Blog/astro-o-que-me-tira-o-sono/meu-blog/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/portfólio/Portfólio-site/Blog/astro-o-que-me-tira-o-sono/meu-blog/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
