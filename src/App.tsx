import { ProductCard } from './components/ProductCard/ProductCard';

export default function App() {
  return (
    <main>
      <h1>Teste Econverse</h1>
      <ul>
        <ProductCard
          name="Iphone 11 PRO MAX BRANCO 1"
          description="Iphone 11 PRO MAX BRANCO 1"
          photo="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
          price={15000}
        />
      </ul>
    </main>
  );
}
