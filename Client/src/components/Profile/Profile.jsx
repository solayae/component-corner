import { useState, useEffect } from "react";
import { updateProfile } from "../../redux/actions";
import { Navigate } from "react-router-dom";
import { RxUpload } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Profile = () => {
  const [images, setImages] = useState({});
  const [imageToRemove, setImageToRemove] = useState(false);
  const [errorList, setErrorList] = useState({});
  const [serverResponse, setServerResponse] = useState("");

  let user = JSON.parse(localStorage.getItem("user"));
  
  const [imgeUpdate, setImgeUpdate] = useState(user.imagen);

  // setImages((img = "https://bootdey.com/img/Content/avatar/avatar7.png")=>{
  //   return {url:img}
  // })

  // useEffect(()=>{
  //   setImgeUpdate(user.imagen)
  // }, [user.imagen])

  const [formPerfil, setFormPerfil] = useState({
    name: "",
    email: "",
    direction: "",
  });

  const [changeInput, setChangeInput] = useState(false);

  useEffect(({ name, email, direction } = user) => {
    setFormPerfil({ name, email, direction });
  }, []);
  

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangeInput(true);
    setFormPerfil((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (value) => {
    const errors = {};
    if (!value.name) errors.name = "Debe introducir un nombre";
    if (!value.email) errors.email = "Debe introducir un";

    return errors;
  };

  const handleSaveImagen = async (imag) => {
    const img = imag?.url;
    const email = formPerfil?.email;
    user.imagen = img;
    localStorage.setItem("user", JSON.stringify(user));

    if (img) {
      setImgeUpdate(img);
    }

    try {
      // const response = await axios.post('/products/', {...product, detail: [product.detail]});
      if (imageToRemove) {
        const response = await axios.put("/users/imagen", {
          imagen: img,
          email: email,
        });
        setImageToRemove(false);
        const message = response.data;
        setServerResponse(message);
      }
    } catch (error) {
      setErrorList(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validate(formPerfil);
    if (Object.keys(result).length) {
      setErrorList(result);
      return;
    }
    toast.success("Guardando Cambios", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    if (changeInput) {
      handleSaveImagen(images);
      const { email, name, direction } = formPerfil;
      const response = await axios.put("/users/profile", {
        email: email,
        name: name,
        direction: direction,
      });

      user.email = email;
      user.name = name;
      user.direction = direction;
      user.imagen = imgeUpdate;

      localStorage.setItem("user", JSON.stringify(user));

      const message = response.data;
      setServerResponse(message);
    }

    setTimeout(() => {
      setChangeInput(false);
    }, 3000);
  };

  async function handleOpenWidget(e) {
    e.preventDefault();

    let myWidget = await window.cloudinary.createUploadWidget(
      {
        cloudName: "dezvujzed",
        uploadPreset: "ymjvjtup",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImages(() => {
            return { url: result.info.url, public_id: result.info.public_id };
          });
          setImageToRemove(true);
          setChangeInput(true);
          setImgeUpdate(result.info.url);
        }
      }
    );

    myWidget.open();
  }

  console.log(images.url);

  return (
    <>
      <div style={{ height: "600px" }}>
        <div className="bg-light bootstrap snippets bootdey container">
          <h4 style={{ color: "#333" }}>{formPerfil.name}</h4>
          <hr />
          <div className="row" style={{ height: "400px" }}>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="rounded border"
                  style={{ with: "200px", height: "200px" }}
                  src={imgeUpdate}
                  alt="avatar"
                />
              </div>
              <div style={{ textAlign: "center", fontSize: "2rem" }}>
                <RxUpload
                  id="upload-widget"
                  onClick={(e) => handleOpenWidget(e)}
                />
              </div>
            </div>

            <div className="col-md-8 personal-info">
              <h3>Información general</h3>

              <form
                className="form-horizontal"
                role="form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form-group">
                  <label className="col-lg-3 control-label">Nombre</label>
                  <div className="col-lg-8">
                    <input
                      name="name"
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      value={formPerfil.name}
                    />
                    {errorList.name && (
                      <p style={{ color: "red" }}>{errorList.name}</p>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email</label>
                  <div className="col-lg-8">
                    <input
                      disabled="true"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      value={formPerfil.email}
                    />
                    {errorList.email && (
                      <p style={{ color: "red" }}>{errorList.email}</p>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Dirección</label>
                  <div className="col-lg-8">
                    <input
                      name="direction"
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      value={formPerfil.direction}
                    />
                  </div>
                </div>
                {changeInput && (
                  <div className="form-group" style={{ marginTop: "1rem" }}>
                    <div className="col-lg-8">
                      <button type="submit" className="btn btn-primary">
                        Guardar cambios
                      </button>
                      <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                      {/* <button type="button" className="btn btn-secondary" style={{marginLeft:'1rem'}}>Cancelar cambios</button> */}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile;
