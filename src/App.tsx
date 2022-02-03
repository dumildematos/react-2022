import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";


function App() {

  const [tweets, setTweet] = useState<string[]>([
    "Tweet 🐶",
    "Tweet 🦁",
    "Tweet 🐵",
    "Tweet 🐨",
    "Tweet 🐷",
  ]);

  function createTweet(){
    setTweet([...tweets, 'ne2'])
  }

  
  return (
    <div>
      <AppRoutes />
      {/* {
        tweets.map((tweet, $index) => {
          return <Tweet key={$index} text={tweet} />
        })
      }
      <button onClick={createTweet}>Adicionar</button> */}
    </div>
  );
}

export default App
