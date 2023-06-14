//Implement a debounce function to prevent a function from being called too frequently.

function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function handleInput(value) {
    console.log('Input:', value);
  }
  
  const debouncedHandleInput = debounce(handleInput, 500);
  
  // Call the debounced function
  debouncedHandleInput('Hello');
  
  // If called again within 500ms, the previous call will be canceled
  debouncedHandleInput('World');
  