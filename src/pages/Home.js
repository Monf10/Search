import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import apiRequest from "./apiRequest";
import Page from "./Page";

export function Home(){
  // ახალი ჰუკი, გვეხმარება სერჩის ლოგიკის დამუშავებაში. თუ გვაქვს შესაბამისი სერვისი
  let [searchParames, setSeachParams] = useSearchParams()

  //როგორც აქამდე ახლაც useStateით ვამუშავებთ  ინფუთში გადაცემულ ინფორმაციას
  const [itemValue, setItemValue] = useState("")

  //დააკვირდით რომ ქეშში უნიკალური მნიშვნელობები უნდა შევინახოთ, ამიტომ აუცილებელია პირველი არგუმეტი იცვლებოდეს პროდუქტების 
  //მიხედვით. რექვესთში ენდპოინტის შეცვლა მოგვიწევს, რადგან სერვისი სხვანაირად არის აწყობილი. 
  const {data} = useQuery(["product", itemValue] , () => apiRequest("GET", "products/search?q=" + itemValue) || "")
  //როგორც წესი link/?q=search= ს იყენებენ ძებნისთვის მაგრამ ამ კონკრეტულ api ზე ადგილები არის შეცვლილი ამიტომ დააკვირდით ყველა ლინკს
  
  //let navigate = useNavigate()
  
  //მხოლოდ ერთხელ რომ გამოვიტანოთ მომხარებლის მოძებნილი ელემენტი ავაწყოთ useEffect, სხვა შემთხვევაში რენდომად შეიცვალება ინფორმაცია
  useEffect(() =>{
    setItemValue(itemValue)
  },[])

  //ფუნქცია არსებული ჰუკის დახმარებით შექმნის ლინკს search = ის ელემენტი რომელიც გადავეცით
  function searchItem(e){
    e.preventDefault();
    setSeachParams({
      search : itemValue
    })
    // navigate("/products/search?q=" + itemValue) სხვა გევრდზე გადასაყვანად შეგიძლიათ ააწყოთ ნავიგაცია
  }
    return(
      <Page>
{/* ჩავამატოღ input ელემენტი, რომელსაც ავაუშავებთ როგორც ძებნის ლოგიკას */}
        <div className="search">
          <form action="" onSubmit={searchItem}>
             {/* ფორმის დასაბმითებაზე ანუ ღილაკზე/ენთერზე დაჭერისას გაეშვება ძებნის ფუნქცია */}
           
            <input
            type="text" 
            // აუცილებლად ის ველიუ უნდა აგდავცეთ რასაც ჩაწერს მომხმარებელი
            value={itemValue}
            onChange={e => setItemValue(e.target.value)}/>
            <button type="sumbit">Search</button>
          </form>
        </div>

        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">RECENTLY ADDED</h2>
          </div>

          <div className="row tm-mb-90 tm-gallery">
          {
            (data || []).map(item => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" key={item.id}>
              <figure className="effect-ming tm-video-item">

                <img src={"https://i.dummyjson.com/data/products/1/1.jpg"} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Buy Now</h2>

                  <Link to={"/product/"+ item.id}href="photo-detail.html">Buy Now</Link>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">

                <span className="tm-text-gray-light">{item.title}</span>
                <span>{item.price  + ".00 $"}</span>
              </div>
            </div>
            ))
          }
          </div>
        </div>
      </Page>
    
    )
}