import { useState } from "react";
import Child1 from "./component/Child1";
import Child2 from "./component/Child2";
import Counter from "./component/Counter";
import Fruits from "./component/Fruits";
import Notes from "./component/Notes";
import UserForm from "./forms and hooks/UserForm";
import UseEffectHook from "./forms and hooks/UseEffectHook";
import NewsApp from "./component/NewsApp";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log("I will start uploading the data now");
  }
  return (
    <div>
      {/* <Counter/> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      {/* <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} />  */}
      {/* <UserForm /> */}
      {/* <UseEffectHook /> */}
      <NewsApp />
    </div>
  );
}

export default App;

//onCountUpdate is the name of the prop paasing from parent to child

//countFromParent is also the prop passing from parent to child2 ...when setCountInParent fun update the value of countInParent in child1 it also get updated in child2
// It is simplily a child to child and parent to child communication
