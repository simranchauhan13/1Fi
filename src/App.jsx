import { useEffect, useState } from "react";
import "./App.css";
import products from "./data/Products";
import ProductCard from "./Components/ProductCard";

function App() {
  const [activeTab, setActiveTab] = useState("marketplace");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedEmi, setSelectedEmi] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const changeTab = (tab) => {
    setActiveTab(tab);
    setSelectedProduct(null);
    setSelectedVariant(null);
    setSelectedEmi(null);
  };

  return (
    <div className="app">
      <div className="shop-hero">
          <h1>Shop today,</h1>
          <p>
            <em>pay later using</em>
          </p>
          <h2>Mutual funds</h2>
      </div>
      <div className="tabs">
        <button
          className={activeTab === "brands" ? "active" : ""}
          onClick={() => changeTab("brands")}>
          Top Brands
        </button>

        <button
          className={activeTab === "stores" ? "active" : ""}
          onClick={() => changeTab("stores")}>
          Nearby Stores
        </button>

        <button
          className={activeTab === "marketplace" ? "active" : ""}
          onClick={() => changeTab("marketplace")}>
          1Fi Marketplace
        </button>
      </div>

      {activeTab === "marketplace" && (
        <>
          <div className="marketplace">
            <h2>1Fi Marketplace</h2>
            <p>Browse your favourite products and choose an EMI plan</p>

            <input
              className="search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {loading && (
              <p className="no-products">
                Loading products...
              </p>
            )}

            {error && (
              <p className="no-products">
                Something went wrong. Please try again.
              </p>
            )}

            {!loading && !error && (
              <>
                <div className="products">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => {
                        setSelectedProduct(product);
                        setSelectedVariant(null);
                        setSelectedEmi(null);
                      }}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <p className="no-products">
                    No products found.
                  </p>
                )}
              </>
            )}
          </div>

          {selectedProduct && (
            <div className="details">
              <h2>{selectedProduct.name}</h2>

              <p>
                ₹{selectedProduct.price.toLocaleString()}
              </p>

              <h3>Select Variant</h3>

              {selectedProduct.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={
                    selectedVariant === variant
                      ? "selected-option"
                      : ""
                  }
                >
                  {variant}
                </button>
              ))}

              <h3>Select EMI Plan</h3>

              {selectedProduct.emiPlans.map((plan) => (
                <button
                  key={plan.months}
                  onClick={() => setSelectedEmi(plan)}
                  className={
                    selectedEmi?.months === plan.months
                      ? "selected-option"
                      : ""
                  }
                >
                  ₹{plan.amount.toLocaleString()}/month -{" "}
                  {plan.months} months
                </button>
              ))}

              <button
                className="proceed"
                disabled={!selectedVariant || !selectedEmi}
                onClick={() =>
                  alert("Plan selected successfully!")
                }
              >
                Proceed
              </button>
            </div>
          )}
        </>
      )}

      {activeTab === "brands" && (
        <div className="blank-page"></div>
      )}

      {activeTab === "stores" && (
        <div className="blank-page"></div>
      )}

      <div className="bottom-nav">
        <span>Home</span>
        <span>Invest</span>
        <span className="selected">Shop</span>
        <span>Profile</span>
      </div>
    </div>
  );
}

export default App;