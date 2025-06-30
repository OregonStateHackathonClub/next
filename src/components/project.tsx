import Image from "next/image"

export const Project = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-3 border border-white/10 rounded">
      <div>
        <h1 className="text-white/90">Title</h1>
        <p className="text-white/40">This is the description of your project</p>
      </div>
      <Image
        className="border border-white/5"
        src="/url"
        alt="project media"
        width={128}
        height={128}
      />
    </div>
  )
}