import React from 'react'

const Carousel = () => {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src="https://image.chewy.com/is/image/catalog/89372_MAIN._AC_SL1500_V1569016432_.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81fjfUnQKBS.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0542/9300/4483/collections/pet-crates-carriers.jpg?v=1665957081" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/61gq+0iTWCL.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel