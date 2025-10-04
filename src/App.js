import pancake from './images/pancake.jpg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export const App = () => {
    return (
      <article>
        <img src={pancake}/>
        <h1>Pancake Recept:</h1>
        <p>Ingredients:</p>
        <ul>
          <li><p>135g/4¾oz plain flour</p></li>
          <li><p>1 tsp baking powder</p></li>
          <li><p>½ tsp salt</p></li>
          <li><p>2 tbsp caster sugar</p></li>
          <li><p>130ml/4½fl oz milk</p></li>
          <li><p>1 large egg, lightly beaten</p></li>
          <li><p>2 tbsp melted butter (allowed to cool slightly), plus extra for cooking</p></li>
        </ul>
      </article>
    )
}