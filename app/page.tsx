import Auth from "@/components/Auth";
import FormButton from "@/components/FormButton";
import { removeToken } from "@/utils/token";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import HomePage from "./_components/homePage";

export default function Home() {
  return (
    <Auth auth={true}>
      <HomePage />
    </Auth>
  );
}
