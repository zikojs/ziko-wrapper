// import { render } from 'preact'
import { zikofy } from 'ziko-wrapper/preact'
import { Hello } from './Hello.jsx'
import './index.css'

globalThis.hello = zikofy(Hello, {name : "ziko"})
// import { App } from './app.jsx'

// render(<App />, document.getElementById('app'))
