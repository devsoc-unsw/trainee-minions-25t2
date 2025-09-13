import theking from "../assets/maxresdefault.svg";
import bar1 from "../assets/rooftop_bar1.jpg";
import bar2 from "../assets/rooftop_bar2.jpg";
import bar3 from "../assets/rooftop_bar3.jpg";
import bar4 from "../assets/rooftop_bar4.jpg";
import res1 from "../assets/restaurant_1.jpg";
import res2 from "../assets/restaurant_2.jpg";

export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  status: string;
  image: any;
  location: string;
  tags: string[];
}

export const popularEvents: Event[] = [
  {
    id: 1,
    title: "Louis Estate",
    date: "8:00PM AEST",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Full",
    image: bar1,
    location: "Townhall",
    tags: ["LGBTQ+", "25-34", "nightlife"],
  },
  {
    id: 2,
    title: "LeOblock",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: bar2,
    location: "Riverwood",
    tags: ["straight", "18-24"],
  },
  {
    id: 3,
    title: "Louis Lim Estate",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: bar3,
    location: "Hurstville",
    tags: ["straight", "18-24"],
  },
  {
    id: 4,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: bar4,
    location: "Central",
    tags: ["LGBTQ+", "25-34", "nightlife"],
  },
  {
    id: 5,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: bar4,
    location: "Townhall",
    tags: ["nightlife"],
  },
];

export const weekendEvents: Event[] = [
  {
    id: 6,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Full",
    image: res1,
    location: "Townhall",
    tags: ["nightlife"],
  },
  {
    id: 7,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Nearly full",
    image: bar4,
    location: "Townhall",
    tags: ["straight", "18-24"],
  },
  {
    id: 8,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: res2,
    location: "Townhall",
    tags: ["straight", "18-24"],
  },
  {
    id: 9,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "Popular",
    image: bar3,
    location: "Townhall",
    tags: ["25-34"],
  },
  {
    id: 10,
    title: "LeSpeed Date | Courtside lakers",
    date: "Tuesday at 7:00 PM",
    venue: "Courtside Lakers",
    price: "From $1",
    status: "",
    image: theking,
    location: "Central",
    tags: ["LGBTQ+"],
  },
];

export const noEvents: Event[] = [];
