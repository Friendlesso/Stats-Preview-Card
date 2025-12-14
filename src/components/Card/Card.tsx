import { CardDec } from "./CardDec";
import { CardImage } from "./CardImage";


export function Card() {

  return(
    <article className="flex md:flex-row flex-col-reverse max-w-[85vw] w-5xl  rounded-xl overflow-hidden my-10 ">
      <CardDec />
      <CardImage />
    </article>
  )
}