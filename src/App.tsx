import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="page-container">
        <h2>Conteúdo da página</h2>
        <p>Aqui você pode adicionar mais conteúdo</p>
      </main>
    </>
  );
}

export default App;
