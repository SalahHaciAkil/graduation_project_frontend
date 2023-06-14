import { FeaturesCards } from "@/app/(sections)";
import { RobotI } from "@/assests/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center">
        <Image height={500} width={500} alt="robot" src={RobotI} />
      </div>
      <div className="mb-20">
        <FeaturesCards />
      </div>
    </main>
  );
}
