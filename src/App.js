import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey= 'd48aa70c170e4ecf62fc3896509ae9b52e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                   console.log(articles);
                }
            }
        })
    }, [])
  return (
    <div>
      <h1>Alan Ai new app</h1>
    </div>
  )
}

export default App
