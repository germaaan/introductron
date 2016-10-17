// Pagina de inicio
exports.index = function(req, res) {
	res.render("index", {
		titulo: "Introductron: Inicio"
	});
};

// Pagina de creación de etiquetas
exports.prueba = function(req, res) {
	res.render("prueba", {
		titulo: "Introductron: Prueba"
	});
};