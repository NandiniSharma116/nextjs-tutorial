import Link from "next/link";
import Image from "next/image";

const DrinkList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className="text-xl font-medium">
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
