const Hero = () => {
  return (
    <main className="hero box">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="btn-2">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="icons">
            <img src="/img/amazon.png" alt="amazon" />
            <img src="/img/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/img/shoe.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
