function greet(lng, name) {
  if (lng === 'en') {
    return `Hello ${name}`
  }
  return `Hola ${name}`
}

console.log(greet('sp', 'samim'))
