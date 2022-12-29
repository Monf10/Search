import axios from "axios"
export default function apiRequest(method,endpoint){
    return axios ({
        url : "https://dummyjson.com/" + endpoint,
        method
    })

    .then(response => response.data.products)

}
// პირველი  api ფუნქცია, რომელსაც ვიყენებთ home გვერდზე მონაცემების ჩასატვირთად. 
//აბრუნებს სხვა შედეგს და ლინკიც განსხვავდება
