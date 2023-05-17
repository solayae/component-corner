import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get('/payment/history');
      setPaymentHistory(response.data.paymentHistory);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Historial de Compras</h2>
      {paymentHistory.length === 0 ? (
        <p>No haz realizado ninguna compra.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment) => (
              <tr key={payment.orderNumber}>
                <td>{payment.orderNumber}</td>
                <td>{payment.date}</td>
                <td>${payment.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PaymentHistory;