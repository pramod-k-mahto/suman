
const WebScrapingPro = () => {
  const services = [
    {
      title: "Price Monitoring",
      description: "Track competitor prices and optimize your business strategies with accurate data."
    },
    {
      title: "Market Research",
      description: "Extract key insights from various sources to stay ahead in your industry."
    },
    {
      title: "SEO & Data Analysis",
      description: "Analyze your competitors' SEO and online strategies to improve your performance."
    }
  ];

  const portfolioItems = [
    {
      title: "Project 1",
      description: "Web scraping for e-commerce product data."
    },
    {
      title: "Project 2",
      description: "Market analysis and competitor tracking data."
    },
    {
      title: "Project 3",
      description: "Scraped social media metrics for brand insights."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-gray-300 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-white">Web Scraping Pro</div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Portfolio</a>
            <a href="#" className="hover:text-white">Testimonials</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Professional Web Scraping Services</h1>
        <p className="text-xl text-gray-600 mb-8">Data extraction solutions for e-commerce, market research, and more.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Get a Free Quote
        </button>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Portfolio</h2>
          <p className="text-center text-gray-600 mb-12">Check out some of our past work.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 h-48 mb-4 rounded-lg"></div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Testimonials</h2>
          <p className="text-center text-gray-600 mb-12">What our clients say</p>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg italic mb-4">
              "The web scraping service helped us reduce our time on market research by 50%! Great job!"
            </p>
            <p className="text-gray-600">— Jane Doe, CEO of XYZ Corp</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8">Get in touch to discuss your web scraping needs.</p>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <textarea
              placeholder="Project Description"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-md mb-6"
            ></textarea>
            <div className="text-center">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Web Scraping Pro. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default WebScrapingPro;