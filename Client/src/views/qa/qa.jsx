import Topbar from "../../components/Topbar/Topbar"
import { useState } from "react"
import style from "./qa.module.css"

export default function Qa () {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleQuestionClick = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  
    const faqData = [
      {
        seccion: "Cuenta",
        question: '¿Por qué crear una cuenta en Component corner?',
        answer: 'Al crear una cuenta en nuestro sitio, tendrás la oportunidad de comprar en la tienda con mayor diversidad de productos de tecnología y gaming . ¡Registrarse en Component corner es completamente gratis!En tu cuenta, podrás almacenar y gestionar todos tus datos personales. Además, podrás rastrear tus pedidos, crear listas de favoritos, acceder a promociones especiales, ¡entre muchas cosas más!',
      },
      {
        question: '¿Cómo accedo a mi cuenta?',
        answer: 'Siempre que ingreses a TECHBUNNY, puedes acceder a tu cuenta haciendo clic en "Iniciar sesión". Ingresa tu correo y contraseña o, si lo prefieres, conéctate con nosotros a través de Gmail',
      },
      {
        question: '¿Cómo recupero mi contraseña?',
        answer: 'Accediendo a "iniciar sesión" tendras la opcion de recuperar contraseña en caso de que la olvides',
      },
      {
        seccion: "Mercado Pago",
        question: 'Sobre Método de Pago: Mercado Pago',
        answer: 'Tu dinero disponible en Mercado Pago se transfiere al instante a la cuenta del receptor. Paga con Mercado Pago y tu compra estará 100% protegida. Te devolveremos el dinero si el producto no es lo que esperabas.',
      },
      {
        seccion: "Devoluciones",
        question: '¿Cuánto tiempo tengo para devolver un producto?',
        answer: 'Recuerda que tienes 10 días habiles para productos locales o 14 días habiles para productos internacionales, a partir de la fecha en que lo recibiste, para devolver tus productos. Además, ¡en Component Corner las devoluciones son gratis!',
      },
      {
        question: '¿En qué condiciones debe estar el producto y el empaque?',
        answer: 'Adicional al motivo y comentario de devolución, que facilitan procesar tu devolución, es importante que se cumplan las siguientes condiciones: (1) Producto: Sin señales de uso, daños físicos, precintos de seguridad alterados, accesorios completos. (2) Empaque: En óptimo estado, sin abolladuras o adhesivos que generen daño al momento de retirarlos.(3) Documentación: Comprobante de compra, guía de remisión y toda documentación adicional recibida al momento de la entrega. En caso de que la devolución sea de un celular, éste debe venir sin claves ni bloqueos.',
      },
    ];
  
    return (
        <div>
      <div className={style.container}>
        {faqData.map((faq, index) => (
          <div>
            {faq.seccion? <h2>{faq.seccion}</h2> : ""}
          <div key={index}>
            <div
              className={style.question}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && <div className={style.answer}><div className={style.answer__content}>{faq.answer}</div></div>}
          </div>
        
          </div>
        ))}
      </div>

      </div>
    );
}

