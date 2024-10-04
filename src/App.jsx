import { useEffect, useState } from "react"

const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?`;

function App() {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_FACT  )
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)
      })
  }, []);

  return (
    <main>
      <h1>App Gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}

export default App
