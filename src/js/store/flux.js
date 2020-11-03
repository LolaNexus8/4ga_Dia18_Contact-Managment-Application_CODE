// const agendaSlug = "LolaNexus8";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			listContacts(slug) {
				const store = setStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + slug;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ contacts: json });
					});
			},
			createContact(data) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify({
						full_name: data.full_name,
						email: data.email,
						agenda_slug: "LolaNexus8",
						address: data.address,
						phone: data.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts("LolaNexus8");
					});
			},
			getContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						return json;
					});
			},
			deleteContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "DELETE"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						return json;
					});
			},
			updateContact() {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "PUT",
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "LolaNexus8",
						address: data.address,
						phone: data.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts("LolaNexus8");
					});
			}
		}
	};
};
// evitar error de compatibilidad
export default getState;
