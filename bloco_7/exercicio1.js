const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701

  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order['phoneNumber'];
  const endereco = `R. ${order.address['street']}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  const mensagem = `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, ${endereco}`;

  console.log(`${mensagem}`);

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.
  order.name = 'Luiz Silva'
  order.order.pizza.muzzarella = {amount: 1, price: 20}
  order.order.pizza.calabresa = {amount: 1, price: 20}
  const priceMuzzarella = order.order.pizza.muzzarella.price;
  const priceCalabresa = order.order.pizza.calabresa.price;
  const priceCoca = order.order.drinks.coke.price;
  let totalPrice = (priceMuzzarella + priceCalabresa + priceCoca).toFixed(2);
  order.payment.total = `${totalPrice}`;
  const preco = order.payment.total;
  const mensagem = `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${preco}`;

  console.log(`${mensagem}`);
}

orderModifier(order);
