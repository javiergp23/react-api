import { useEffect, useState } from "react"

const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?`;

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_FACT  )
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threefirstWord = fact.split(' ', 3).join(' ')
        console.log(threefirstWord)


        fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red`)
          .then(response => {
            const { url } = response
            console.log(response)
            setImageUrl(`${url}`)
          })
      })
  }, []);

  return (
    <main>
      <h1>App Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Esta imagen proviene de: ${fact}`} />}
    </main>
  )
}

export default App
