import { statData } from "../../data/data";

export function CardStats() {
  
  return(
    <div className="flex gap-5 justify-between items-center">
      {statData.map(stat => (
        <div id={stat.id} className="flex flex-col items-center">
          <p>{stat.amoutOf}</p>
          <p className="text-(--stat-p-color)">{stat.title.toUpperCase()}</p>
        </div>
      ))}
    </div>
  )
}