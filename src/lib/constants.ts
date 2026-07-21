export const SITE = {
  name: "Piso7 Dental",
  tagline: "Odontología de Alto Nivel",
  city: "Hermosillo, Sonora",
  phoneDisplay: "(662) 104 49 04",
  phoneWa: "526621044904",
  mapsUrl:
    "https://www.google.com/maps/place/Piso7+Dental/@29.0968092,-110.9762762,14z/data=!4m10!1m2!2m1!1shermosilo+dentistas+!3m6!1s0x86ce85d2b038e6c9:0xe0459c5c7f72c2ab!8m2!3d29.0968092!4d-110.9381674!15sChNoZXJtb3NpbG8gZGVudGlzdGFzWhYiFGhlcm1vc2lsbG8gZGVudGlzdGFzkgEHZGVudGlzdJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOSk0wNDNRVU5SRUFF4AEA-gEECCUQNw",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Piso7+Dental,29.0968092,-110.9381674&z=16&output=embed",
  facebookUrl: "https://www.facebook.com/drcarlosinzunza/",
  instagramUrl: "https://www.instagram.com/drjesuscambuston/",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#clinica", label: "Clínica" },
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
    description:
      "Recuperamos función y estética con planes integrales pensados para casos complejos, de principio a fin.",
    icon: "layers",
  },
  {
    code: "02",
    title: "Carillas de porcelana",
    description:
      "Diseño de sonrisa a la medida: proporción, color y forma trabajados con precisión milimétrica.",
    icon: "sparkles",
  },
  {
    code: "03",
    title: "Implantes dentales",
    description:
      "Reemplazo de piezas con tecnología de vanguardia y un enfoque quirúrgico mínimamente invasivo.",
    icon: "anchor",
  },
  {
    code: "04",
    title: "Alineadores invisibles",
    description:
      "Ortodoncia discreta que acomoda tu ritmo de vida, con seguimiento digital en cada etapa.",
    icon: "aligner",
  },
  {
    code: "05",
    title: "Odontopediatría",
    description:
      "Primeras visitas y tratamientos pensados para que los más pequeños crezcan sin miedo al dentista.",
    icon: "baby",
  },
  {
    code: "06",
    title: "Diseño de sonrisa",
    description:
      "Un análisis facial y digital que define el resultado antes de comenzar cualquier tratamiento.",
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
    role: "Cirujano Dentista · Fundador",
    brand: "Creativo Dental",
    bio: "Al frente de Piso7 Dental, el Dr. Inzunza combina rehabilitación oral, implantología y odontología estética integral para toda la familia, con una visión clínica creativa y de detalle.",
    quote: "Confía en tu sonrisa. Confía en mí.",
    tags: ["Rehabilitación oral", "Implantes", "Carillas"],
    photo: "/images/doctores/inzunza.jpg",
    social: [{ label: "Facebook", href: "https://www.facebook.com/drcarlosinzunza/" }],
  },
  {
    slug: "cambuston",
    name: "Dr. Jesús Cambustón",
    role: "Odontología Estética",
    brand: "Aesthetic Dentistry",
    bio: "Especialista en diseño de sonrisa y odontología estética, el Dr. Cambustón une precisión clínica y sentido artístico en cada tratamiento que firma.",
    quote: "Cada sonrisa se diseña, se cuida y se firma.",
    tags: ["Diseño de sonrisa", "Estética dental", "Carillas"],
    photo: "/images/doctores/cambuston.jpg",
    social: [{ label: "Instagram", href: "https://www.instagram.com/drjesuscambuston/" }],
  },
];

export const VALUES = [
  {
    code: "P7·01",
    title: "Precisión",
    description: "Diagnóstico digital y planeación milimétrica antes de tocar una sola pieza.",
  },
  {
    code: "P7·02",
    title: "Calidez",
    description: "Un equipo que explica cada paso y acompaña sin apuros ni tecnicismos.",
  },
  {
    code: "P7·03",
    title: "Estética integral",
    description: "Cada tratamiento se piensa desde la función y se termina desde el arte.",
  },
  {
    code: "P7·04",
    title: "Confianza",
    description: "La misma que nos han dado cientos de pacientes en Hermosillo, cita tras cita.",
  },
] as const;
