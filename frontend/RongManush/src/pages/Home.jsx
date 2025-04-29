import HeroSection from "../components/HeroSection";
import ProfileCard from "../components/ProfileCard";
import RecentActivity from "../components/RecentActivity";
import LatestArticles from "../components/LatestArticles";
import FeaturedVideos from "../components/FeaturedVideos";
import RecommendedProducts from "../components/RecommendedProducts";

// Optional: keep scrollbar-hide CSS here

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-20">
            <style jsx>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>

      <HeroSection />
      <ProfileCard />
      <RecentActivity />
      <LatestArticles />
      <FeaturedVideos />
      <RecommendedProducts />
    </div>
  );
}
