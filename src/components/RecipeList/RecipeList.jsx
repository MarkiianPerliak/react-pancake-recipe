export const RecipeList = (data) => {
  console.log(data.ingredients)
    return (
        <ul>
          {data.ingredients.map((ingridient, id) => {
            return <li key={id}><p>{ingridient}</p></li>
          })}
        </ul> 
    )
}