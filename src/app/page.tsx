import CollectionSection from "./Components/Home/CollectionSection";
import CuisineHighLightSection from "./Components/Home/CuisineHighLightSection";
import MealPrepBannerSection from "./Components/Home/MealPrepBannerSection";
import FeaturesSection from "./Components/Home/FeaturesSection";
import HowItWorksSection from "./Components/Home/HowItWorksSection";
import HeroSection from "./Components/Home/HeroSection";
import StatsBarSection from "./Components/Home/StatsBarSection";
const Home = () => {
  return (
    <>
      <main className="overflow-hidden">
        <HeroSection />
        <StatsBarSection />
        <CollectionSection />
        <CuisineHighLightSection />
        <MealPrepBannerSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
    </>
  );
};
export default Home;
