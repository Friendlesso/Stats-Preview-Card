import { CardDec } from "./CardDec";
import { CardImage } from "./CardImage";


export function Card() {

  return(
    <article className="max-w-[90vw] w-4xl flex md:flex-row flex-col-reverse rounded-xl overflow-hidden ">
      <CardDec />
      <CardImage />
    </article>
  )
}