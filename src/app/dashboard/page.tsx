import { Navbar } from "@/components/navbar";
import { Project } from "@/components/project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-8 grid grid-cols-3 gap-4">
        <Project
          title="Project Alpha"
          shortDescription="Short info about Alpha"
          imageSrc="/project1.png"
          details="This is a detailed description about Project Alpha. It has all the info you want."
        />
        <Project
          title="Project Beta"
          shortDescription="Short info about Beta"
          imageSrc="/project2.png"
          details="This is a detailed description about Project Beta. It has all the info you want."
        />
        <Project
          title="Project Gamma"
          shortDescription="Short info about Gamma"
          imageSrc="/project3.png"
          details="This is a detailed description about Project Gamma. It has all the info you want."
        />
        <Project
          title="Project Delta"
          shortDescription="Short info about Delta"
          imageSrc="/project4.png"
          details="This is a detailed description about Project Delta. It has all the info you want."
        />
        <Project
          title="Project Alpha"
          shortDescription="Short info about Alpha"
          imageSrc="/project1.png"
          details="This is a detailed description about Project Alpha. It has all the info you want."
        />
        <Project
          title="Project Beta"
          shortDescription="Short info about Beta"
          imageSrc="/project2.png"
          details="This is a detailed description about Project Beta. It has all the info you want."
        />
        <Project
          title="Project Gamma"
          shortDescription="Short info about Gamma"
          imageSrc="/project3.png"
          details="This is a detailed description about Project Gamma. It has all the info you want."
        />
        <Project
          title="Project Delta"
          shortDescription="Short info about Delta"
          imageSrc="/project4.png"
          details="This is a detailed description about Project Delta. It has all the info you want."
        />
        <Project
          title="Project Alpha"
          shortDescription="Short info about Alpha"
          imageSrc="/project1.png"
          details="This is a detailed description about Project Alpha. It has all the info you want."
        />
        <Project
          title="Project Beta"
          shortDescription="Short info about Beta"
          imageSrc="/project2.png"
          details="This is a detailed description about Project Beta. It has all the info you want."
        />
        <Project
          title="Project Gamma"
          shortDescription="Short info about Gamma"
          imageSrc="/project3.png"
          details="This is a detailed description about Project Gamma. It has all the info you want."
        />
        <Project
          title="Project Delta"
          shortDescription="Short info about Delta"
          imageSrc="/project4.png"
          details="This is a detailed description about Project Delta. It has all the info you want."
        />
      </div>
    </div>
  );
}