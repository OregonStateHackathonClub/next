import { Navbar } from "@/components/navbar";
import { Project } from "@/components/project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-8 grid grid-cols-3 gap-4">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
