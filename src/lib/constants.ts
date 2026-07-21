export const SITE = {
  name: "Piso7 Dental",
  tagline: "Odontología de alto nivel",
  city: "Hermosillo, Sonora",
  phoneDisplay: "(662) 104 49 04",
  phoneWa: "526621044904",
  address: "Suite 710, Blvd. Francisco Eusebio Kino 315, Piso 7, Lomas Pitic, 83010 Hermosillo, Sonora",
  mapsUrl:
    "https://www.google.com/maps/place/Piso7+Dental/@29.0968092,-110.9762762,14z/data=!4m10!1m2!2m1!1shermosilo+dentistas+!3m6!1s0x86ce85d2b038e6c9:0xe0459c5c7f72c2ab!8m2!3d29.0968092!4d-110.9381674!15sChNoZXJtb3NpbG8gZGVudGlzdGFzWhYiFGhlcm1vc2lsbG8gZGVudGlzdGFzkgEHZGVudGlzdJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOSk0wNDNRVU5SRUFF4AEA-gEECCUQNw!16s%2Fg%2F11sbmb0svy?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Piso7+Dental,+Blvd.+Francisco+Eusebio+Kino+315,+Lomas+Pitic,+Hermosillo,+Sonora&z=17&output=embed",
  facebookUrl: "https://www.facebook.com/drcarlosinzunza/",
  instagramUrl: "https://www.instagram.com/drjesuscambuston/",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#nosotros", label: "Filosofía" },
  { href: "#servicios", label: "Tratamientos" },
  { href: "#equipo", label: "Especialistas" },
  { href: "#clinica", label: "El espacio" },
  { href: "#contacto", label: "Contacto" },
] as const;

export type Service = {
  code: string;
  title: string;
  description: string;
  icon: "sparkles" | "layers" | "anchor" | "aligner" | "baby" | "smile";
};

export const SERVICES: Service[] = [
  {
    code: "01",
    title: "Rehabilitación oral",
    description: "Recuperamos función, equilibrio y estética con una planeación integral y precisa.",
    icon: "layers",
  },
  {
    code: "02",
    title: "Carillas de porcelana",
    description: "Proporción, color y forma diseñados de manera individual para un resultado natural.",
    icon: "sparkles",
  },
  {
    code: "03",
    title: "Implantes dentales",
    description: "Tecnología de vanguardia y un enfoque quirúrgico seguro, claro y mínimamente invasivo.",
    icon: "anchor",
  },
  {
    code: "04",
    title: "Alineadores invisibles",
    description: "Ortodoncia discreta con seguimiento digital y un plan que acompaña tu ritmo de vida.",
    icon: "aligner",
  },
  {
    code: "05",
    title: "Odontopediatría",
    description: "Experiencias amables para que los más pequeños construyan una relación sana con su sonrisa.",
    icon: "baby",
  },
  {
    code: "06",
    title: "Diseño de sonrisa",
    description: "Análisis facial y digital para visualizar el resultado antes de comenzar el tratamiento.",
    icon: "smile",
  },
];

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  brand: string;
  bio: string;
  quote: string;
  tags: string[];
  photo?: string;
  social: { label: string; href: string }[];
};

export const DOCTORS: Doctor[] = [
  {
    slug: "inzunza",
    name: "Dr. Carlos Inzunza",
    role: "Cirujano dentista · Fundador",
    brand: "Creativo Dental",
    bio: "Combina rehabilitación oral, implantología y odontología estética con una visión clínica creativa y obsesión por el detalle.",
    quote: "Confía en tu sonrisa. Confía en mí.",
    tags: ["Rehabilitación oral", "Implantes", "Carillas"],
    photo: "/images/doctores/inzunza.jpg",
    social: [{ label: "Facebook", href: "https://www.facebook.com/drcarlosinzunza/" }],
  },
  {
    slug: "cambuston",
    name: "Dr. Jesús Cambustón",
    role: "Odontología estética",
    brand: "Aesthetic Dentistry",
    bio: "Une precisión clínica y sensibilidad estética para crear resultados que respetan cada rostro y cada historia.",
    quote: "Cada sonrisa se diseña, se cuida y se firma.",
    tags: ["Diseño de sonrisa", "Estética dental", "Carillas"],
    photo: "/images/doctores/cambuston.jpg",
    social: [{ label: "Instagram", href: "https://www.instagram.com/drjesuscambuston/" }],
  },
];

export const VALUES = [
  { code: "01", title: "Precisión", description: "Diagnóstico digital y planeación milimétrica." },
  { code: "02", title: "Calidez", description: "Explicamos cada paso con claridad y sin prisa." },
  { code: "03", title: "Estética", description: "La función guía; la sensibilidad termina el resultado." },
  { code: "04", title: "Confianza", description: "Un equipo presente antes, durante y después." },
] as const;
