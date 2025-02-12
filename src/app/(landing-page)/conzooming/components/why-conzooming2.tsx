import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  bgColor?: string;
}

const FeatureCard = ({
  title,
  description,
  image,
  buttonText,
  bgColor,
}: Props) => {
  <div
    className={`${bgColor} rounded-2xl p-8 shadow-sm transition-all hover:shadow-md`}
  ></div>;
};
