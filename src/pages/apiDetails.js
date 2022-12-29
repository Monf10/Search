import axios from "axios"
export default function apiDetails(method,endpoint){
    return axios ({
        url : "https://dummyjson.com/products/" + endpoint,
        method
    })

    .then(response => response.data)

}

// მეორე  api ფუნქცია, რომელსაც ვიყენებთ დეტალების გვერდზე მონაცემების ჩასატვირთად. შეცვლილია ლინკი და შედეგი
//რომელიც ბრუნდება ფუნქციიდან. სხვა შემთხვევაში ვერ შევძლებდით ცალცალკე ინფოს წაკიტხვას (მაგ სათაური, ფასი და სხვა)