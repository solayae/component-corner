import React, { useState } from 'react';
import styles from './qa.module.css';
import { FaArrowCircleUp } from "react-icons/fa"
import { Tooltip } from 'react-tooltip'

export default function Qa() {
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
      seccion: 'Cuenta',
      question: '¿Por qué crear una cuenta en Component corner?',
      answer: 'Al crear una cuenta en nuestro sitio, tendrás la oportunidad de comprar en la tienda con mayor diversidad de productos de tecnología y gaming. ¡Registrarse en Component corner es completamente gratis! En tu cuenta, podrás almacenar y gestionar todos tus datos personales. Además, podrás rastrear tus pedidos, crear listas de favoritos, acceder a promociones especiales, ¡entre muchas cosas más!',
    },
    {
      question: '¿Cómo accedo a mi cuenta?',
      answer: 'Siempre que ingreses a Component corner, puedes acceder a tu cuenta haciendo clic en "Iniciar sesión". Ingresa tu correo y contraseña o, si lo prefieres, conéctate con nosotros a través de Gmail',
    },
    {
      question: '¿Cómo recupero mi contraseña?',
      answer: 'Accediendo a "Iniciar sesión", tendrás la opción de recuperar contraseña en caso de que la olvides',
    },
    {
      seccion: "Politica de cambios",
      question: "¿Puedo cambiar lo que compre?",
      answer: "En Component corner, nos preocupamos por tu satisfacción y queremos asegurarnos de que estés satisfecho/a con tus compras. Por eso, ofrecemos políticas de cambio flexibles para garantizar que tengas una experiencia de compra sin problemas."
    },
    {
      question: "¿Cúales son los requisitos hacer un cambio?",
      answer: "Si por alguna razón no estás completamente satisfecho/a con un producto que has adquirido, te ofrecemos la posibilidad de realizar un cambio dentro de un plazo de 5 días habiles a partir de la fecha de compra. Para ser elegible para el cambio, el producto debe estar en su estado original, sin usar y en su embalaje original."
    },

    {
      seccion: 'Devoluciones',
      question: '¿Cuánto tiempo tengo para devolver un producto?',
      answer: 'Recuerda que tienes 10 días hábiles para productos locales o 14 días hábiles para productos internacionales, a partir de la fecha en que lo recibiste, para devolver tus productos. Además, ¡en Component Corner las devoluciones son gratis!',
    },
    {
      question: '¿En qué condiciones debe estar el producto y el empaque?',
      answer: 'Adicional al motivo y comentario de devolución, que facilitan procesar tu devolución, es importante que se cumplan las siguientes condiciones: (1) Producto: Sin señales de uso, daños físicos, precintos de seguridad alterados, accesorios completos. (2) Empaque: En óptimo estado, sin abolladuras o adhesivos que generen daño al momento de retirarlos. (3) Documentación: Comprobante de compra, guía de remisión y toda documentación adicional recibida al momento de la entrega. En caso de que la devolución sea de un celular, éste debe venir sin claves ni bloqueos.',
    },
    {
      seccion:"Envios",
      question:"Sobre el envío",
      answer: "Ofrecemos un servicio de envío confiable y eficiente para garantizar que tus productos lleguen a su destino de manera segura y puntual. Nuestro equipo de logística se encarga de gestionar todo el proceso de envío, desde la preparación del paquete hasta su entrega final."
    },
    {
      question:"¿Cúando llega mi compra?",
      answer: "En Component corner, entendemos que estar informado/a sobre el estado de tu pedido es importante para ti. Por eso, ofrecemos un servicio de verificación del estado del pedido para que puedas realizar un seguimiento de manera fácil y conveniente."
    },
    {
      seccion: 'Mercado Pago',
      question: 'Sobre Método de Pago: Mercado Pago',
      answer: 'Tu dinero disponible en Mercado Pago se transfiere al instante a la cuenta del receptor. Paga con Mercado Pago y tu compra estará 100% protegida. Te devolveremos el dinero si el producto no es lo que esperabas.',
    },

  ];

  return (
    <div className={styles.container}>
      <Tooltip id="my-tooltip" />
      <h1>PREGUNTAS FRECUENTES</h1>
    <div className={styles.container}>
      {faqData.map((faq, index) => (
        <div key={index}>
          {faq.seccion && <h2>{faq.seccion}</h2>}
          <br />
            <div
              className={`${styles.question} ${
                activeIndex === index ?
                 styles.active :
                  ''
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.expanded : ''
              }`}
            >
              <div className={styles.answer__content}>{faq.answer}</div>
            </div>
        </div>
      ))}
    </div>
    <div className={styles.scrolltop}>
        <a href="#">
          <FaArrowCircleUp className={styles.scrollicon} data-tooltip-id="my-tooltip"  data-tooltip-content="Inicio"  place="bottom"/>
        </a>
    </div>
    </div>
  );    
  
 }