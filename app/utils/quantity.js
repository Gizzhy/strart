function increment(id) {
  var element = document.getElementById(id);
  var value = parseInt(element.innerHTML);
  if (value >= 0) {
    value++;
    element.innerHTML = value;
  }
}

export function decrement(id) {
  var element = document.getElementById(id);
  var value = parseInt(element.innerHTML);
  if (value > 0) {
    value = value - 1;
    element.innerHTML = value;
  }
}

export default increment;
