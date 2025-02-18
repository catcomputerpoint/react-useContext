import './App.css'

function Cart(){
  return (
    <h1>Items in Cart</h1>
  )
}

function ProductList(){
  const products =['1','2','3','4','5'];
  return (
    <div>
      {products.map((item,index)=><p key={index}>Product {item}</p>)}
    </div>
  )
}

function App() {
  return (
    <>
      <Cart/>
      <ProductList/>
    </>
  )
}

export default App
