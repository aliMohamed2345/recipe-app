"use client";
import { useFetch } from "./hooks/useFetch";

interface recipeType {
  results: [
    {
      id: number;
      title: string;
      image: string;
      imageType: string;
    }
  ];
}

export default function Home() {
  const query = `chicken`;
  const { data } = useFetch<recipeType>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&fillIngredients=true`,
  });
  console.log(data);
  return <div></div>;
}
