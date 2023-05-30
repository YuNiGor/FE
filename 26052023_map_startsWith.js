const info = ["item", "logo", "lift", "icon", "ice", "let"];

const updatedInfo = info.map(el => {
  if (el.startsWith("pro")) {
    return "pro" + el;
  } else if (el.startsWith("min")) {
    return "min" + el;
  }
});

console.log(updatedInfo);