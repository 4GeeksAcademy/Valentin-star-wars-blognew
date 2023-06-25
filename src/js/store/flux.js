const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      character: [],
      planets: [],
      planet: [],
      vehicles: [],
      vehicle: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/people/",
            settings
          );
          const json = await request.json();
          const data = json;
          setStore({ people: data.results });
        } catch (error) {
          console.log("No se pudo cargar: ", error);
        }
      },

      getCharacterDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const data = await request.json();
          setStore({ character: [...store.character, data.result.properties] });
        } catch (error) {
          console.log(error);
        }
      },

      charDescription: (url) => {
        getActions().getCharacterDescription(url);
      },
      getPlanet: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/planets/",
            settings
          );
          const json = await request.json();
          const data = json;
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },

      getPlanetDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const json = await request.json();
          const data = json;
          setStore({ planet: [...store.planet, data.result.properties] });
        } catch (error) {
          console.log(error);
        }
      },

      planetDescription: (url) => {
        getActions().getPlanetDescription(url);
      },
      getVehicle: async () => {
        try {
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(
            "https://www.swapi.tech/api/vehicles/",
            settings
          );
          const json = await request.json();
          const data = json;
          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },

      getVehicleDescription: async (url) => {
        try {
          const store = getStore();
          const settings = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          };

          const request = await fetch(url, settings);
          const json = await request.json();
          const data = json;
          setStore({ vehicle: [...store.vehicle, data.result.properties] });
        } catch (error) {
          console.log("Probleme lors du chargement", error);
        }
      },

      vehicleDescription: (url) => {
        getActions().getVehicleDescription(url);
      },

      addCharacters: (char) => {
        const store = getStore();
        const favoriteExist = store.favorites.includes(char);
        if (!favoriteExist) {
          setStore({ favorites: [...store.favorites, char] });
        }
      },
      addPlanets: (planet) => {
				const store = getStore()
				const favoriteExist = store.favorites.includes(planet)
				if (!favoriteExist){
					setStore({favorites: [...store.favorites, planet]})
				}
			},
			addVehicles: (vehicle) => {
				const store = getStore();
				const favoriteExist = store.favorites.includes(vehicle)
				if (!favoriteExist) {
					setStore({favorites: [...store.favorites, vehicle]})
				}
			},
      deleteFavorite: (index) => {
        const store = getStore();
        const updatedFavorites = [...store.favorites];
        updatedFavorites.splice(index, 1);
        setStore({ favorites: updatedFavorites });
      },
    },
  };
};

export default getState;
