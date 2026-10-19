export const contact = {
  name: "JAS'AUTO",
  street: "155T rue Ampère",
  zip: "36000",
  city: "Châteauroux",
  phone: "0699666367",
  phoneDisplay: "06 99 66 63 67",
};

export const brands = [
  { name: "Renault", models: ["Scenic II", "Laguna II"] },
  { name: "Peugeot", models: ["307"] },
  { name: "BMW", models: ["E90"] },
  { name: "Tesla", models: [] as string[] },
];

export const categories = [
  "Cardan de transmission",
  "Capteur pression d'huile",
  "Pompe de direction assistée",
  "Pompe à injection",
  "Carrosserie",
  "Joint",
  "Visserie",
  "Thermocontact de ventilateur de radiateur",
  "Sonde de température (liquide refroidissement)",
];

export const featured = [
  { title: "Sonde température Renault Clio I, Megane I, Trafic I…", brand: "Calorstat by Vernet", price: 50, image: "/pieces/sonde-1.jpg" },
  { title: "Sonde température Renault, Opel, Volvo, Mitsubishi…", brand: "Calorstat by Vernet", price: 20, image: "/pieces/sonde-2.jpg" },
  { title: "Sonde température Citroën, Peugeot, Fiat…", brand: "Calorstat by Vernet", price: 15, image: "/pieces/sonde-3.jpg" },
  { title: "Sonde température Renault Laguna I, Kangoo I, Espace III…", brand: "Calorstat by Vernet", price: 20, image: "/pieces/sonde-4.jpg" },
  { title: "Sonde température Alfa-Romeo, Lancia, Fiat…", brand: "Calorstat by Vernet", price: 60, image: "/pieces/sonde-5.jpg" },
  { title: "Sonde température Alfa-Romeo, Chrysler, Jeep, Saab…", brand: "Calorstat by Vernet", price: 15, image: "/pieces/sonde-6.jpg" },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: 2 }) + " €";
