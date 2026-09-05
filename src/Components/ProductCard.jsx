function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>₹{product.price.toLocaleString()}</p>

      <span>
        From ₹{product.emiPlans[0].amount.toLocaleString()}/month
      </span>
    </div>
  );
}

export default ProductCard;