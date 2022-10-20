import './styles/style.css'
import React, { useState, useEffect } from 'react';
import Items from './components/items.js'
import Itemboard from './components/itemboard.js'
 
function App() {

  const [store,updatestore] = useState([]);

    const update1 = (x)=> {
      forceUpdate();
      const yes = store;
      if(yes.includes(x)){
        updatestore([]);
        return;
      }
      yes[yes.length] = x;
      updatestore(yes);
      }



      const [, updateState] = React.useState();
      const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div>
      <div class="header" id="header">
        Memory game!
      </div>
      <div class="score">
        Score : {store.length}
      </div>
      <div id="itemboard" >
        <Itemboard array1={[<Items imagelink="noodle.png" name="noodle" select1={()=>update1("noodle")}/>,
        <Items imagelink="donut.png" name="donut" select1={()=>update1("donut")}/>,
        <Items imagelink="burger.png" name="burger" select1={()=>update1("burger")}/>,
        <Items imagelink="pizza.png" name="pizza" select1={()=>update1("pizza")}/>,
        <Items imagelink="rice.png" name="rice" select1={()=>update1("rice")}/>,
        <Items imagelink="ice-cream.png" name="ice-cream" select1={()=>update1("ice-cream")}/>,
        <Items imagelink="milk-tea.png" name="milk-tea" select1={()=>update1("milk-tea")}/>,
        <Items imagelink="sushi.png" name="sushi" select1={()=>update1("sushi")}/>,
        <Items imagelink="french-fries.png" name="french-fries" select1={()=>update1("french-fries")}/>,
        <Items imagelink="steak.png" name="steak" select1={()=>update1("steak")}/>,
        <Items imagelink="soup.png" name="soup" select1={()=>update1("soup")}/>,
        <Items imagelink="egg.png" name="egg" select1={()=>update1("egg")}/>,]}/>
      </div>


    </div>
  );
}

export default App;
