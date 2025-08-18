import Header from "./components/header";
import Hero from "./components/hero";
import CategoryNav from "./components/category-nav";
import ProductGallery from "./components/product-gallery";
import PartnerSection from "./components/partner-section";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryNav />
      <ProductGallery />
      <PartnerSection />
    </>
  );
}

export default App;
