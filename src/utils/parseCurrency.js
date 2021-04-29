export function parseCurrencyARS(num) {
  return Number(num).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

export function parseCurrencyUSD(num) {
  return Number(num).toLocaleString("es-AR", {
    style: "currency",
    currency: "USD",
  });
}
