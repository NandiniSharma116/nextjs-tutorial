import Link from "next/link";
import Image from "next/image";
import drinkImg from "./drink.jpg";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const getSingleDrink = async(id) => {
  const res = await fetch(`${url}${id}`)
  if(!res.ok)
  throw new Error("Failed to fetch the drink")
  return res.json()
}

const SingleDrinkPage = async({params}) => {
    const data = await getSingleDrink(params.id)
    const title = data?.drinks[0]?.strDrink;
    const imgSource = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to Drink
      </Link>
      <Image priority alt={title} className="w-48 h-48 rounded-lg shadow-lg mb-4" src={imgSource} width={300} height={300}></Image>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  )
}

export default SingleDrinkPage