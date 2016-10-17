var sections = require("./sections");

module.exports = function(app) {
	// Rutas de acceso
	app.get("/", sections.index);
	app.get("/prueba", sections.prueba);

	// Captura errores
	app.use(function(req, res, next) {
		var err = new Error("Error: página no encontrada.");
		err.status = 404;
		next(err);
	});

	// Manejador de errores:
	app.use(function(err, req, res, next) {
		res.status(err.status);
		res.render("error", {
			mensaje: err.message,
		});
	});
};