import Header from './header'

const handleLoad = () => {
  console.log('handleLoad')
  FuseBox.import('./lazy.js', (module) => {
    const Lazy1 = module.FuseBox.import('./lazy.js')
    const Lazy2 = require('./lazy.js')
    console.log('module:', module)
    console.log('Lazy1:', Lazy1)
    console.log('Lazy2:', Lazy2)
    Lazy1('Matthew')
    Lazy2('Matthew')
  })
}

const App = () => (
  <div>
    <Header text="Inferno"/>
    <button onClick={handleLoad}>Lazy Load Module</button>
  </div>
)

export default App
