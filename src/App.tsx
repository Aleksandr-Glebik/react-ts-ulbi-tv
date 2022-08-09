import React from 'react'
import Card, {CardVariant} from './components/Card'


function App() {
  return (
    <div>
      <Card onClick={(num) => console.log('click', num)}
            variant={CardVariant.primary}
            width='200px' height='200px'
      >
        <button>Кнопка</button>
        <div>Important text</div>
      </Card>
    </div>
  )
}

export default App
