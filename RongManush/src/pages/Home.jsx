import {
  FaYoutube,
  FaArrowRight,
  FaBook,
  FaBoxOpen,
  FaBookmark,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          Welcome to RongManush
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your premium destination for men's fashion, grooming & lifestyle
        </p>
      </div>

      {/* Owner Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-16">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="Mrinal Kanti Roy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Mrinal Kanti Roy
            </h2>
            <p className="text-indigo-600 font-medium">
              Founder & Style Expert
            </p>
            <div className="w-20 h-1 bg-indigo-200 rounded-full"></div>
          </div>

          <div className="prose text-gray-600 space-y-4">
            <p>
              Award-winning men's style influencer with 5+ years transforming
              wardrobes. Featured in{" "}
              <span className="font-semibold">GQ India</span> and collaborated
              with premium brands like{" "}
              <span className="font-semibold">Peter England</span> and{" "}
              <span className="font-semibold">The Man Company</span>.
            </p>
            <p>
              My YouTube channel helps men develop signature styles that boost
              confidence in professional and personal spaces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-indigo-700">250K+</p>
              <p className="text-sm text-gray-600">Subscribers</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-indigo-700">50K+</p>
              <p className="text-sm text-gray-600">Community</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
                Visit Channel
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Sections */}

      {/* 1. Recent Activity */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaBook className="text-indigo-600 mr-3" />
            Recently Viewed
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex-shrink-0 w-72 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-lg mb-1">
                    Recent Activity {item}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    2 days ago • 5 min read
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Continue Reading →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. New Articles */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaBoxOpen className="text-indigo-600 mr-3" />
            Latest Publications
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-shrink-0 w-64">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-lg mb-1">New Article {item}</h3>
                  <p className="text-gray-500 text-sm">Latest fashion trends</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. YouTube Videos */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaYoutube className="text-indigo-600 mr-3" />
            Featured Videos
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex-shrink-0 w-96 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-600 bg-opacity-90 rounded-full flex items-center justify-center">
                        <FaYoutube className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">
                      Video Title {item}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Published 1 week ago • 15K views
                    </p>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                      Watch Now <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FaBookmark className="text-indigo-600 mr-3" />
            Recommended Products
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
                  <h3 className="font-bold mb-1">Product {item}</h3>
                  <p className="text-indigo-600 font-medium mb-3">₹1,299</p>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom scrollbar styling (add to your CSS) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
