import packagingFloor from "../../assets/gallery/packaging floor.webp";
import extrusionLine from "../../assets/gallery/Extrusion Line.webp";
import polyRolls from "../../assets/gallery/polly rolls.webp";
import cartonStack from "../../assets/gallery/carton stack.webp";
import corrugator from "../../assets/gallery/corrugator.webp";
import dieCutSection from "../../assets/gallery/Die Cut Section.webp";
import warehouse from "../../assets/gallery/warehouse.webp";
import printedPoly from "../../assets/gallery/Printed Poly.webp";

const galleryData = [
  {
    id: 1,
    title: "Factory Floor",
    category: "Factory",
    image: packagingFloor,
    height: "tall",
  },
  {
    id: 2,
    title: "Extrusion Line",
    category: "Machine",
    image: extrusionLine,
    height: "short",
  },
  {
    id: 3,
    title: "Poly Rolls",
    category: "Poly",
    image: polyRolls,
    height: "short",
  },
  {
    id: 4,
    title: "Carton Stack",
    category: "Carton",
    image: cartonStack,
    height: "short",
  },
  {
    id: 5,
    title: "Corrugator",
    category: "Machine",
    image: corrugator,
    height: "short",
  },
  {
    id: 6,
    title: "Die Cut Section",
    category: "Carton",
    image: dieCutSection,
    height: "tall",
  },
  {
    id: 7,
    title: "Warehouse",
    category: "Factory",
    image: warehouse,
    height: "short",
  },
  {
    id: 8,
    title: "Printed Poly",
    category: "Poly",
    image: printedPoly,
    height: "short",
  },
];

export default galleryData;