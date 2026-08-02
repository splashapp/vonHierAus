import { SITE_URL } from '../components/shared/PageMeta.jsx';

// Baut eine kurze, generierte Meta-Description aus tagline + Land — kein eigenes Datenfeld
// pro Land nötig, die tagline ist ohnehin schon ein griffiger Werbesatz.
export function countryMetaDescription(data) {
  return `${data.tagline} – entdecke ${data.name} virtuell: Fakten, Küche, Reiseziele, Musik, Sprachführer und mehr.`;
}

export function countryOgImage(data) {
  const slide = data.heroSlides?.length ? data.heroSlides[0] : data.heroImage;
  return slide?.src;
}

// TouristDestination fürs Land + Recipe je Gericht — Recipe ist die Google-Rich-Snippet-
// fähige Auszeichnung, TouristDestination ordnet die Seite inhaltlich ein. Bewusst KEINE
// Quiz/FAQPage-Auszeichnung: die Quiz-Fragen sind kein echter FAQ-Content, das wäre
// Structured-Data-Missbrauch im Sinne von Googles Richtlinien.
export function buildCountryJsonLd(data) {
  const url = `${SITE_URL}/${data.id}`;

  const destination = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: data.name,
    description: countryMetaDescription(data),
    url,
    image: countryOgImage(data),
    ...(data.facts?.capitalCoords && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.facts.capitalCoords.lat,
        longitude: data.facts.capitalCoords.lon,
      },
    }),
  };

  const recipes = (data.dishes ?? []).map((dish) => ({
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: dish.name,
    description: dish.shortDesc,
    image: dish.image?.src,
    recipeCuisine: data.name,
    recipeIngredient: dish.recipe?.ingredients,
    recipeInstructions: (dish.recipe?.steps ?? []).map((step) => ({
      '@type': 'HowToStep',
      text: step,
    })),
  }));

  return [destination, ...recipes];
}
