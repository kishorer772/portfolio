import Portfolio from './portfolio';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <main className="lg:p-10 bg-gray-100 ">
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Porfolio" />
        <meta name="keywords" content="React; Frontend" />
      </Helmet>
      <Portfolio />
    </main>
  );
}

export default App;
