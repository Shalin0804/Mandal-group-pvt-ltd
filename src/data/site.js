// All client content lives here. Replace placeholders with real details.
import { GraduationCap, BriefcaseBusiness, Building2, Droplets, ShieldCheck, Eye, CalendarClock, Users, Handshake, Award, HardHat, MessagesSquare } from 'lucide-react'


// Unsplash placeholder images. To use your own photos, drop them in
// src/assets/images/, import them here and pass the import instead of img().
const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const site = {
  name: 'Mandal Group',
  legalName: 'Mandal Group Private Limited',
  motto: 'Hamari Koshish, hamari mehnat, Safalta ki ek nayi suruat',
  tagline: 'Residential Construction',
  phone: '+91 99320 08273',
  email: 'mandalgroupstv0826@gmail.com',
  whatsapp: '919932008273', // country code + number, digits only
  address: 'C/O Narayan Shinde, At Post Songaon, Jawali, Satara – 415514, Maharashtra',
  // Keyless Google Maps embed. For an exact pin, replace with the src from Google Maps > Share > Embed a map.
  mapEmbedUrl: 'https://maps.google.com/maps?q=' + encodeURIComponent('Songaon, Jawali, Satara, Maharashtra 415514') + '&z=13&output=embed',
}

export const images = {
  hero: img('1600596542815-ffad4c1539a9', 1920),
  about: img('1503387762-592deb58ef4e', 1000),
  aboutBanner: img('1541888946425-d81bb19240f5', 1920),
  projectsBanner: img('1600585154340-be6161a56a0c', 1920),
  contactBanner: img('1600607687939-ce8a6c25118c', 1920),
  servicesBanner: img('1504307651254-35680f356dfd', 1920),
}

// Services as provided by the client. `details` shows on the Our Services page only.
export const services = [
  {
    icon: GraduationCap,
    title: "Skills Development (Labour's Training)",
    text: 'Practical training that helps workers build job-ready skills and grow their livelihoods.',
    details: 'We train labourers in practical, on-the-job skills so they can work with confidence, earn better and take up skilled roles on construction and development projects.',
    image: img('1621905251918-48416bd8575a', 900),
    alt: 'Worker in a safety helmet carrying out skilled electrical work',
  },
  {
    icon: BriefcaseBusiness,
    title: "Skilled Labour's Placements",
    text: 'Connecting trained, skilled workers with the projects and employers that need them.',
    details: 'We connect trained and skilled workers with employers and projects that need them, helping workers find steady employment and helping projects find reliable manpower.',
    image: img('1541888946425-d81bb19240f5', 900),
    alt: 'Team of construction workers at a project site',
  },
  {
    icon: Building2,
    title: 'Rural and Urban Development',
    text: 'Development work that improves infrastructure and living conditions in villages and cities.',
    details: 'We take up development work in both rural and urban areas, contributing to better infrastructure, facilities and living conditions for the communities we serve.',
    image: img('1477959858617-67f85cf4f1df', 900),
    alt: 'Aerial view of a developed city',
  },
  {
    icon: Droplets,
    title: 'Water Purify and Supply',
    text: 'Clean, purified drinking water supplied to homes, sites and communities.',
    details: 'We provide purified water and its supply, making safe and clean drinking water available to households, work sites and communities.',
    image: img('1548839140-29a749e1cf4d', 900),
    alt: 'Clean water being poured into a glass',
  },
]

export const reasons = [
  { icon: ShieldCheck, title: 'Quality Materials', text: 'We use reliable, tested materials suited to long-lasting residential construction.' },
  { icon: Eye, title: 'Transparent Process', text: 'Clear estimates, honest communication and no hidden surprises along the way.' },
  { icon: CalendarClock, title: 'Timely Execution', text: 'Planned schedules and disciplined site management to keep your project on track.' },
  { icon: Users, title: 'Client-First Approach', text: 'Your requirements guide every decision, from the first drawing to final handover.' },
]

export const values = [
  { icon: Handshake, title: 'Integrity', text: 'Honest advice, fair pricing and commitments we keep.' },
  { icon: Award, title: 'Quality', text: 'Attention to detail in every foundation, wall and finish.' },
  { icon: HardHat, title: 'Safety', text: 'Safe sites and safe homes for workers and families alike.' },
  { icon: MessagesSquare, title: 'Communication', text: 'Regular updates so you always know where your project stands.' },
]

// Sample projects — replace with real ones. `status` is optional; omit it to hide the badge.
export const projects = [
  { name: 'Contemporary Family Villa', location: 'City, State', image: img('1613490493576-7fde63acd811', 900), description: 'A two-storey villa with open living spaces, large windows and a landscaped front lawn.', status: 'Completed' },
  { name: 'Modern Duplex Residence', location: 'City, State', image: img('1600585154340-be6161a56a0c', 900), description: 'Clean architectural lines, a double-height living area and efficient use of natural light.', status: 'Ongoing' },
  { name: 'Garden View Home', location: 'City, State', image: img('1564013799919-ab600027ffc6', 900), description: 'A family home designed around outdoor living, with a private garden and relaxed interiors.' },
  { name: 'Classic Bungalow', location: 'City, State', image: img('1570129477492-45c003edd2be', 900), description: 'A single-level bungalow combining traditional charm with modern comfort and planning.' },
  { name: 'Urban Townhouse', location: 'City, State', image: img('1580587771525-78b9dba3b914', 900), description: 'A compact multi-level townhouse that maximises space on a city plot.' },
  { name: 'Hillside Residence', location: 'City, State', image: img('1512917774080-9991f1c4c750', 900), description: 'A premium residence with spacious terraces and wide views of its surroundings.' },
]

export const gallery = [
  { src: img('1600607687939-ce8a6c25118c', 800), alt: 'Bright modern living room interior' },
  { src: img('1600566753190-17f0baa2a6c3', 800), alt: 'Modern home exterior with timber cladding' },
  { src: img('1541888946425-d81bb19240f5', 800), alt: 'Construction team inspecting a building site' },
  { src: img('1605276374104-dee2a0ed3cd6', 800), alt: 'Brick family home with double garage' },
  { src: img('1504307651254-35680f356dfd', 800), alt: 'Workers fixing steel reinforcement on site' },
  { src: img('1576941089067-2de3c901e126', 800), alt: 'White family home with a front garden' },
]
