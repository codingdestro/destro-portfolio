import { Playfair, Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const playfair = Playfair({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700", "900"],
});
