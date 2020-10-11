import React, { Component } from 'react'
import Hello from './Hello'
import Hello2 from './Hello2'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Test</h1>
        {/* props = proprité = "text" */}
        <Hello label='Margaux' />
        <Hello2 />
        <Hello2 />
        <Hello2 />
      </div>
    )
  }
}

export default App
