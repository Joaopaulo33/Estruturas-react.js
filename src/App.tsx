import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  //Variável com valores mais recentes da variável / função pra substituir o valor dessa var
    const [tweet,setTweets] = useState<string[]>([])
  return (
    
  <div>
    <Tweet text="tweet1"/>
    <Tweet text="tweet2"/>
    <Tweet text="tweet3"/>
  </div>
  )
}
export default App
