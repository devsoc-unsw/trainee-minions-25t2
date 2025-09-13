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
    title: "Speed Dating",
    date: "Wednesday at 8:00PM",
    venue: "ICC Sydney",
    price: "From $1",
    status: "Full",
    image: bar1,
    location: "Townhall",
    tags: ["LGBTQ+", "25-34", "nightlife"],
  },
  {
    id: 2,
    title: "Speed Dating",
    date: "Tuesday at 7:00 PM",
    venue: "Sanctuary Hotel",
    price: "From $1",
    status: "Nearly full",
    image: bar2,
    location: "Riverwood",
    tags: ["straight", "18-24"],
  },
  {
    id: 3,
    title: "Dating and Trivia",
    date: "Tuesday at 7:00 PM",
    venue: "Ryans Bar",
    price: "From $1",
    status: "",
    image: bar3,
    location: "Hurstville",
    tags: ["straight", "18-24"],
  },
  {
    id: 4,
    title: "Singles Dinner Party",
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
    title: "Singles Mingling Event",
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
    title: "Group Speed Dating",
    date: "Tuesday at 7:00 PM",
    venue: "Crown Sydney",
    price: "From $1",
    status: "Full",
    image: res1,
    location: "Townhall",
    tags: ["nightlife"],
  },
  {
    id: 7,
    title: "Singles Trivia Party",
    date: "Tuesday at 7:00 PM",
    venue: "Opera House",
    price: "From $1",
    status: "Nearly full",
    image: bar4,
    location: "Townhall",
    tags: ["straight", "18-24"],
  },
  {
    id: 8,
    title: "Speed Dating Courtside",
    date: "Tuesday at 7:00 PM",
    venue: "UNSW Library",
    price: "From $1",
    status: "",
    image: res2,
    location: "Townhall",
    tags: ["straight", "18-24"],
  },
  {
    id: 9,
    title: "Singles Music Trivia and Dating",
    date: "Tuesday at 7:00 PM",
    venue: "Anzac Parade Light Rail",
    price: "From $1",
    status: "Popular",
    image: bar3,
    location: "Townhall",
    tags: ["25-34"],
  },
  {
    id: 10,
    title: "Matched Dating with Dinner",
    date: "Tuesday at 7:00 PM",
    venue: "Town Hall Station",
    price: "From $1",
    status: "",
    image: theking,
    location: "Central",
    tags: ["LGBTQ+"],
  },
];

export const noEvents: Event[] = [];
