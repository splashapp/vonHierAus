// Registry für die Landing Page. Enthält leichte Metadaten für ALLE Länder,
// auch für noch nicht gebaute ("coming-soon"). Die vollen Daten eines aktiven
// Landes liegen in `src/data/countries/<id>.js` und werden über
// `src/data/countries/index.js` nachgeschlagen.

const WM = 'https://commons.wikimedia.org/wiki/Special:FilePath';

export const countries = [
  {
    id: 'morocco',
    name: 'Marokko',
    status: 'active',
    tagline: 'Zwischen Wüste, Atlas und Atlantik',
    flagImage: { src: `${WM}/Flag_of_Morocco.svg`, alt: 'Flagge von Marokko' },
    cardImage: {
      src: `${WM}/Maroc_Marrakech_Jemaa-el-Fna_Luc_Viatour.JPG`,
      alt: 'Der Jemaa el-Fnaa in Marrakesch',
      position: '50% 70%',
    },
    theme: { primary: '#c1272d', secondary: '#046a38', accent: '#d4a017' },
  },
  {
    id: 'ethiopia',
    name: 'Äthiopien',
    status: 'active',
    tagline: 'Wiege der Menschheit, Land der 13 Sonnenmonate',
    flagImage: { src: `${WM}/Flag_of_Ethiopia.svg`, alt: 'Flagge von Äthiopien' },
    cardImage: {
      src: `${WM}/Bete_Giyorgis_03.jpg`,
      alt: 'Die Felsenkirche Bete Giyorgis in Lalibela',
      position: '50% 40%',
    },
    theme: { primary: '#A8412C', secondary: '#D9A441', accent: '#2B4570' },
  },
  {
    id: 'senegal',
    name: 'Senegal',
    status: 'active',
    tagline: 'Teranga – die Kunst der Gastfreundschaft am Atlantik',
    flagImage: { src: `${WM}/Flag_of_Senegal.svg`, alt: 'Flagge von Senegal' },
    cardImage: {
      src: `${WM}/Ile-de-goree.jpg`,
      alt: 'Die Île de Gorée vor der Küste Dakars',
      position: '50% 55%',
    },
    theme: { primary: '#00853F', secondary: '#FDEF42', accent: '#E31B1E' },
  },
  {
    id: 'egypt',
    name: 'Ägypten',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_Egypt.svg`, alt: 'Flagge von Ägypten' },
    theme: { primary: '#ce1126', secondary: '#000000', accent: '#c09300' },
  },
  {
    id: 'ghana',
    name: 'Ghana',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_Ghana.svg`, alt: 'Flagge von Ghana' },
    theme: { primary: '#ce1126', secondary: '#fcd116', accent: '#006b3f' },
  },
  {
    id: 'kenya',
    name: 'Kenia',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_Kenya.svg`, alt: 'Flagge von Kenia' },
    theme: { primary: '#000000', secondary: '#bb0000', accent: '#006600' },
  },
  {
    id: 'tanzania',
    name: 'Tansania',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_Tanzania.svg`, alt: 'Flagge von Tansania' },
    theme: { primary: '#1eb53a', secondary: '#00a3dd', accent: '#000000' },
  },
  {
    id: 'south-africa',
    name: 'Südafrika',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_South_Africa.svg`, alt: 'Flagge von Südafrika' },
    theme: { primary: '#007a4d', secondary: '#de3831', accent: '#001489' },
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    status: 'coming-soon',
    flagImage: { src: `${WM}/Flag_of_Nigeria.svg`, alt: 'Flagge von Nigeria' },
    theme: { primary: '#008751', secondary: '#ffffff', accent: '#00612f' },
  },
];
