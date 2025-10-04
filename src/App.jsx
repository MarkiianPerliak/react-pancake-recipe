import PropTypes from 'prop-types';
import pancake from './images/pancake.jpg';
import {RecipeList} from './components/RecipeList/RecipeList.jsx';
import {DescribeInfo} from './components/DescribeInfo/DescribeInfo.jsx'
import {MessageNoIngr} from './components/MessageNoIngr/MessageNoIngr.jsx'
import './App.css';

const ingredientsData = ["135g/4¾oz plain flour", "1 tsp baking powder", "½ tsp salt", "2 tbsp caster sugar", "130ml/4½fl oz milk", "1 large egg, lightly beaten", "2 tbsp melted butter (allowed to cool slightly), plus extra for cooking"]

export const App = () => {
    return (
      <article>
        <img src={pancake}/>
        <DescribeInfo/>
        <p>Ingredients:</p>
        {ingredientsData.length === 0 ? <MessageNoIngr/> : <RecipeList ingredients={ingredientsData}/>}
      </article>
    )
}


App.propTypes = {
  ingredientsData: PropTypes.array
}