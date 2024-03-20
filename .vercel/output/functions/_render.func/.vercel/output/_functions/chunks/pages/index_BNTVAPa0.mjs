/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, s as spreadAttributes } from '../astro_DxAj7np4.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SliderNav, a as $$Layout, C as CARD, R as REASONS, F as FATES } from './_slug__B0h88ROm.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$n = createAstro();
const $$TitleTours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$TitleTours;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full mx-auto flex flex-col justify-center items-center"> <h2 class=" md:text-5xl text-3xl font-semibold relative mb-8 mt-8"> ${name} <span class="block w-[100%] h-1 bg-[#7f3812] pt-2 mt-2"></span> </h2> </section>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Tours/TitleTours.astro", void 0);

const $$Astro$m = createAstro();
const $$MainTours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MainTours;
  const { name, img, description, link, option1, option2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ${option1}`, "class")}> <div${addAttribute(`h-96 ${option2}`, "class")}> <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"${addAttribute(img, "src")}> </div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"> <h1 class="font-dmserif text-3xl font-bold text-white">${name}</h1> <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">${description}</p> <a class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"${addAttribute(link, "href")}>Conoce mas</a> </div> </div>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Tours/MainTours.astro", void 0);

const LIMA_TOURS = [
  {
    name: 'City Tour',
    img: '/img/Lima/CityTour.webp',
    description: 'Descubre la vibrante ciudad de Lima con nuestro CityTour. Explora sus modernos distritos, sitios históricos y sumérgete en la rica cultura limeña.',
    link: './city-tour-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Tours Temáticos',
    img: '/img/Lima/TourTematico.webp',
    description: 'Personaliza tu experiencia con nuestros Tours Temáticos. Desde la gastronomía hasta la historia, elige el tema que más te apasione y disfruta de un viaje único.',
    link: './tematico',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Museos Religiosos',
    img: '/img/Lima/MuseoReligioso.webp',
    description: 'Sumérgete en la espiritualidad con nuestra Visita a Museos Religiosos. Explora las joyas arquitectónicas y artísticas que narran la historia de la religión en Lima.',
    link: './museos-religiosos-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Museos Arqueológicos',
    img: '/img/Lima/MuseoArqueologico.webp',
    description: 'Embárcate en un viaje al pasado con nuestra Visita a Museos Arqueológicos. Descubre la fascinante herencia preincaica e incaica que resguardan estos museos.',
    link: './museos-arqueologicos-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Full Day',
    img: '/img/Lima/FullDay.webp',
    description: 'Vive un día completo de aventuras con nuestro servicio Full Day. Desde playas hasta montañas, disfruta de una experiencia inolvidable en los alrededores de Lima.',
    link: './full-day',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Weekend',
    img: '/img/Lima/Weekend.webp',
    description: 'Escápate por un fin de semana con nuestro servicio Weekend. Explora paisajes impresionantes, disfruta de la hospitalidad peruana y relájate en una experiencia de 2 días y 1 noche.',
    link: './weekend',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const NATIONAL_TOURS = [
  {
    name: 'Amazonas',
    img: '/img/National/Amazonas.webp',
    description: 'Descubre la biodiversidad única del Amazonas peruano, con excursiones a la selva, observación de aves y encuentros culturales con comunidades indígenas.',
    link: './amazonas',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Ancash',
    img: '/img/National/Ancash.webp',
    description: 'Disfruta de la impresionante Cordillera Blanca, lagunas turquesa y la cultura ancestral en Huaraz, sede de deportes de aventura como el trekking y montañismo.',
    link: './ancash',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Arequipa',
    img: '/img/National/Arequipa.webp',
    description: 'Conocida como la "Ciudad Blanca", ofrece arquitectura colonial, el majestuoso cañón del Colca y una exquisita gastronomía.',
    link: './arequipa',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Cajamarca',
    img: '/img/National/Chanchamayo.webp',
    description: 'Sumérgete en la historia precolombina y colonial, con sus baños del Inca, la plaza principal y la deliciosa gastronomía local.',
    link: './cajarmarca',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Cusco',
    img: '/img/National/Cusco.webp',
    description: 'Antigua capital del Imperio Inca, ahora conocida por sus ruinas, como Sacsayhuamán, y como punto de partida para Machu Picchu y el Valle Sagrado.',
    link: './cusco',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Huancavelica',
    img: '/img/National/Ica.webp',
    description: 'Explora sus minas de mercurio, la arquitectura colonial y paisajes naturales como el Bosque de Piedras de Huayllay.',
    link: './huancavelica',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Iquitos',
    img: '/img/National/Iquitos.webp',
    description: 'Puerta de entrada a la Amazonía peruana, ofrece paseos en bote por el río Amazonas, avistamiento de delfines rosados y encuentros con tribus amazónicas.',
    link: './iquitos',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Lambayeque',
    img: '/img/National/Lambayeque.webp',
    description: 'Descubre la cultura Moche en el complejo arqueológico de Sipán, la belleza de las pirámides de Túcume y la gastronomía norteña.',
    link: './lambayeque',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Piura',
    img: '/img/National/Piura.webp',
    description: 'Disfruta de sus hermosas playas como Máncora, la reserva natural de Amotape y la deliciosa gastronomía norteña.',
    link: './piura',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Puno',
    img: '/img/National/Puno.webp',
    description: 'Explora el místico Lago Titicaca, con sus islas flotantes de los Uros y Taquile, y sumérgete en la rica cultura andina de la región.',
    link: './puno',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const INTERNATIONAL_TOURS = [
  {
    name: 'Sudamérica',
    img: '/img/International/Africa.webp',
    description: 'Desde la asombrosa selva del Amazonas hasta la majestuosidad de los Andes, Sudamérica te invita a explorar una tierra llena de contrastes naturales, culturales e históricos.',
    link: './sudamerica',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]', // 350 450 400
    option2: ''
  },
  {
    name: 'Caribe',
    img: '/img/International/Argentina.webp',
    description: 'Desde las playas paradisíacas de Cancún hasta la riqueza histórica de La Habana, el Caribe te invita a disfrutar de un destino lleno de sol, música y cultura.',
    link: './caribe',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Norteamérica',
    img: '/img/International/Asia.webp',
    description: 'De los rascacielos de Nueva York a los paisajes imponentes del Gran Cañón, Norteamérica ofrece una amplia variedad de experiencias para todos los gustos.',
    link: './norteamerica',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Europa',
    img: '/img/International/Brasil.webp',
    description: 'Desde los canales de Venecia hasta la Torre Eiffel en París, Europa te espera con su encanto histórico, su arte incomparable y su diversidad cultural.',
    link: './europa',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Asia',
    img: '/img/International/Chile.webp',
    description: 'Desde la modernidad de Tokio hasta los templos ancestrales de Angkor Wat, Asia te sumerge en un mundo de contrastes, sabores y tradiciones milenarias.',
    link: './asia',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'África',
    img: '/img/International/Colombia.webp',
    description: 'Recorre la sabana africana en busca de los "Cinco Grandes" o explora las ruinas de antiguas civilizaciones en Egipto: África te invita a vivir aventuras épicas y descubrimientos fascinantes.',
    link: './africa',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const ESCOLAR_TOURS = [
  {
    name: 'Visita de Estudios',
    img: '/img/Escolar/VisitaEscolar.webp',
    description: 'Amplía el conocimiento de tus estudiantes con nuestras Visitas de Estudios, diseñadas para ofrecer experiencias educativas enriquecedoras fuera del aula.',
    link: './visita-de-estudios',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Viaje de Estudios',
    img: '/img/Escolar/ViajeEscolar.webp',
    description: 'Transforma el aprendizaje en una aventura con nuestros Viajes de Estudios, donde combinamos educación y exploración para crear recuerdos duraderos.',
    link: './viaje-de-estudios',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Viaje de Promoción',
    img: '/img/Escolar/PromocionEscolar.webp',
    description: 'Celebra el logro académico con nuestros Viajes de Promoción. Ofrecemos experiencias emocionantes y seguras para que los estudiantes celebren juntos su éxito.',
    link: './viaje-de-promocion',
    option1: 'md:w-[920px] max-w-[400px] min-w-[360px]',
    option2: 'md:col-span-2 col-span-1'
  }
];

const SUDAMERICA_TOURS = [
  {
    name: 'Argentina',
    img: '/img/International/Sudamerica/Argentina.webp',
    description: 'Argentina ofrece una mezcla única de paisajes impresionantes, cultura vibrante y una rica historia que cautiva a los visitantes de todo el mundo.',
    link: './argentina',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Brasil',
    img: '/img/International/Sudamerica/Brasil.webp',
    description: 'Sumérgete en la exuberante selva del Amazonas, baila al ritmo del samba en las playas de Río de Janeiro y explora la diversidad natural y cultural que define a Brasil',
    link: './brasil',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Chile',
    img: '/img/International/Sudamerica/Chile.webp',
    description: 'Desde el desierto de Atacama hasta los glaciares de la Patagonia, Chile te invita a descubrir una tierra de contrastes extraordinarios',
    link: './chile',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Colombia',
    img: '/img/International/Sudamerica/Brasil.webp',
    description: 'Colombia ofrece una experiencia única donde la historia, la cultura y la naturaleza se entrelazan para crear un destino fascinante para los viajeros aventureros.',
    link: './colombia',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const CARIBE_TOURS = [
  {
    name: 'Cancún',
    img: '/img/International/Caribe/Cancun.webp',
    description: 'Cancún ofrece una experiencia vacacional inigualable donde la belleza natural se combina con la emoción y la aventura.',
    link: './cancun',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Punta Cana',
    img: '/img/International/Caribe/PuntaCana.webp',
    description: 'Sumérgete en el paraíso caribeño de Punta Cana, donde las interminables playas de arena blanca se encuentran con las aguas cristalinas del mar Caribe.',
    link: './punta-cana',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const NORTEAMERICA_TOURS = [
  {
    name: 'México',
    img: '/img/International/Norteamerica/Mexico.webp',
    description: 'Sumérgete en la energía vibrante de la Ciudad de México, donde la historia, la cultura y la modernidad se entrelazan para crear una experiencia única.',
    link: './mexico',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Estados Unidos',
    img: '/img/International/Norteamerica/EstadosUnidos.webp',
    description: 'Descubre la ciudad que nunca duerme, donde los icónicos rascacielos se alzan sobre calles llenas de diversidad cultural y una emocionante escena artística.',
    link: './estados-unidos',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const WEEKEND_TOURS = [
  {
    name: 'Paracas y Huacachina',
    img: '/img/Lima/Weekend/Huacho.webp',
    description: 'Disfruta de un fin de semana relajante en Huacho, una encantadora ciudad costera al norte de Lima. Explora sus playas tranquilas y su deliciosa gastronomía local.',
    link: './paracas-huacachina',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Huaral y Chancay',
    img: '/img/Lima/Weekend/Canete.webp',
    description: 'Sumérgete en la rica historia y la belleza natural de Cañete durante un fin de semana emocionante. Descubre sus pintorescos pueblos, sus ruinas arqueológicas y su exquisita comida.',
    link: './huaral-chancay',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Cieneguilla y Pachacamac',
    img: '/img/Lima/Weekend/Ica.webp',
    description: 'Vive una aventura inolvidable en Ica durante un fin de semana lleno de diversión y emoción. Explora sus dunas de arena, prueba el delicioso pisco y visita las misteriosas Líneas de Nazca.',
    link: './cieneguilla-pachacamac',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Valle de las Lomas',
    img: '/img/Lima/Weekend/Chincha.webp',
    description: 'Descubre la cultura afroperuana y la herencia colonial de Chincha durante un fin de semana en esta fascinante ciudad. Disfruta de su música, danzas y exquisita gastronomía.',
    link: './valle-lomas-santa-eulalia',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Lunahuaná y Antioquía',
    img: '/img/Lima/Weekend/Paracas.webp',
    description: 'Embárcate en una escapada de fin de semana a Paracas y maravíllate con sus paisajes deslumbrantes y su increíble vida marina. Explora sus playas, islas y reserva natural.',
    link: './lunahuana-antioquia',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Canta y Obrajillo',
    img: '/img/Lima/Weekend/Lunahuana.webp',
    description: 'Vive la emoción de un fin de semana en Lunahuaná, un paraíso para los amantes de la aventura y la naturaleza. Disfruta del rafting, la bicicleta de montaña y la deliciosa comida local.',
    link: './canta-obrajillo',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const FULLDAYS_TOURS = [
  {
    name: 'Museo Larco',
    img: '/img/Lima/Full-Days/Lunahuana.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './museo-larco',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Pachacamac',
    img: '/img/Lima/Full-Days/Huaral.webp',
    description: 'Descubre la belleza natural y cultural de Huaral en un día lleno de experiencias únicas. Visita sus cascadas, haciendas históricas y disfruta de su exquisita gastronomía.',
    link: './pachacamac',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Centro Histórico',
    img: '/img/Lima/Full-Days/IslasPalomino.webp',
    description: 'Embárcate en una aventura única en las Islas Palomino, donde podrás nadar con lobos marinos y disfrutar de la belleza de la vida marina en un entorno natural impresionante.',
    link: './centro-historico',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Circuito Mágico del Agua',
    img: '/img/Lima/Full-Days/Antioquia.webp',
    description: 'Sumérgete en la historia y la cultura de Antioquía durante un día de exploración en esta encantadora ciudad colonial. Visita sus iglesias, plazas y disfruta de su tranquilo ambiente.',
    link: './circuito-magico-agua',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Reserva Nacional de Lachay',
    img: '/img/Lima/Full-Days/ValleSagrado.webp',
    description: 'Descubre la magia del Valle Sagrado en un día lleno de maravillas naturales y arqueológicas. Visita sus ruinas incas, pueblos pintorescos y disfruta de sus impresionantes paisajes.',
    link: './reserva-lachay',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Barranco',
    img: '/img/Lima/Full-Days/Paracas.webp',
    description: 'Explora la impresionante belleza natural de Paracas en un día emocionante lleno de aventuras. Visita la Reserva Nacional de Paracas, las Islas Ballestas y disfruta de sus playas vírgenes.',
    link: './barranco',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const THEME_TOURS = [
  {
    name: 'Tour Cultural',
    img: '/img/Lima/Full-Days/Lunahuana.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './tour-cultural-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Tour de Naturaleza',
    img: '/img/Lima/Full-Days/Huaral.webp',
    description: 'Descubre la belleza natural y cultural de Huaral en un día lleno de experiencias únicas. Visita sus cascadas, haciendas históricas y disfruta de su exquisita gastronomía.',
    link: './tour-naturaleza-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Tour Arquitectónico',
    img: '/img/Lima/Full-Days/IslasPalomino.webp',
    description: 'Embárcate en una aventura única en las Islas Palomino, donde podrás nadar con lobos marinos y disfrutar de la belleza de la vida marina en un entorno natural impresionante.',
    link: './tour-arquitectonico-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Tour Gastronómico',
    img: '/img/Lima/Full-Days/Antioquia.webp',
    description: 'Sumérgete en la historia y la cultura de Antioquía durante un día de exploración en esta encantadora ciudad colonial. Visita sus iglesias, plazas y disfruta de su tranquilo ambiente.',
    link: './tour-gastronomico-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const VIAJEESCOLAR_TOURS = [
  {
    name: 'Explorando la Reserva de Lachay',
    img: '/img/Escolar/Viaje-De-Estudios/Chiclayo.webp',
    description: 'Sumérgete en la rica historia y cultura de Chiclayo durante un viaje de estudios emocionante, donde podrás explorar sus museos, ruinas y delicias culinarias.',
    link: './explorando-reserva-lachay',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Aventura en Antioquía',
    img: '/img/Escolar/Viaje-De-Estudios/Arequipa.webp',
    description: 'Descubre la majestuosidad de Arequipa en un viaje educativo que te llevará a explorar su arquitectura colonial, su gastronomía única y sus paisajes impresionantes.',
    link: './aventura-antioquia',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Explorando el Valle de las Lomas',
    img: '/img/Escolar/Viaje-De-Estudios/Trujillo.webp',
    description: 'Sumérgete en la historia precolombina y colonial de Trujillo durante un viaje educativo que te llevará a explorar sus monumentos, museos y sitios arqueológicos.',
    link: './explorando-valle-lomas',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Descubriendo Lunahuaná',
    img: '/img/Escolar/Viaje-De-Estudios/Cuzco.webp',
    description: 'Embárcate en un viaje educativo a Cuzco y descubre la antigua capital del Imperio Inca, con sus impresionantes ruinas, arquitectura colonial y vibrante cultura.',
    link: './descubriendo-lunahuana',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const VISITAESCOLAR_TOURS = [
  {
    name: 'Museo de la Cultura Peruana',
    img: '/img/Escolar/Visita-De-Estudios/RealFelipe.webp',
    description: 'Explora la historia militar peruana en el Real Felipe, una fortaleza imponente que protegió el puerto de El Callao durante siglos.',
    link: './museo-cultura-peruana',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Planetario de Lima',
    img: '/img/Escolar/Visita-De-Estudios/MuseoDeArte.webp',
    description: 'Sumérgete en el mundo del arte en el MALI, donde podrás admirar una vasta colección de obras que reflejan la riqueza cultural del Perú.',
    link: './planetario-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Museo de Arte de Lima',
    img: '/img/Escolar/Visita-De-Estudios/MuseoNacion.webp',
    description: 'Descubre la fascinante historia del Perú en el Museo de la Nación, que alberga artefactos y exposiciones que cuentan la historia del país.',
    link: './museo-arte-lima',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Biblioteca Nacional del Perú',
    img: '/img/Escolar/Visita-De-Estudios/PlanetarioLima.webp',
    description: 'Embárcate en un viaje cósmico en el Planetario de Lima, donde podrás explorar el universo y aprender sobre la astronomía de manera interactiva.',
    link: './biblioteca-nacional-peru',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const PROMOCIONESCOLAR_TOURS = [
  {
    name: 'Selva Amazónica',
    img: '/img/Escolar/Viaje-De-Promocion/Trujillo.webp',
    description: 'Descubre la belleza arquitectónica y cultural de Trujillo en un viaje de promoción que te llevará a explorar sus plazas, iglesias y sitios arqueológicos.',
    link: './selva-amazonica',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Explorando Piura y Tumbes',
    img: '/img/Escolar/Viaje-De-Promocion/Huancayo.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './explorando-piura-tumbes',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Cancún',
    img: '/img/Escolar/Viaje-De-Promocion/Cajamarca.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './cancun',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Travesía por las Huacas',
    img: '/img/Escolar/Viaje-De-Promocion/Chiclayo.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './travesia-huacas',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Explorando el Valle Sagrado',
    img: '/img/Escolar/Viaje-De-Promocion/Paracas.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './valle-sagrado-cusco',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  },
  {
    name: 'Aventura en el Cañón del Colca',
    img: '/img/Escolar/Viaje-De-Promocion/Cancun.webp',
    description: 'Disfruta de un día lleno de emociones en Lunahuaná, donde podrás practicar deportes de aventura como el rafting y la canotaje, rodeado de paisajes impresionantes.',
    link: './aventura-canon-colca',
    option1: 'lg:w-[450px] max-w-[400px] min-w-[360px]',
    option2: ''
  }
];

const $$Astro$l = createAstro();
const $$Index$d = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Index$d;
  const IMG_SLIDER = {
    img1: "/img/Escolar/Viaje-De-Estudios/ViajeSlider1.webp",
    img2: "/img/Escolar/Viaje-De-Estudios/ViajeSlider2.webp",
    img3: "/img/Escolar/Viaje-De-Estudios/ViajeSlider3.webp",
    img4: "/img/Escolar/Viaje-De-Estudios/ViajeSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viaje de Estudios", "description": "Viaje de Estudios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Viaje de Estudios" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${VIAJEESCOLAR_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-estudios/index.astro", void 0);

const $$file$d = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-estudios/index.astro";
const $$url$d = "/tour-escolar/viaje-de-estudios";

const index$d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$d,
    file: $$file$d,
    url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$k = createAstro();
const $$Index$c = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Index$c;
  const IMG_SLIDER = {
    img1: "/img/Escolar/Viaje-De-Promocion/PromocionSlider1.webp",
    img2: "/img/Escolar/Viaje-De-Promocion/PromocionSlider2.webp",
    img3: "/img/Escolar/Viaje-De-Promocion/PromocionSlider3.webp",
    img4: "/img/Escolar/Viaje-De-Promocion/PromocionSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viaje de Promoci\xF3n", "description": "Viaje de Promoci\xF3n" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Viaje de Promoci\xF3n" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${PROMOCIONESCOLAR_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-promocion/index.astro", void 0);

const $$file$c = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-promocion/index.astro";
const $$url$c = "/tour-escolar/viaje-de-promocion";

const index$c = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$c,
    file: $$file$c,
    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$j = createAstro();
const $$Index$b = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$b;
  const IMG_SLIDER = {
    img1: "/img/Escolar/Visita-De-Estudios/VisitaSlider1.webp",
    img2: "/img/Escolar/Visita-De-Estudios/VisitaSlider2.webp",
    img3: "/img/Escolar/Visita-De-Estudios/VisitaSlider3.webp",
    img4: "/img/Escolar/Visita-De-Estudios/VisitaSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Visita de Estudios", "description": "Visita de Estudios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Visita de Estudios" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${VISITAESCOLAR_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/visita-de-estudios/index.astro", void 0);

const $$file$b = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/visita-de-estudios/index.astro";
const $$url$b = "/tour-escolar/visita-de-estudios";

const index$b = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$b,
    file: $$file$b,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro();
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Index$a;
  const IMG_SLIDER = {
    img1: "/img/Escolar/EscolarSlider1.webp",
    img2: "/img/Escolar/EscolarSlider2.webp",
    img3: "/img/Escolar/EscolarSlider3.webp",
    img4: "/img/Escolar/EscolarSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Escolares", "description": "Tours Escolares" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Escolares" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${ESCOLAR_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/index.astro", void 0);

const $$file$a = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/index.astro";
const $$url$a = "/tour-escolar";

const index$a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$a,
    file: $$file$a,
    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$h = createAstro();
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Index$9;
  const IMG_SLIDER = {
    img1: "/img/International/Caribe/CaribeSlider1.webp",
    img2: "/img/International/Caribe/CaribeSlider2.webp",
    img3: "/img/International/Caribe/CaribeSlider3.webp",
    img4: "/img/International/Caribe/CaribeSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Caribe", "description": "Tours Caribe" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Caribe" })} ${maybeRenderHead()}<section class="flex min-h-[50vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${CARIBE_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/caribe/index.astro", void 0);

const $$file$9 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/caribe/index.astro";
const $$url$9 = "/tour-internacional/caribe";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$9,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro();
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$8;
  const IMG_SLIDER = {
    img1: "/img/International/Norteamerica/NorteamericaSlider1.webp",
    img2: "/img/International/Norteamerica/NorteamericaSlider2.webp",
    img3: "/img/International/Norteamerica/NorteamericaSlider3.webp",
    img4: "/img/International/Norteamerica/NorteamericaSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Norteamerica", "description": "Tours Norteamerica" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Norteamerica" })} ${maybeRenderHead()}<section class="flex min-h-[50vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${NORTEAMERICA_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/norteamerica/index.astro", void 0);

const $$file$8 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/norteamerica/index.astro";
const $$url$8 = "/tour-internacional/norteamerica";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$8,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$7;
  const IMG_SLIDER = {
    img1: "/img/International/Sudamerica/SudamericaSlider1.webp",
    img2: "/img/International/Sudamerica/SudamericaSlider2.webp",
    img3: "/img/International/Sudamerica/SudamericaSlider3.webp",
    img4: "/img/International/Sudamerica/SudamericaSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Sudamerica", "description": "Tours Sudamerica" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Sudamerica" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${SUDAMERICA_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/sudamerica/index.astro", void 0);

const $$file$7 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/sudamerica/index.astro";
const $$url$7 = "/tour-internacional/sudamerica";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$7,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$6;
  const IMG_SLIDER = {
    img1: "/img/International/InternationalSlider1.webp",
    img2: "/img/International/InternationalSlider2.webp",
    img3: "/img/International/InternationalSlider3.webp",
    img4: "/img/International/InternationalSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Internacionales", "description": "Tours Internacionales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Internacionales" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${INTERNATIONAL_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/index.astro", void 0);

const $$file$6 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/index.astro";
const $$url$6 = "/tour-internacional";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$6,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$5;
  const IMG_SLIDER = {
    img1: "/img/Lima/Full-Days/Full-DaysSlider1.webp",
    img2: "/img/Lima/Full-Days/Full-DaysSlider2.webp",
    img3: "/img/Lima/Full-Days/Full-DaysSlider3.webp",
    img4: "/img/Lima/Full-Days/Full-DaysSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Full Days", "description": "Full Days" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Full Days" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${FULLDAYS_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/full-day/index.astro", void 0);

const $$file$5 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/full-day/index.astro";
const $$url$5 = "/tour-lima/full-day";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$5,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$4;
  const IMG_SLIDER = {
    img1: "/img/Lima/Full-Days/Full-DaysSlider1.webp",
    img2: "/img/Lima/Full-Days/Full-DaysSlider2.webp",
    img3: "/img/Lima/Full-Days/Full-DaysSlider3.webp",
    img4: "/img/Lima/Full-Days/Full-DaysSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Full Days", "description": "Full Days" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Full Days" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${THEME_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/tematico/index.astro", void 0);

const $$file$4 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/tematico/index.astro";
const $$url$4 = "/tour-lima/tematico";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$3;
  const IMG_SLIDER = {
    img1: "/img/Lima/Weekend/WeekendSlider1.webp",
    img2: "/img/Lima/Weekend/WeekendSlider2.webp",
    img3: "/img/Lima/Weekend/WeekendSlider3.webp",
    img4: "/img/Lima/Weekend/WeekendSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Weekend", "description": "Weekend" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Weekend" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${WEEKEND_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/weekend/index.astro", void 0);

const $$file$3 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/weekend/index.astro";
const $$url$3 = "/tour-lima/weekend";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$2;
  const IMG_SLIDER = {
    img1: "/img/Lima/LimaSlider1.webp",
    img2: "/img/Lima/LimaSlider2.webp",
    img3: "/img/Lima/LimaSlider3.webp",
    img4: "/img/Lima/LimaSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Lima", "description": "Tours Lima" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Lima" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${LIMA_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/index.astro", void 0);

const $$file$2 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/index.astro";
const $$url$2 = "/tour-lima";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$1;
  const IMG_SLIDER = {
    img1: "/img/National/NationalSlider1.webp",
    img2: "/img/National/NationalSlider2.webp",
    img3: "/img/National/NationalSlider3.webp",
    img4: "/img/National/NationalSlider4.webp"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours Nacionales", "description": "Tours Nacionales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SliderNav", $$SliderNav, { "image1": IMG_SLIDER.img1, "image2": IMG_SLIDER.img2, "image3": IMG_SLIDER.img3, "image4": IMG_SLIDER.img4, "h": "md:h-[50vh]" })} ${renderComponent($$result2, "TitleTours", $$TitleTours, { "name": "Tours Nacionales" })} ${maybeRenderHead()}<section class="flex min-h-[70vh] justify-center items-center px-4"> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w-[920px]"> ${NATIONAL_TOURS.map((tour) => renderTemplate`${renderComponent($$result2, "MainTours", $$MainTours, { ...tour })}`)} </div> </section> ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-nacional/index.astro", void 0);

const $$file$1 = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-nacional/index.astro";
const $$url$1 = "/tour-nacional";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$ArrowLeftIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArrowLeftIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Icons/ArrowLeftIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$ArrowRightIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArrowRightIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Icons/ArrowRightIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$FeaturedTours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FeaturedTours;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col min-h-[70vh] items-center justify-center max-w-[1300px] px-6 h-[80vh] mx-auto" id="FeaturedTours" data-astro-cid-sz7u3oca> <h2 class=" text-3xl font-semibold relative mb-8 mt-8" data-astro-cid-sz7u3oca>
Tours Destacados
<span class="block w-[100%] h-1 bg-[#7f3812] pt-2 mt-2" data-astro-cid-sz7u3oca></span> </h2> <div class="carousel h-full w-full overflow-hidden relative" data-astro-cid-sz7u3oca> <div class="list" data-astro-cid-sz7u3oca> ${CARD.map((card) => renderTemplate`<div class="item w-full h-full absolute inset-0" data-astro-cid-sz7u3oca> <img${addAttribute(card.image, "src")} class="w-full h-full object-cover" data-astro-cid-sz7u3oca> <div class="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_40%)]" data-astro-cid-sz7u3oca> <div class="author text-black font-bold tracking-[10px]" data-astro-cid-sz7u3oca>Descubre</div> <div class="title text-white font-bold leading-[1.3em] text-3xl md:text-6xl" data-astro-cid-sz7u3oca>${card.title}</div> <div class="topic font-bold leading-[1.3em] text-[#763910] md:text-5xl text-2xl" data-astro-cid-sz7u3oca>Desde ${card.price}</div> <div class="des text-black/100 font-semibold bg-white/50 w-fit text-pretty md:block hidden" data-astro-cid-sz7u3oca> ${card.description} </div> <div class="buttons mt-4" data-astro-cid-sz7u3oca> <a${addAttribute(card.link, "href")} class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" data-astro-cid-sz7u3oca>Conoce mas</a> </div> </div> </div>`)} </div> <div class="thumbnail absolute bottom-[50px] left-[50%] w-[max-content] z-[100] flex gap-[20px]" data-astro-cid-sz7u3oca> ${CARD.map((card) => renderTemplate`<div class="item w-[150px] h-[220px] shrink-[0] relative" data-astro-cid-sz7u3oca> <img${addAttribute(card.image, "src")} class="w-full h-full object-cover rounded-[20px]" data-astro-cid-sz7u3oca> <div class="content text-white absolute bottom-[10px] left-[10px] right-[10px]" data-astro-cid-sz7u3oca> <div class="title font-semibold" data-astro-cid-sz7u3oca> ${card.title} </div> <div class="description font-light" data-astro-cid-sz7u3oca>
Desde ${card.price} </div> </div> </div>`)} </div> <div class="arrows absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center" data-astro-cid-sz7u3oca> <button id="prev" class="bg-[#763910]/60 hover:bg-[#763910] text-white hover:text-black w-[40px] h-[40px] rounded-full border-none font-bold transition-all duration-500 flex justify-center items-center" data-astro-cid-sz7u3oca> ${renderComponent($$result, "ArrowLeftIcon", $$ArrowLeftIcon, { "data-astro-cid-sz7u3oca": true })} </button> <button id="next" class="bg-[#763910]/60 hover:bg-[#763910] text-white hover:text-black w-[40px] h-[40px] rounded-full border-none font-bold transition-all duration-500 flex justify-center items-center" data-astro-cid-sz7u3oca> ${renderComponent($$result, "ArrowRightIcon", $$ArrowRightIcon, { "data-astro-cid-sz7u3oca": true })} </button> </div> <div class="time absolute z-[1000] w-0 h-[3px] bg-[#f1683a] left-0 top-0" data-astro-cid-sz7u3oca></div> </div> </section>  `;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main/FeaturedTours.astro", void 0);

const $$Astro$5 = createAstro();
const $$ButtonSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ButtonSection;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center rounded-md shadow-sm pt-4 relative z-[10]"> <a href="#AboutUs" aria-current="page" class="scroll-smooth px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
Quienes Somos
</a> <a href="#FeaturedTours" class="scroll-smooth px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
Tours Destacados
</a> <a href="#OurFates" class="scroll-smooth px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-l border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
Nuestros Destinos
</a> <a href="#ContactUs" class="scroll-smooth px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
Contactanos
</a> </div>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main/ButtonSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-[1300px] my-8 flex flex-col md:flex-row md:items-center mx-auto relative z-[10]" id="AboutUs"> <!-- Columna de Texto --> <div class="w-full md:w-1/2 p-6"> <h2 class=" text-3xl font-semibold w-fit relative mb-4 text-black">
Aventur Travel
<span class="block w-full h-1 bg-[#7f3812] pt-2 mt-2"></span> </h2> <p class="text-gray-600 pb-4">En Aventur Travel, no somos solo una agencia de viajes; somos narradores de historias, arquitectos de aventuras y amantes de la exploración. Nuestro compromiso va más allá de organizar un viaje; nos esforzamos por crear experiencias que enriquezcan tu vida y despierten tu espíritu aventurero.</p> <p class="text-gray-600">Desde las maravillas escondidas en los rincones de Perú hasta los destinos exóticos en tierras lejanas, somos tu puerta de entrada a un mundo lleno de descubrimientos. Nos enorgullece ofrecer no solo destinos espectaculares, sino momentos inolvidables que se convertirán en parte de tu propia historia de viaje.</p> </div> <!-- Columna de Imagen --> <div class="w-full md:w-1/2 p-6"> <img src="/img/CarouselMain/CarouselMain5.webp" alt="Descripción de la imagen" class="w-full h-auto rounded-md"> </div> </section>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main/AboutUs.astro", void 0);

const $$Astro$3 = createAstro();
const $$WhyChooseUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhyChooseUs;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col min-h-[70vh] items-center justify-center "> <h2 class=" text-3xl font-semibold relative mb-8 mt-8 ">
¿Por qué elegirnos?
<span class="block w-[100%] h-1 bg-[#7f3812] pt-2 mt-2"></span> </h2> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-8"> ${REASONS.map(({ reason, description, bgimg }) => renderTemplate`<div${addAttribute(`group relative dark:bg-[#7f3812]/30 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`, "class")}> <div${addAttribute(`h-96 w-72`, "class")}> ${bgimg.map((bg) => renderTemplate`${renderComponent($$result, "bg.icon", bg.icon, { "class": "h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" })}`)} </div> <div class="absolute inset-0 bg-gradient-to-b group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"> <h1 class="font-dmserif text-3xl font-bold dark:text-[#e4aa0f] text-black group-hover:text-white ">${reason}</h1> <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">${description}</p> </div> </div>`)} </div> </section>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main/WhyChooseUs.astro", void 0);

const $$Astro$2 = createAstro();
const $$OurFates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$OurFates;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col min-h-[70vh] items-center justify-center px-3" id="OurFates"> <h2 class=" text-3xl font-semibold relative mb-8 mt-8">
Nuestros Destinos
<span class="block w-[100%] h-1 bg-[#7f3812] pt-2 mt-2"></span> </h2> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8 justify-center items-center max-w[1300px]"> ${FATES.map(({ name, description, img, option, option2, link }) => renderTemplate`<div${addAttribute(`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ${option2}`, "class")}> <div${addAttribute(`h-96 ${option}`, "class")}> <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"${addAttribute(img, "src")}> </div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"> <h1 class="font-dmserif text-3xl font-bold text-white">${name}</h1> <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">${description}</p> <a class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"${addAttribute(link, "href")}>Conoce mas</a> </div> </div>`)} </div> </section>`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main/OurFates.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  const IMAGES = [
    "img/CarouselMain/CarouselMain1.webp",
    "img/CarouselMain/CarouselMain2.webp",
    "img/CarouselMain/CarouselMain3.webp",
    "img/CarouselMain/CarouselMain4.webp"
  ];
  return renderTemplate`${renderComponent($$result, "SliderNav", $$SliderNav, { "image1": IMAGES[0], "image2": IMAGES[1], "image3": IMAGES[2], "image4": IMAGES[3], "h": "bg-transparent md:h-[90vh]" })} ${renderComponent($$result, "ButtonSection", $$ButtonSection, { "class": "bg-transparent" })} ${renderComponent($$result, "AboutUs", $$AboutUs, { "class": "bg-transparent" })} ${renderComponent($$result, "FeaturedTours", $$FeaturedTours, { "class": "bg-transparent" })} ${renderComponent($$result, "WhyChooseUs", $$WhyChooseUs, { "class": "bg-transparent" })} ${renderComponent($$result, "OurFates", $$OurFates, { "class": "bg-transparent" })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aventur Travel", "description": "Agencia de Viajes Aventur Travel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {})} ` })}`;
}, "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/index.astro", void 0);

const $$file = "C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$c as a, index$b as b, index$a as c, index$9 as d, index$8 as e, index$7 as f, index$6 as g, index$5 as h, index$d as i, index$4 as j, index$3 as k, index$2 as l, index$1 as m, index as n };
