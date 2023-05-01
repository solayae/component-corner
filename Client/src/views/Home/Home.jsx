import Cards from '../../components/Cards/Cards';
import {useSelector} from 'react-redux';
export default function Home() {
  const products = useSelector((state) => state.products);
  let categories = products.map((e) => e.category);
  categories = [...new Set(categories)];
  console.log(categories);
  return (
    <div>
      <div>
        <form>
          <h2>Ordenar</h2>
          <h3>Por Nombre</h3>
          <input type="radio" id="A-Z" name="sortBy" />
          <label htmlFor="A-Z">A-Z</label>
          <input type="radio" id="Z-A" name="sortBy" />
          <label htmlFor="Z-A">Z-A</label>
          <h3>Por Precio</h3>
          <input type="radio" id="desc" name="sortBy" />
          <label htmlFor="desc">Menor precio</label>
          <input type="radio" id="asc" name="sortBy" />
          <label htmlFor="asc">Mayor precio</label>
        </form>
        <form>
          <h2>Filtrar</h2>
          <input type="text" name="name" id="name" placeholder="Nombre..." />
          <div>
            {categories.map((e) => (
              <div key={e}>
                <input type="checkbox" id={e} value={e} />
                <label htmlFor={e}>{e}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div>
        <Cards products={products} />
      </div>
    </div>
  );
}
