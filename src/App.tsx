import LoyaltyCard from "./components/LoyaltyCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Tarjeta de Lealtad</h1>

      <LoyaltyCard
        businessName={"La Tiendita\nDe Susanita"}
        customerName="Usuario de Prueba"
        points={0}
        customerId="0001"
      />
    </main>
  );
}

export default App;