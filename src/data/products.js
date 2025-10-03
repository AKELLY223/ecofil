import React from "react";
import filtreCartouche from "../assets/imgs/filtre_cartouche.jpg";
import corpsFiltrant from "../assets/imgs/corps filtrant.jpg";
import equipementFiltration from "../assets/imgs/equipement.jpg";
import filtrationBypass from "../assets/imgs/filtration_by_pass.jpg";
import neuronBlanc from "../assets/imgs/neuronBlanc.jpg";
import importance from "../assets/imgs/importance.jpg";

const products = [
  {
    id: 6,
    title: "Filtration à membrane",
    description: `
    Les systèmes de filtration à membrane ECOFIL® sont conçus pour offrir une protection maximale contre les contaminants dans les huiles et fluides industriels. Grâce à leur conception modulaire, ils peuvent être facilement intégrés dans les installations existantes.
    `,
    image: importance,
    videoId: null,
    category: "filtres",
  },
  {
    id: 1,
    title: "Cartouches filtrantes",
    description: `
    La cartouche filtrante est l'élément le plus important du système de filtration. Les cartouches filtrantes mono-processus éliminent les impuretés solides, l'eau et les boues molles (sédiments, résines, vernis) . Les cartouches filtrantes sont fabriquées en fonction du type de liquide traité. Pour les liquides industriels à base de produits pétroliers, les cartouches filtrantes sont fabriquées en cellulose spéciale, fabriquée selon une recette spécifique. La cellulose est enroulée sur un mandrin par des enrouleurs contrôlés par ordinateur. L'enroulement de cellulose, qui assure une capture précise des contaminants, est spécifiquement adapté à chaque type de cartouche filtrante. La partie inférieure de la cartouche filtrante est pressée dans un anneau de papier de renfort, ce qui lui confère une densité supérieure à celle de la partie supérieure. Cette conception assure une capture progressive des contaminants. Les plus gros contaminants sont capturés dans la partie supérieure et les plus petits jusqu'à 1 µm dans la partie inférieure. L'anneau de papier dur améliore la précision de la filtration et prévient la déformation de la cartouche filtrante. Le tissu non tissé est pressé au fond de l'élément filtrant et empêche les contaminants piégés de pénétrer à nouveau dans le système. Pour faciliter le retrait de l'élément du corps du filtre, chaque élément filtrant est équipé de bandes d'extraction.

Pour les fluides industriels à base d'eau-glycol, les cartouches filtrantes de type WG, SWG sont fabriquées en tissus non tissés synthétiques (PP) et n'absorbent pas l'eau, uniquement les contaminants solides.

Les inserts WE (water eater) sont conçus pour une forte contamination de l'huile par l'eau et des conditions d'urgence.

La conception spéciale des cartouches filtrantes assure une filtration extrêmement précise et efficace. Elles éliminent une grande quantité de contaminants solides d'origine métallique et non métallique, ainsi que l'eau, sans endommager, modifier ou modifier les propriétés générales de l'huile. Elles ne retiennent ni ne retirent les additifs ni les charges de l'huile ! Grâce à la filtration ECOFIL, l'huile reste propre et intacte.
    `,

    image: filtreCartouche,
    videoId: "M68MInDxtBA",
    category: "filters",
  },

  {
    id: 2,
    title: "Corps filtrants ECOFIL",
    description: `
    Les corps de filtre ECOFIL® sont fabriqués en aluminium. Ils sont dotés d'un revêtement en poudre anticorrosion. Ils sont assemblés à partir de pièces et de sous-ensembles de première qualité , nationaux et étrangers, assemblés et rigoureusement testés en usine. Les supports de filtre sont fabriqués à partir de pièces en tôle polies au laser et façonnées à l'aide d'équipements CNC modernes. Les corps de filtre sont équipés d'un support de fixation en acier pour un montage aisé sur des surfaces horizontales et verticales. Les supports de filtre sont assemblés par vis.
    `,
    image: corpsFiltrant,
    videoId: "k7a52ZaPHbo",
    category: "filters",
  },
  {
    id: 3,
    title: "Equipements de filtration ",
    description: `
    Les dispositifs de filtration ECOFIL ® sont assemblés à partir de pièces et de sous-ensembles étrangers et nationaux de première qualité, assemblés et soigneusement testés dans l'usine de fabrication.
    `,
    image: equipementFiltration,
    videoId: null,
    category: "water",
  },
  {
    id: 4,
    title: "Filtration by-pass",
    description: `
    L'huile ne s'use pas... elle se salit simplement.

Les huiles et fluides industriels sont essentiels à de nombreux processus de fabrication et d'exploitation. Leur propreté et la qualité de leur traitement sont des facteurs clés qui influencent la fiabilité et la durée de vie des équipements industriels. L'une des solutions efficaces pour améliorer la qualité des huiles et fluides industriels est d'utiliser les technologies de filtration en dérivation ECOFIL® (by-pass, connexion hors ligne) pour leur traitement et leur filtration.
`,
    image: filtrationBypass,
    videoId: null,
    category: "oils",
  },
  {
    id: 5,
    title: "Filtration à cartouche",
    description: `
    Les systèmes de filtration à cartouche ECOFIL® sont conçus pour offrir une protection maximale contre les contaminants dans les huiles et fluides industriels. Grâce à leur conception modulaire, ils peuvent être facilement intégrés dans les installations existantes.
    `,
    image: neuronBlanc,
    videoId: null,
    category: "filtres",
  },
];

export default products;
