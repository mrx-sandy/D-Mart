import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  const [slider, SetSlider] = useState([]);

  const getSlid2 = async () => {
    try {
      const response = await fetch("https://vsmart.ajspire.com/api/categories");
      const data = await response.json();
      SetSlider(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getSlid2();
  }, []);
  return (

    <section className="" style={{ marginTop: "200px" }}>
      <div className="container">

        <Carousel interval={2000}>
          {slider.map((category, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {slider.slice(index, index + 5).map((category) => (
                  <Link to={`/product-shop/${category.category_id}/${category.subcategory_id}`} >
                    <a
                      key={category.category_id}
                      className="suggest-card shadow my-2 rounded-bottom-5  "
                      href={`/product-shop/${category.category_id}/0`}
                    >
                      <img
                        className=" rounded-pill"
                        style={{ width: 200, height: 101 }}
                        src={category.category_banner}
                        alt="1658902579category.jpg"
                      />
                      <div>
                        <h5 className="text-center text-bg-success">
                          {category.category_name}
                          <br />
                        </h5>
                      </div>
                    </a>
                  </Link>

                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default CategorySlider