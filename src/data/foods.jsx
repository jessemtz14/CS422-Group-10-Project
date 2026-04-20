export const FOODS = [
  {
  name: "Gelato",
  desc: "Italian frozen dessert",
  icon: "🍨",
  about: "Gelato is an Italian-style frozen dessert made from milk, cream, sugar, and flavorings. While the base traditionally contains dairy, various flavors and production methods can introduce multiple allergens.",
  risks: [
    { flavor: "Pistachio", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
    { flavor: "Hazelnut / Nocciola", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
    { flavor: "Peanut Butter", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Peanuts" },
    { flavor: "Cookies & Cream", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Wheat" },
    { flavor: "Chocolate", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Soybeans" },
    { flavor: "Stracciatella", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" },
    { flavor: "Vanilla", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" },
    { flavor: "Custard / Egg-based", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Eggs" },
    { flavor: "Sesame Gelato (Halva)", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Sesame" },
    { flavor: "Fruit Sorbet", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9", allergen: "Dairy (possible cross-contact)" }
  ],
  alternatives: "Talenti Sorbetto, Fruit-based gelato, Coconut milk ice cream, Oat milk ice cream"
  },
  {
    name: "Gelato (Pistachio)",
    desc: "Pistachio-flavored gelato",
    icon: "🟢",
    about: "Pistachio gelato is made with real pistachio nuts blended into a dairy base, making it a high-risk dessert for those with nut allergies.",
    risks: [
      { flavor: "Pistachio Content", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Milk Base", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" }
    ],
    alternatives: "Fruit sorbet, Vanilla gelato (nut-free facility), Coconut milk ice cream"
  },
  {
    name: "Gelato (Hazelnut)",
    desc: "Hazelnut-flavored gelato",
    icon: "🟤",
    about: "Hazelnut gelato (Nocciola) is made with ground hazelnuts and a dairy base, making it unsafe for nut allergies.",
    risks: [
      { flavor: "Hazelnut Content", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Milk Base", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" }
    ],
    alternatives: "Chocolate sorbet, Fruit gelato, Oat milk ice cream"
  },
  {
    name: "Praline",
    desc: "Sugar-coated nut confection",
    icon: "🍬",
    about: "Pralines are made by coating nuts like almonds, pecans, or hazelnuts in caramelized sugar, making them inherently unsafe for nut allergies.",
    risks: [
      { flavor: "Tree Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Peanut Variants", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Peanuts" }
    ],
    alternatives: "Caramel candies, Hard candies, Toffee (nut-free)"
  },
  {
    name: "Marzipan",
    desc: "Almond-based confection",
    icon: "🟡",
    about: "Marzipan is primarily made from ground almonds and sugar, sometimes with egg whites, making it unsafe for tree nut allergies.",
    risks: [
      { flavor: "Almond Base", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Egg Whites", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Eggs" }
    ],
    alternatives: "Fondant, Modeling chocolate"
  },
  {
    name: "Nougat",
    desc: "Chewy candy with nuts",
    icon: "🍫",
    about: "Nougat is made with sugar, honey, egg whites, and often mixed with nuts like almonds or pistachios.",
    risks: [
      { flavor: "Tree Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Egg Whites", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Eggs" }
    ],
    alternatives: "Marshmallows, Fruit snacks"
  },
  {
    name: "Pesto",
    desc: "Italian basil sauce",
    icon: "🌿",
    about: "Traditional pesto contains basil, garlic, olive oil, parmesan cheese, and pine nuts, which are classified as tree nuts.",
    risks: [
      { flavor: "Pine Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Parmesan Cheese", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" }
    ],
    alternatives: "Nut-free pesto, Marinara sauce, Chimichurri"
  },
  {
    name: "Hummus",
    desc: "Chickpea-based dip",
    icon: "🫘",
    about: "Hummus is made from chickpeas, tahini (sesame paste), lemon juice, and garlic. It is generally nut-free but contains sesame.",
    risks: [
      { flavor: "Tahini", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Sesame" }
    ],
    alternatives: "Bean dip, Tzatziki"
  },
  {
    name: "Granola",
    desc: "Oat-based cereal mix",
    icon: "🥣",
    about: "Granola often contains oats, sweeteners, and a mix of nuts or seeds. Many commercial varieties include nuts.",
    risks: [
      { flavor: "Mixed Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Oats (cross-contact)", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Wheat" }
    ],
    alternatives: "Plain oatmeal, Rice cereal"
  },
  {
    name: "Pad Thai",
    desc: "Thai stir-fried noodle dish",
    icon: "🍜",
    about: "Pad Thai is commonly served with peanuts, egg, and fish sauce, introducing multiple allergens.",
    risks: [
      { flavor: "Peanuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Peanuts" },
      { flavor: "Egg", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Eggs" },
      { flavor: "Fish Sauce", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Fish" }
    ],
    alternatives: "Rice noodles without peanuts, Pho"
  },
  {
    name: "Nutella",
    desc: "Hazelnut chocolate spread",
    icon: "🫙",
    about: "Nutella is made primarily from hazelnuts and cocoa with added milk powder.",
    risks: [
      { flavor: "Hazelnuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" },
      { flavor: "Milk Powder", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" }
    ],
    alternatives: "Sunflower seed butter, Chocolate spread (nut-free)"
  },
  {
    name: "Trail Mix",
    desc: "Mixed nuts, seeds, and dried fruit",
    icon: "🥜",
    about: "Trail mix typically contains a mix of peanuts and tree nuts, making it unsafe for nut allergies.",
    risks: [
      { flavor: "Peanuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Peanuts" },
      { flavor: "Tree Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" }
    ],
    alternatives: "Seed mix, Dried fruit"
  },
  {
    name: "Apple",
    desc: "Common fresh fruit",
    icon: "🍎",
    about: "Apples are naturally free from major allergens and safe for most diets.",
    risks: [
      { flavor: "Fresh Apple", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9", allergen: "None" }
    ],
    alternatives: "Any fresh fruit"
  },
  {
    name: "Potato Chips",
    desc: "Salted crispy snack",
    icon: "🥔",
    about: "Plain potato chips are typically allergen-free, but flavored varieties may contain dairy or other additives.",
    risks: [
      { flavor: "Plain", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9", allergen: "None" },
      { flavor: "Flavored", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4", allergen: "Dairy" }
    ],
    alternatives: "Popcorn, Pretzels"
  },
  {
    name: "Peanut Butter",
    desc: "Spread made from ground peanuts",
    icon: "🥜",
    about: "Peanut butter is made entirely from peanuts and is a major allergen source.",
    risks: [
      { flavor: "Peanuts", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Peanuts" }
    ],
    alternatives: "Sunflower butter, Soy nut butter"
  },
  {
    name: "Almond Milk",
    desc: "Plant-based milk alternative",
    icon: "🥛",
    about: "Almond milk is made from blended almonds and water, making it unsuitable for tree nut allergies.",
    risks: [
      { flavor: "Almonds", risk: "High Risk", color: "firebrick", bg: "#FF9191", allergen: "Tree Nuts" }
    ],
    alternatives: "Oat milk, Soy milk, Rice milk"
  },
  {
    name: "Sunflower Seeds",
    desc: "Roasted seed snack",
    icon: "🌻",
    about: "Sunflower seeds are naturally free from tree nuts and peanuts and are often used as safe alternatives.",
    risks: [
      { flavor: "Plain", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9", allergen: "None" }
    ],
    alternatives: "Pumpkin seeds, Roasted chickpeas"
  }
];