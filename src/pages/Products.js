import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apiDetails from "./apiDetails";
import Page from "./Page";


export function Products(){
  const param = useParams()
  const {data, isLoading} = useQuery(["product" , param.productId], () => apiDetails("GET",  param.productId))
  if(isLoading){
    return <div> Load</div>
  }  
    return(
        <Page>

          <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">

              {/* ყველა მონაცემს ვკითხულობთ ცალცალკე. შეცვალეთ სურვილის მიხედვით*/}

              <h2 className="col-12 tm-text-primary"> {data.title} </h2>
            </div>
            <div className="row tm-mb-90">
              <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">

                 {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                <img src={data.images[0]} alt="Image" className="img-fluid2" />
              </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <div className="tm-bg-gray tm-video-details">
                <p className="mb-4">
                   {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                 {data.description}  Price : {data.price} .00 $ 
              </p>
              <div className="text-center mb-5">
                <a href="#" className="btn btn-primary tm-btn-big">
                  ADD TO CART
                </a>
              </div>
              <div>
                <h3 className="tm-text-gray-dark mb-3">Details</h3>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                   {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                {data.brand}
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                   {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                {data.category}
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                   {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                Rating : {data.rating}
                </a>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                   {/* ყველა მონაცემს ვკითხულობთ ცალცალკე */}
                  Stock : {data.stock}
                </a>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        </Page>


    )
}