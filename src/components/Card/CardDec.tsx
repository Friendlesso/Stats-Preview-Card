import { data } from "../../data/data"
import { CardStats } from "./CardStats"

export function CardDec() {

  return (
    <div className="flex flex-col justify-center items-center bg-(--card-bg-color) p-8 md:w-1/2 w-full">
      <div className="flex flex-col gap-16 w-9/10">
        <div className="flex flex-col gap-6 sm:text-left text-center">
          <h3 className="font-[Inter] font-bold text-4xl">Get <span className="text-(--accent-color)">insights</span> that help your business grow.</h3>
          <p className="text-(--main-p-color) font-[Inter]">{data.description}</p>
        </div>
        <CardStats />
      </div>
    </div>
  )
}