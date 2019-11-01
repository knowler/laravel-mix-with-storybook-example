import React from 'react'; import ReactDOM from 'react-dom';

import { Button } from './components';

const App = () => (
  <main className="min-h-screen flex justify-center items-center">
    <article className="text-center">
      <h1 className="mb-3 text-3xl font-bold">Hello, World!</h1>
      <Button variant="pill">Press the button</Button>
    </article>
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));
