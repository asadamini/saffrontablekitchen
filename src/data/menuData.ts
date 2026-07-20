export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  spiceLevel?: "MILD" | "MEDIUM";
  tags?: string[];
}

export interface BiryaniItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  includes: string[];
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  includes: string[];
  pricing: { serves: number; price: string }[];
  startingPrice: string;
}

export interface CateringAddOn {
  id: string;
  name: string;
  price: string;
  unit: string;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

// ─── Trust Strip ────────────────────────────────────────────────────────────
export const trustItems: TrustItem[] = [
  {
    id: "complete-lunch-boxes",
    title: "Complete Lunch Boxes",
    description: "Meat and vegetarian entrées with rice, naan, salad, and chutneys.",
    icon: "box",
  },
  {
    id: "individually-packaged",
    title: "Individually Packaged",
    description: "Easy to distribute during meetings and office lunches.",
    icon: "package",
  },
  {
    id: "tray-catering",
    title: "Tray Catering",
    description: "Buffet packages for teams of 10 to 100+.",
    icon: "users",
  },
  {
    id: "vegetarian-options",
    title: "Vegetarian Options",
    description: "Paneer, dal, vegetable biryani, and samosas.",
    icon: "leaf",
  },
];

// ─── Ordering Format Category Cards ─────────────────────────────────────────
export const categoryCards: CategoryCard[] = [
  {
    id: "meat-lunch-box",
    title: "Meat Lunch Boxes",
    description:
      "Choose one meat entrée and one vegetarian entrée, served with Golden Cumin Basmati, naan, salad, and chutneys.",
    startingPrice: "Starting at $18.50",
    imageSrc: "category-meat-lunch-box.jpg",
    imageAlt: "Complete meat lunch box with curry, rice, naan, and chutneys",
  },
  {
    id: "vegetarian-lunch-box",
    title: "Vegetarian Lunch Box",
    description:
      "Paneer Makhani and Yellow Dal Tadka served with Golden Cumin Basmati, naan, salad, and chutneys.",
    startingPrice: "Starting at $17.50",
    imageSrc: "category-vegetarian-lunch-box.jpg",
    imageAlt: "Vegetarian lunch box with paneer, dal, rice, and naan",
  },
  {
    id: "biryani-meals",
    title: "Biryani Meals",
    description:
      "Chicken Dum Biryani or Vegetable Biryani served with cucumber raita, pickled onions, and mint chutney.",
    startingPrice: "Starting at $16.50",
    imageSrc: "category-biryani-meals.jpg",
    imageAlt: "Fragrant biryani meal with raita and chutneys",
  },
  {
    id: "tray-catering",
    title: "Tray Catering",
    description:
      "Complete Indian buffet packages with curries, grilled chicken, lamb, paneer, dal, rice, naan, appetizers, and desserts.",
    startingPrice: "Starting at $17.50",
    imageSrc: "category-tray-catering.jpg",
    imageAlt: "Indian buffet catering setup with multiple trays",
  },
];

// ─── Lunch Boxes ─────────────────────────────────────────────────────────────
export const lunchBoxes: MenuItem[] = [
  {
    id: "butter-chicken-dal",
    name: "Butter Chicken & Dal Lunch Box",
    description:
      "Butter Chicken and Yellow Dal Tadka served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$18.50",
    badge: "MOST POPULAR",
    imageSrc: "butter-chicken-dal-lunch-box.jpg",
    imageAlt:
      "Complete Indian lunch box with butter chicken, yellow dal, basmati rice, naan, cucumber salad, and chutneys.",
  },
  {
    id: "butter-chicken-paneer",
    name: "Butter Chicken & Paneer Lunch Box",
    description:
      "Butter Chicken and Paneer Makhani served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$19.50",
    imageSrc: "butter-chicken-paneer-lunch-box.jpg",
    imageAlt:
      "Indian lunch box with butter chicken and paneer makhani, basmati rice, naan, and chutneys.",
  },
  {
    id: "tandoori-dal",
    name: "Tandoori Chicken & Dal Lunch Box",
    description:
      "Char-Grilled Tandoori Chicken and Yellow Dal Tadka served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$18.50",
    imageSrc: "tandoori-chicken-dal-lunch-box.jpg",
    imageAlt:
      "Lunch box with char-grilled tandoori chicken, yellow dal, rice, and naan.",
  },
  {
    id: "tandoori-paneer",
    name: "Tandoori Chicken & Paneer Lunch Box",
    description:
      "Char-Grilled Tandoori Chicken and Paneer Makhani served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$19.50",
    imageSrc: "tandoori-chicken-paneer-lunch-box.jpg",
    imageAlt:
      "Lunch box with tandoori chicken and paneer makhani, rice, naan, and chutneys.",
  },
  {
    id: "lamb-dal",
    name: "Lamb Rogan Josh & Dal Lunch Box",
    description:
      "Lamb Rogan Josh and Yellow Dal Tadka served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$21.50",
    badge: "PREMIUM",
    imageSrc: "lamb-rogan-josh-dal-lunch-box.jpg",
    imageAlt:
      "Premium lunch box with lamb rogan josh, yellow dal, basmati rice, and naan.",
  },
  {
    id: "lamb-paneer",
    name: "Lamb Rogan Josh & Paneer Lunch Box",
    description:
      "Lamb Rogan Josh and Paneer Makhani served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$22.50",
    badge: "PREMIUM",
    imageSrc: "lamb-rogan-josh-paneer-lunch-box.jpg",
    imageAlt:
      "Premium lunch box with lamb rogan josh and paneer makhani, rice, and naan.",
  },
];

// ─── Vegetarian ───────────────────────────────────────────────────────────────
export const vegetarianItems: MenuItem[] = [
  {
    id: "paneer-dal-veg",
    name: "Paneer & Dal Vegetarian Lunch Box",
    description:
      "Paneer Makhani and Yellow Dal Tadka served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
    price: "$17.50",
    badge: "VEGETARIAN",
    imageSrc: "paneer-dal-vegetarian-lunch-box.jpg",
    imageAlt:
      "Vegetarian lunch box with paneer makhani, yellow dal, basmati rice, naan, and chutneys.",
  },
];

export const vegetarianEntrees: { name: string; description: string; spiceLevel: "MILD" | "MEDIUM"; badge: string }[] = [
  {
    name: "Paneer Makhani",
    description: "Paneer cheese simmered in a mild, creamy tomato and spice sauce.",
    spiceLevel: "MILD",
    badge: "VEGETARIAN",
  },
  {
    name: "Yellow Dal Tadka",
    description: "Yellow lentils tempered with cumin, garlic, tomato, and aromatic spices.",
    spiceLevel: "MILD",
    badge: "VEGETARIAN",
  },
];

// ─── Biryani ─────────────────────────────────────────────────────────────────
export const biryaniItems: BiryaniItem[] = [
  {
    id: "chicken-biryani",
    name: "Chicken Dum Biryani",
    description:
      "Fragrant basmati rice layered with marinated chicken, caramelized onions, herbs, and warm spices, slowly cooked for deep flavor.",
    price: "$17.50",
    imageSrc: "chicken-dum-biryani.jpg",
    imageAlt:
      "Chicken dum biryani with fragrant basmati rice, marinated chicken, and caramelized onions.",
    includes: ["Cucumber raita", "Pickled onions", "Mint chutney"],
  },
  {
    id: "veg-biryani",
    name: "Vegetable Biryani",
    description:
      "Fragrant basmati rice layered with seasonal vegetables, caramelized onions, herbs, and warm spices.",
    price: "$16.50",
    badge: "VEGETARIAN",
    imageSrc: "vegetable-biryani.jpg",
    imageAlt:
      "Vegetable biryani with fragrant basmati rice, seasonal vegetables, and caramelized onions.",
    includes: ["Cucumber raita", "Pickled onions", "Mint chutney"],
  },
];

export const fullMealUpgrade = {
  price: "+$3.50",
  includes: ["One Vegetable Samosa", "One Gulab Jamun"],
  imageSrc: "full-meal-upgrade.jpg",
  imageAlt: "Full meal upgrade with vegetable samosa and gulab jamun",
};

// ─── Appetizers ───────────────────────────────────────────────────────────────
export const appetizers: MenuItem[] = [
  {
    id: "veg-samosa",
    name: "Vegetable Samosa",
    description:
      "Crisp pastry filled with seasoned potatoes, peas, and aromatic spices, served with tamarind chutney.",
    price: "$3.50",
    imageSrc: "vegetable-samosa.jpg",
    imageAlt: "Golden vegetable samosa with tamarind chutney",
    tags: ["VEGETARIAN"],
  },
  {
    id: "veg-samosa-tray",
    name: "Vegetable Samosa Tray",
    description:
      "A catering tray of vegetable samosas served with mint and tamarind chutneys.",
    price: "$35.00",
    imageSrc: "vegetable-samosa-tray.jpg",
    imageAlt: "Catering tray of vegetable samosas with chutneys",
    tags: ["VEGETARIAN", "CATERING TRAY"],
  },
];

// ─── Rice & Bread ─────────────────────────────────────────────────────────────
export const riceAndBread: MenuItem[] = [
  {
    id: "golden-cumin-basmati",
    name: "Golden Cumin Basmati",
    description:
      "Fragrant basmati rice lightly seasoned with cumin, herbs, and mild spices.",
    price: "$4.00",
    imageSrc: "golden-cumin-basmati.jpg",
    imageAlt: "Fragrant golden cumin basmati rice",
    tags: ["VEGETARIAN"],
  },
  {
    id: "naan",
    name: "Naan",
    description: "Soft Indian flatbread baked until lightly golden.",
    price: "$3.50",
    imageSrc: "naan.jpg",
    imageAlt: "Soft plain naan flatbread",
    tags: ["VEGETARIAN"],
  },
];

// ─── Desserts ────────────────────────────────────────────────────────────────
export const desserts: MenuItem[] = [
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Soft milk-based dumplings soaked in a warm cardamom and rose-scented syrup.",
    price: "$3.50",
    imageSrc: "gulab-jamun.jpg",
    imageAlt: "Gulab jamun dumplings in rose-scented syrup",
    tags: ["VEGETARIAN"],
  },
  {
    id: "gulab-jamun-tray",
    name: "Gulab Jamun Catering Tray",
    description: "A shareable catering tray of gulab jamun for groups.",
    price: "$32.00",
    imageSrc: "gulab-jamun-tray.jpg",
    imageAlt: "Catering tray of gulab jamun for groups",
    tags: ["VEGETARIAN", "CATERING TRAY"],
  },
];

// ─── Drinks ──────────────────────────────────────────────────────────────────
export const drinks: MenuItem[] = [
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    description: "A chilled yogurt drink blended with mango.",
    price: "$4.50",
    imageSrc: "mango-lassi.jpg",
    imageAlt: "Chilled mango lassi yogurt drink",
    tags: ["SPECIALTY"],
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "Individual bottled water.",
    price: "$2.00",
    imageSrc: "bottled-water.jpg",
    imageAlt: "Individual bottled water",
  },
  {
    id: "sparkling-water",
    name: "Sparkling Water",
    description: "Individual sparkling water.",
    price: "$3.00",
    imageSrc: "sparkling-water.jpg",
    imageAlt: "Individual sparkling water",
  },
  {
    id: "canned-soda",
    name: "Canned Soda",
    description: "Assorted canned soda.",
    price: "$2.50",
    imageSrc: "canned-soda.jpg",
    imageAlt: "Assorted canned soda",
  },
  {
    id: "beverage-pack",
    name: "Beverage Pack",
    description:
      "An assortment of bottled water, sparkling water, and canned soda for groups.",
    price: "$2.75 per person",
    imageSrc: "beverage-pack.jpg",
    imageAlt: "Beverage pack with water and soda for groups",
    tags: ["GROUP"],
  },
  {
    id: "mango-lassi-pack",
    name: "Mango Lassi Pack",
    description: "Individual mango lassi drinks for group orders.",
    price: "$4.25 per person",
    imageSrc: "mango-lassi-pack.jpg",
    imageAlt: "Mango lassi pack for group orders",
    tags: ["GROUP", "SPECIALTY"],
  },
];

// ─── Catering Packages ───────────────────────────────────────────────────────
export const cateringPackages: CateringPackage[] = [
  {
    id: "classic-buffet",
    name: "Classic Indian Office Buffet",
    description:
      "A complete Indian buffet with two meat dishes, one vegetarian dish, rice, naan, salad, and chutneys.",
    imageSrc: "classic-indian-office-buffet.jpg",
    imageAlt: "Classic Indian office buffet with butter chicken, lamb, and dal",
    includes: [
      "Butter Chicken",
      "Lamb Rogan Josh",
      "Yellow Dal Tadka",
      "Golden Cumin Basmati",
      "Naan",
      "Cucumber Tomato Salad",
      "Mint Chutney",
      "Tamarind Chutney",
      "Serving Utensils",
    ],
    pricing: [
      { serves: 10, price: "$225" },
      { serves: 20, price: "$450" },
      { serves: 30, price: "$675" },
      { serves: 50, price: "$1,125" },
    ],
    startingPrice: "Starting at $22.50 per person",
  },
  {
    id: "grill-curry-buffet",
    name: "Indian Grill & Curry Buffet",
    description:
      "A balanced Indian catering spread with grilled chicken, curry, paneer, dal, rice, naan, salad, and chutneys.",
    badge: "MOST POPULAR",
    imageSrc: "indian-grill-curry-buffet.jpg",
    imageAlt: "Indian grill and curry buffet with tandoori chicken, butter chicken, and paneer",
    includes: [
      "Char-Grilled Tandoori Chicken",
      "Butter Chicken",
      "Paneer Makhani",
      "Yellow Dal Tadka",
      "Golden Cumin Basmati",
      "Naan",
      "Cucumber Tomato Salad",
      "Mint Chutney",
      "Tamarind Chutney",
      "Serving Utensils",
    ],
    pricing: [
      { serves: 10, price: "$215" },
      { serves: 20, price: "$430" },
      { serves: 30, price: "$645" },
      { serves: 50, price: "$1,075" },
    ],
    startingPrice: "Starting at $21.50 per person",
  },
  {
    id: "vegetarian-buffet",
    name: "Vegetarian Indian Buffet",
    description:
      "A complete vegetarian spread with paneer, dal, vegetable biryani, rice, naan, salad, and chutneys.",
    badge: "VEGETARIAN",
    imageSrc: "vegetarian-indian-buffet.jpg",
    imageAlt: "Vegetarian Indian buffet with paneer, dal, and vegetable biryani",
    includes: [
      "Paneer Makhani",
      "Yellow Dal Tadka",
      "Vegetable Biryani",
      "Golden Cumin Basmati",
      "Naan",
      "Cucumber Tomato Salad",
      "Mint Chutney",
      "Tamarind Chutney",
      "Serving Utensils",
    ],
    pricing: [
      { serves: 10, price: "$185" },
      { serves: 20, price: "$370" },
      { serves: 30, price: "$555" },
      { serves: 50, price: "$925" },
    ],
    startingPrice: "Starting at $18.50 per person",
  },
  {
    id: "biryani-feast",
    name: "Biryani Feast",
    description:
      "A fragrant biryani-focused catering package with chicken and vegetable biryani, raita, salad, chutneys, and samosas.",
    imageSrc: "biryani-feast.jpg",
    imageAlt: "Biryani feast catering with chicken and vegetable biryani, samosas, and chutneys",
    includes: [
      "Chicken Dum Biryani",
      "Vegetable Biryani",
      "Cucumber Raita",
      "Pickled Onions",
      "Cucumber Tomato Salad",
      "Mint Chutney",
      "Tamarind Chutney",
      "Vegetable Samosas",
      "Serving Utensils",
    ],
    pricing: [
      { serves: 10, price: "$195" },
      { serves: 20, price: "$390" },
      { serves: 30, price: "$585" },
      { serves: 50, price: "$975" },
    ],
    startingPrice: "Starting at $19.50 per person",
  },
  {
    id: "full-meal-package",
    name: "Full Indian Meal Catering Package",
    description:
      "A premium Indian catering spread with chicken, lamb, paneer, dal, rice, naan, samosas, salad, chutneys, and dessert.",
    badge: "BEST VALUE",
    imageSrc: "full-indian-meal-catering-package.jpg",
    imageAlt: "Full Indian meal catering package with multiple curries, biryani, and dessert",
    includes: [
      "Butter Chicken",
      "Char-Grilled Tandoori Chicken",
      "Lamb Rogan Josh",
      "Paneer Makhani",
      "Yellow Dal Tadka",
      "Golden Cumin Basmati",
      "Naan",
      "Vegetable Samosas",
      "Cucumber Tomato Salad",
      "Mint Chutney",
      "Tamarind Chutney",
      "Gulab Jamun",
      "Serving Utensils",
    ],
    pricing: [
      { serves: 10, price: "$255" },
      { serves: 20, price: "$510" },
      { serves: 30, price: "$765" },
      { serves: 50, price: "$1,275" },
    ],
    startingPrice: "Starting at $25.50 per person",
  },
];

// ─── Catering Add-Ons ─────────────────────────────────────────────────────────
export const cateringAddOns: CateringAddOn[] = [
  { id: "butter-chicken-tray", name: "Butter Chicken Tray", price: "$95", unit: "Serves 10" },
  { id: "lamb-tray", name: "Lamb Rogan Josh Tray", price: "$120", unit: "Serves 10" },
  { id: "tandoori-tray", name: "Tandoori Chicken Tray", price: "$90", unit: "Serves 10" },
  { id: "paneer-tray", name: "Paneer Makhani Tray", price: "$85", unit: "Serves 10" },
  { id: "dal-tray", name: "Yellow Dal Tadka Tray", price: "$55", unit: "Serves 10" },
  { id: "chicken-biryani-tray", name: "Chicken Dum Biryani Tray", price: "$95", unit: "Serves 10" },
  { id: "veg-biryani-tray", name: "Vegetable Biryani Tray", price: "$75", unit: "Serves 10" },
  { id: "basmati-tray", name: "Golden Cumin Basmati Tray", price: "$40", unit: "Serves 10" },
  { id: "naan-tray", name: "Naan Tray", price: "$35", unit: "Serves 10" },
  { id: "samosa-tray", name: "Vegetable Samosa Tray", price: "$35", unit: "Serves 10" },
  { id: "gulab-tray", name: "Gulab Jamun Tray", price: "$32", unit: "Serves 10" },
  { id: "beverage-pack-addon", name: "Beverage Pack", price: "$2.75", unit: "Per person" },
  { id: "lassi-pack-addon", name: "Mango Lassi Pack", price: "$4.25", unit: "Per person" },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqItems: FAQItem[] = [
  {
    id: "what-in-lunch-box",
    question: "What comes in an Indian lunch box?",
    answer:
      "Each meat lunch box includes one meat entrée, one vegetarian entrée, Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
  },
  {
    id: "veg-lunch-box",
    question: "What comes in the vegetarian lunch box?",
    answer:
      "The vegetarian lunch box includes Paneer Makhani, Yellow Dal Tadka, Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.",
  },
  {
    id: "biryani-standalone",
    question: "Is biryani sold with another curry?",
    answer:
      "No. Chicken Dum Biryani and Vegetable Biryani are complete standalone meals served with cucumber raita, pickled onions, and mint chutney.",
  },
  {
    id: "mild-options",
    question: "Do you offer mild options?",
    answer:
      "Yes. Butter Chicken, Paneer Makhani, and Yellow Dal Tadka are prepared as mild, office-friendly dishes. Additional heat can be served separately.",
  },
  {
    id: "veg-catering",
    question: "Do you offer vegetarian catering?",
    answer:
      "Yes. The Vegetarian Indian Buffet includes Paneer Makhani, Yellow Dal Tadka, Vegetable Biryani, rice, naan, salad, and chutneys.",
  },
  {
    id: "drinks",
    question: "Do you offer regular drinks?",
    answer:
      "Yes. Bottled water, sparkling water, canned soda, mango lassi, and beverage packs are available.",
  },
  {
    id: "how-many-people",
    question: "How many people do catering packages serve?",
    answer:
      "Standard packages are available for groups of 10, 20, 30, and 50. Larger events can be requested through the quote form.",
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks: FooterLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Lunch Boxes", href: "#menu" },
  { label: "Biryani", href: "#menu" },
  { label: "Tray Catering", href: "#catering" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#quote" },
];

export const footerLinks: FooterLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Lunch Boxes", href: "#menu" },
  { label: "Biryani", href: "#menu" },
  { label: "Tray Catering", href: "#catering" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Request a Quote", href: "#quote" },
  { label: "Order Catering", href: "#quote" },
];

// ─── Hero Trust Points ────────────────────────────────────────────────────────
export const heroTrustPoints = [
  "Complete individually packaged meals",
  "Meat and vegetarian combinations",
  "Standalone biryani meals",
  "Tray catering for groups",
  "Mild and office-friendly options",
];

// ─── Office Catering Features ─────────────────────────────────────────────────
export const officeCateringFeatures = [
  "Meat and vegetarian lunch combinations",
  "Individually packaged meals",
  "Standalone biryani meals",
  "Lamb premium options",
  "Vegetarian buffet package",
  "Full meal upgrades",
  "Catering for groups of 10 to 100+",
  "Regular drinks and mango lassi",
  "Clearly labeled meals",
];

// ─── Meal Type Options for Quote Form ────────────────────────────────────────
export const mealTypeOptions = [
  "Individual Boxes",
  "Catering Tray",
  "Not Sure",
];
