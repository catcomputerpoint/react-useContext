export default function ProductList() {
    const products = ["1", "2", "3", "4", "5"];
    return (
      <div>
        {products.map((item, index) => (
          <p key={index}>Product {item}</p>
        ))}
      </div>
    );
  }