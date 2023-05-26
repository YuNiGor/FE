const info = ["item", "logo", "lift", "icon", "ice", "let"];

const updatedInfo = info.map(item => {
  if (item.startsWith("pro")) {
    return "pro" + item;
  } else if (item.startsWith("min")) {
    return "min" + item;
  }
});

console.log(updatedInfo);
