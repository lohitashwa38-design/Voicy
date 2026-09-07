import {
  ShoppingCart,
  ChefHat,
  HeartPulse,
  Gamepad2,
  FileText,
  Mic,
} from "lucide-react";

export const assistants = [
  {
    id: "shopping",
    title: "Smart Shopping",
    description: "Compare products, reviews, and personalized recommendations.",
    icon: ShoppingCart,
    path: "/shopping",
  },
  {
    id: "cooking",
    title: "Cooking Assistant",
    description: "Step-by-step cooking guidance, hands-free.",
    icon: ChefHat,
    path: "/cooking",
  },
  {
    id: "medical",
    title: "Medical Navigator",
    description: "Get clear, reliable health information.",
    icon: HeartPulse,
    path: "/medical",
  },
  {
    id: "game",
    title: "Game Master",
    description: "Play interactive AI-driven adventures.",
    icon: Gamepad2,
    path: "/game-master",
  },
  {
    id: "documents",
    title: "Document Intelligence",
    description: "Understand, search, and explore your documents.",
    icon: FileText,
    path: "/documents",
  },
  {
    id: "interview",
    title: "Interview Simulator",
    description: "Practice interviews with AI-powered feedback.",
    icon: Mic,
    path: "/interview",
  },
];
