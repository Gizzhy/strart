export const handlePurchase = (id, name, unitPrice, quantity, size) => {
  const totalPrice = unitPrice * quantity;
  const message = `Good day, I would like to order:\nShoe name: ${name}\nTotal Price: ₦${totalPrice}\nQuantity: ${quantity}\nSize: ${size}`;

  const phoneNumber = "YOUR_PHONE_NUMBER"; // replace with your phone number
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};
