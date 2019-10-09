let url = "http://localhost:8088"

export default {
    post(resource, newObj){
        return fetch(`${url}/${resource}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(newObj)
            }).then(newObj => newObj.json())
          },

    getAll(resource){
        return fetch(`${url}/${resource}`).then(newObj => newObj.json())
    }
}