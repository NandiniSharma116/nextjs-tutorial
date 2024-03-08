import DrinkList from "../components/DrinkList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async() => {
  await new Promise((resolve)=>{setTimeout(resolve, 1000)});
  const response = await fetch(url);
  //Throw error
  if(!response.ok)
  throw new Error("Failed to fetch drinks")

  const data = await response.json();
  return data;
}

const Drinks = async() => {
  const data = await fetchDrinks();
  return (
    <div>
      <DrinkList drinks={data.drinks}/>  
    </div>
  )
}

export default Drinks