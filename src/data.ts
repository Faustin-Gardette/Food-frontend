type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilienne",
    desc: "Enflammez vos papilles gustatives avec une combinaison fougueuse de pepperoni épicé, de jalapeños, de flocons de piment rouge broyés et de fromage mozzarella fondu, donnant un coup de pied à chaque bouchée.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Offrez-vous des délices fumés avec une galette de bœuf grillée à la flamme, garnie de bacon croustillant, de fromage cheddar fondu, d'oignons caramélisés et d'une touche de sauce barbecue piquante.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Napolitaine",
    desc: "Un délice italien classique avec une croûte mince et croustillante, une sauce tomate piquante, de la mozzarella fraîche et un mélange d'herbes aromatiques garni de laitue, de tomates et d'une cuillerée de mayo piquante.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Arrabbiata épicée",
    desc: "Enflammez vos papilles gustatives avec cette création de pâtes ardentes, combinant des penne dans une sauce tomate épicée infusée d'ail, de flocons de piment rouge et de basilic frais pour une expérience culinaire réconfortante ultime",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño",
    desc: "Enflammez vos papilles avec un coup de pied enflammé ! Ce burger comprend une succulente galette de bœuf, des jalapeños fougueux, du fromage pepper jack et une sauce mayonnaise piquante au chipotle, ainsi que toutes les garnitures classiques sur un petit pain grillé.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita",
    desc: "Un favori intemporel avec une touche, mettant en vedette une fine croûte garnie de tomates douces, de basilic frais, de mozzarella crémeuse et d'un filet d'huile d'olive extra vierge, de roquette fraîche et d'un filet de glaçage balsamique.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Pâtes ail parmesan",
    desc: "Un délice pour les amateurs d'ail, composé de linguines nappées d'une sauce crémeuse au parmesan, infusées d'ail et garnies de persil haché, de poivrons et de tomates cerises.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Méditerranéenne",
    desc: "Embarquez pour un voyage culinaire avec cette création d'inspiration méditerranéenne, composée de fromage feta piquant, d'olives Kalamata, de tomates séchées au soleil et d'une pincée d'origan.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaïenne",
    desc: "Découvrez un avant-goût des tropiques avec une galette de bœuf juteuse glacée à la sauce teriyaki piquante, garnie d'ananas grillé, de bacon croustillant et de laitue fraîche, et toutes les garnitures classiques sur un petit pain grillé.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Pâtes italiennes",
    desc: "Savourez le goût de la perfection avec notre exquise carte de pâtes italiennes faites à la main.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Burgers juteux",
    desc: "Découvrez nos burgers délicieux, préparés avec des ingrédients frais et savoureux qui raviront vos papilles à chaque bouchée.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Pizzas délicieuses",
    desc: "Savourez nos pizzas délicieuses, garnies de généreux ingrédients de qualité et cuites à la perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilienne",
    desc: "Enflammez vos papilles gustatives avec une combinaison fougueuse de pepperoni épicé, de jalapeños, de flocons de piment rouge broyés et de fromage mozzarella fondu, donnant un coup de pied à chaque bouchée.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Méditerranéen",
    desc: "Embarquez pour un voyage culinaire avec cette création d'inspiration méditerranéenne, composée de fromage feta piquant, d'olives Kalamata, de tomates séchées au soleil et d'une pincée d'origan.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Napolitaine",
    desc: "Un délice italien classique avec une croûte fine et croustillante, une sauce tomate piquante, de la mozzarella fraîche et un mélange d'herbes aromatiques garni de laitue, de tomates et d'une cuillerée de mayonnaise piquante.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto",
    desc: "Un délice italien classique avec une croûte mince et croustillante, une sauce tomate piquante, de la mozzarella fraîche et un mélange d'herbes aromatiques garni de laitue, de tomates et d'une cuillerée de mayo piquante.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie",
    desc: "Un délice italien classique avec une croûte mince et croustillante, une sauce tomate piquante, de la mozzarella fraîche et un mélange d'herbes aromatiques garni de laitue, de tomates et d'une cuillerée de mayo piquante.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "4 fromages",
    desc: "Découvrez le pur bonheur du fromage avec un mélange fondant de fromages mozzarella, cheddar, provolone et parmesan, créant une expérience de pizza riche et indulgente.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Petite",
        additionalPrice: 0,
      },
      {
        title: "Moyenne",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilienne",
  desc: "Enflammez vos papilles gustatives avec une combinaison fougueuse de pepperoni épicé, de jalapeños, de flocons de piment rouge broyés et de fromage mozzarella fondu, donnant un coup de pied à chaque bouchée.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Petite",
      additionalPrice: 0,
    },
    {
      title: "Moyenne",
      additionalPrice: 4,
    },
    {
      title: "Grande",
      additionalPrice: 6,
    },
  ],
};
