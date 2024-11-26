import { NavItem, Project } from "@/types/header"
import image1 from '../assets/images/baraka1.jpg';
import image2 from '../assets/images/baraka2.jpg';
import image3 from '../assets/images/baraka3.jpg';
import image4 from '../assets/images/havas1.jpg';
import image5 from '../assets/images/havas2.jpg';
import image6 from '../assets/images/havas3.jpg';
import image7 from '../assets/images/kamalak1.jpg';
import image8 from '../assets/images/kamalak2.jpg';
import image9 from '../assets/images/kamalak3.jpg';
export const NAV_ITEMS: NavItem[] = [
  { label: "IMMOBILIENSUCHE", href: "/immobiliensuche" },
  { label: "ANKAUF", href: "/ankauf" },
  { label: "INVESTMENT", href: "/investment" },
  { label: "IT'S CROWND", href: "/its-crownd" },
  { label: "KONTAKT", href: "/kontakt" },
]

export const PROJECTS: Project[] = [
  {
    id: "chez",
    title: "Baraka",
    image: image1,
    link: "/projects/chez",
    description: "Luxurious apartments in the heart of Vienna",
    status: "On Sale",
  },
  {
    id: "ruban",
    title: "Kamalak",
    image: image2,
    link: "/projects/ruban",
    description: "Modern living spaces with a touch of elegance",
    status: "Coming Soon",
  },
  {
    id: "two",
    title: "Havas",
    image: image3,
    link: "/projects/two",
    description: "Dual-concept apartments for versatile living",
    status: "Sold Out",
  },
  {
    id: "finest",
    title: "Orifon",
    image: image4,
    link: "/projects/finest",
    description: "Premium residences for discerning homeowners",
    status: "On Sale",
  },
  {
    id: "crownd",
    title: "Yaqinlar",
    image: image5,
    link: "/projects/crownd",
    description: "Innovative urban living solutions",
    status: "Coming Soon",
  },
  {
    id: "joe",
    title: "Bibishox",
    image: image6,
    link: "/projects/joe",
    description: "Vibrant and youthful apartment complexes",
    status: "On Sale",
  },
  {
    id: "green",
    title: "Tumor",
    image: image7,
    link: "/projects/green",
    description: "Eco-friendly residences for sustainable living",
    status: "Coming Soon",
  },
  {
    id: "skyline",
    title: "Nurafshon",
    image: image8,
    link: "/projects/skyline",
    description: "Luxury high-rise apartments with panoramic views",
    status: "On Sale",
  },
  {
    id: "urban",
    title: "ZaminJizzax",
    image: image8,
    link: "/projects/urban",
    description: "City center apartments with green spaces",
    status: "Coming Soon",
  },
  {
    id: "loft",
    title: "Minor",
    image: image9,
    link: "/projects/loft",
    description: "Converted industrial spaces for modern living",
    status: "On Sale",
  },
]

