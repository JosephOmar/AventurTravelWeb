/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_DxAj7np4.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SliderNav, a as $$Layout } from './_slug__B0h88ROm.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$Nosotros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aventur Travel", "description": "Agencia de Viajes Aventur Travel", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": "/img/National/NationalSlider1.webp", "image2": "/img/National/NationalSlider2.webp", "image3": "/img/National/NationalSlider3.webp", "image4": "/img/National/NationalSlider4.webp", "h": "md:h-[50vh]", "data-astro-cid-noeej2nj": true })} ${maybeRenderHead()}<div class="about-section " data-astro-cid-noeej2nj> <div class="inner-container" data-astro-cid-noeej2nj> <h1 data-astro-cid-noeej2nj>Sobre Nosotros</h1> <p class="text" data-astro-cid-noeej2nj>
En Aventur Travel, convertimos tus sueños en destinos inolvidables. Nos dedicamos a ofrecerte experiencias únicas y emocionantes que te conectan con el mundo de una manera inolvidable. Con un equipo apasionado y experto en viajes, estamos comprometidos a diseñar itinerarios personalizados que se adapten a tus deseos y necesidades. Desde aventuras de montaña hasta retiros en la playa, estamos aquí para hacer realidad tus sueños de viaje. Descubre el mundo con Aventur Travel y haz que cada momento cuente.
</p> <div class="skills" data-astro-cid-noeej2nj> <span data-astro-cid-noeej2nj>Aventura</span> <span data-astro-cid-noeej2nj>Naturaleza</span> <span data-astro-cid-noeej2nj>Cultura</span> </div> </div> </div> ` })} `;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/nosotros.astro";
const $$url = "/nosotros";

export { $$Nosotros as default, $$file as file, $$url as url };
