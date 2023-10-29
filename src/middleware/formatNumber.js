const formattedNumber = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  
  export default formattedNumber;