import { statData } from "../../data/data";

export function CardStats() {
  
  return(
    <div className="flex sm:flex-row flex-col gap-5 justify-between items-center">
      {statData.map(stat => (
        <div id={stat.id} className="flex flex-col items-center">
          <p className="font-[Inter] font-bold text-xl">{stat.amoutOf}</p>
          <p className="text-(--stat-p-color) text-sm">{stat.title.toUpperCase()}</p>
        </div>
      ))}
    </div>
  )
}