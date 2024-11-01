import { Metadata } from "next";
import HomePageMain from "./components/HomePage/HomePageMain";
export const metadata: Metadata = {
  title: "FLYBOOK | Fly your happyness",
  description: "Your own social app to share knowledge",
};
export default function Home() {
  return <HomePageMain />;
}
