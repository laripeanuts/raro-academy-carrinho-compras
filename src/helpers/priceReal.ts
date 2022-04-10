export 	const priceReal = (price: number) => {
	return price.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
};