import axios from 'axios'

var api={

    getData(param){

        axios.get('/a.json')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}



export default api

