import axios from 'axios';
import { useState } from 'react';
import style from './FormProduct.module.css';

export default function FormProduct() {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    brand: '',
    detail: '',
    price: 0,
    category: '',
    stock: 0,
  });
  const [errorList, setErrorList] = useState({});
  const [serverResponse, setServerResponse] = useState('');
  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type !== 'price' && type !== 'stock') return setProduct({ ...product, [type]: value });
    if (value > 9999) return setProduct({ ...product, [type]: 9999 });
    if (value < 0) return setProduct({ ...product, [type]: 0 });
    return setProduct({ ...product, [type]: value });
  };
  const validate = (p) => {
    const regexURL = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
    const errors = {};
    if (!p.name) errors.name = 'Debe introducir un nombre';
    if (!p.image || !regexURL.test(p.image)) errors.image = 'Debe introducir un url válido';
    if (!p.brand) errors.brand = 'Debe introducir una marca';
    if (!p.detail) errors.detail = 'Debe introducir detalles';
    if (!p.price) errors.price = 'Debe introducir un precio válido';
    if (!p.category) errors.category = 'Debe introducir una categoria';
    if (!p.stock) errors.stock = 'Debe introducir una cantidad de stock válida';
    return errors;
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const result = validate(product);
    if (Object.keys(result).length) {
      setErrorList(result);
      return;
    }
    setErrorList({});
    try {
      const response = await axios.post('http://localhost:3001/products/', { ...product, detail: [product.detail] });
      const message = response.data;
      setServerResponse(message);
    } catch (error) {
      setErrorList(error.message);
    }
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" value={product.name} onChange={(e) => handleChange(e, 'name')} />
        </div>
        {errorList.name && <p>{errorList.name}</p>}
        <div>
          <label htmlFor="image">Url de la imagen:</label>
          <input type="url" value={product.image} onChange={(e) => handleChange(e, 'image')} />
        </div>
        {errorList.image && <p>{errorList.image}</p>}
        <div>
          <label htmlFor="brand">Marca del Producto:</label>
          <input type="text" value={product.brand} onChange={(e) => handleChange(e, 'brand')} />
        </div>
        {errorList.brand && <p>{errorList.brand}</p>}
        <div>
          <label htmlFor="detail">Detalles del producto:</label>
          <input type="text" value={product.detail} onChange={(e) => handleChange(e, 'detail')} />
        </div>
        {errorList.detail && <p>{errorList.detail}</p>}
        <div>
          <label htmlFor="price">Precio del producto:</label>
          <input type="number" value={product.price} onChange={(e) => handleChange(e, 'price')} />
        </div>
        {errorList.price && <p>{errorList.price}</p>}
        <div>
          <label htmlFor="category">Categoria del producto:</label>
          <input type="text" value={product.category} onChange={(e) => handleChange(e, 'category')} />
        </div>
        {errorList.category && <p>{errorList.category}</p>}
        <div>
          <label htmlFor="stock">Stock del producto:</label>
          <input type="number" value={product.stock} onChange={(e) => handleChange(e, 'stock')} />
        </div>
        {errorList.stock && <p>{errorList.stock}</p>}
        <button>Subir producto</button>
        <h1>{serverResponse && serverResponse}</h1>
      </form>
    </div>
  );
}
