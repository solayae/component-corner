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
  // / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / //
  // codigo para subir y  eliminar una foto al servicio de cloudinary  //
  //                                                                 //
  const [images, setImages] = useState({});
  const [imageToRemove, setImageToRemove] = useState('');

  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type !== 'price' && type !== 'stock') return setProduct({ ...product, [type]: value });
    if (value > 9999) return setProduct({ ...product, [type]: 9999 });
    if (value < 0) return setProduct({ ...product, [type]: 0 });
    return setProduct({ ...product, [type]: value });
  };
  const validate = (p) => {
    const errors = {};
    if (!p.name) errors.name = 'Debe introducir un nombre';
    if (!images.url) errors.image = 'Debe introducir una imagen';
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
      // const response = await axios.post('/products/', {...product, detail: [product.detail]});
      const response = await axios.post('/products/', {
        ...product,
        detail: [product.detail],
        image: images.url
      });
      const message = response.data;
      setServerResponse(message);
    } catch (error) {
      setErrorList(error.message);
    }
  };


  function handleRemoveImg(imgObj, e) {
    e.preventDefault();
    setImageToRemove(imgObj);
    axios.delete(`/${imageToRemove}`).then(() => {
      setImages({});
      setImageToRemove('');
    });
  }

  function handleOpenWidget(e) {
    e.preventDefault();
    setImages([]);
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dezvujzed',
        uploadPreset: 'ymjvjtup',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          setImages(() => {
            return { url: result.info.url, public_id: result.info.public_id };
          });
        }
      }
    );

    myWidget.open();
  }

  return (
    <div className={style.formContainer}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div className={style.containerImageDetail}>
          <div className={style.divImageProduct}>
            {images.url ? <img
              src={images.url}
              alt="image not found"
              className={style.imageProduct}
              type="url"
              value={product.image}
            /> : <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "200px", textAlign: "center" }}><h1>Agregue una imagen</h1></div>}
            <div className={style.divButton}>
              <button className={style.imageButton} id="upload-widget" onClick={(e) => handleOpenWidget(e)}>
                Imagen
              </button>

              <button className={style.imageButton} onClick={(e) => handleRemoveImg(images.public_id, e)}>
                Eliminar
              </button>
            </div>
            <p>{errorList.image}</p>
          </div>
          <div className={style.descriptionProduct}>
            <div>
              <label htmlFor="name">Nombre del producto:</label>
              <input type="text" value={product.name} onChange={(e) => handleChange(e, 'name')} />
              <p>{errorList.name}</p>
            </div>
            <div>
              <label htmlFor="brand">Marca del Producto:</label>
              <input type="text" value={product.brand} onChange={(e) => handleChange(e, 'brand')} />
              <p>{errorList.brand}</p>
            </div>
            <div>
              <label htmlFor="price">Precio del producto:</label>
              <input type="number" value={product.price} onChange={(e) => handleChange(e, 'price')} />
              <p>{errorList.price}</p>
            </div>
            <div>
              <label htmlFor="category">Categoria del producto:</label>
              <input type="text" value={product.category} onChange={(e) => handleChange(e, 'category')} />
              <p>{errorList.category}</p>
            </div>
            <div>
              <label htmlFor="stock">Stock del producto:</label>
              <input type="number" value={product.stock} onChange={(e) => handleChange(e, 'stock')} />
              <p>{errorList.stock}</p>
            </div>
          </div>
        </div>

        <div className={style.detailProduct}>
          <div className={style.divDetailProduct}>
            <label htmlFor="detail">Detalles del producto:</label>
            <textarea
              style={{ maxHeight: "200px" }}
              type="text"
              value={product.detail}
              onChange={(e) => handleChange(e, 'detail')}
              cols="72"
              rows="10"
            />
            {errorList.detail && <p>{errorList.detail}</p>}
          </div>
        </div>
        <button className={style.imageButton} type="submit">
          Subir producto
        </button>
        <h1>{serverResponse && serverResponse}</h1>
      </form >
    </div >
  );
}

