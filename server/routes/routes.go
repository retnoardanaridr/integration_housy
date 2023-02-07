package routes

import "github.com/gorilla/mux"

func RouteInit(r *mux.Router) {
	UserRoutes(r)
	AuthRoutes(r)
	CityRoutes(r)
	HousyRoutes(r)
	TransactionRoutes(r)
}
