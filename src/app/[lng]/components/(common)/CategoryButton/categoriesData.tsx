export type Category = {
  titleKey: keyof Messages[`common`][`categories`];
  path: string;
};

export type Categories = Category[];

export const categories: Categories = [
  {
    titleKey: `Luggage`,
    path: `luggage`,
  },
  {
    titleKey: `Car transporters`,
    path: `car-transporters`,
  },
  {
    titleKey: `Boat / Motorcycle`,
    path: `boat`,
  },
  {
    titleKey: `Special / Building`,
    path: `special`,
  },
];
