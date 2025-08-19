import Header from "./components/header";
import Hero from "./components/hero";
import CategoryNav from "./components/category-nav";
import ProductGallery from "./components/product-gallery";
import BrandNav from "./components/brand-nav";
import PartnerSection from "./components/partner-section";
import NewsLetter from "./components/news-letter";
import Footer from "./components/footer";
import "./index.scss";

function App() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <CategoryNav />
        <ProductGallery />
        <PartnerSection />
        <ProductGallery variant="no-tabs" />
        <PartnerSection />
        <BrandNav />
        <ProductGallery variant="no-tabs" />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

export default App;
