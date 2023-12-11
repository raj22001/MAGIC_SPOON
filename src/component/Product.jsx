import "./products.css"
import Chart from "../assets/CORE_CHART.avif"

const Product = () => {
  return (
    <section id="product-us" className="bg-lavender">
        <svg className="us-vs" id="us-vs-them-banner" viewBox="0 0 83.53 734.72" alt="Us vs them" aria-label="Us vs them">
          <g><path d="M2.13,715.6h47c10.42,0,17-5.32,17-15.29S59.54,685,49.12,685h-47V666.91h47c20.39,0,33.41,12.68,33.41,33.4s-13,33.41-33.41,33.41h-47Z"></path><path d="M23.65,634c5.77,0,8.6-6.23,10.53-16.64,3.73-20.05,9.4-28.65,24.23-28.65,13.93,0,24.12,12.23,24.12,32.27a45.74,45.74,0,0,1-5.44,22.31c-3.62,6.68-9.73,11.66-18.34,15.06L49.12,643c11.67-3.28,17.56-11.66,17.56-22.65,0-8.15-2.83-13.59-7.7-13.59-5.44,0-8.16,3.51-10.19,17.56-2.38,16.75-10.31,27.74-25.37,27.74C11.08,652.08,1,640.64,1,622.64c0-15.06,6.79-26,19.82-30.58l8.49,14.72c-9.06,2.84-13,7.93-13,16.42C16.29,629.66,19.46,634,23.65,634Z"></path><path d="M2.13,493.44v-19.7L81.4,503v26.27L2.13,558.44v-19.7l65.34-22.65Z"></path><path d="M23.65,450.53c5.77,0,8.6-6.23,10.53-16.65,3.74-20,9.4-28.65,24.23-28.65,13.93,0,24.12,12.23,24.12,32.28a45.84,45.84,0,0,1-5.43,22.3c-3.63,6.68-9.74,11.67-18.35,15.06l-9.62-15.28c11.66-3.29,17.55-11.67,17.55-22.65,0-8.15-2.83-13.59-7.7-13.59-5.44,0-8.15,3.51-10.19,17.55-2.38,16.76-10.31,27.75-25.37,27.75C11.08,468.65,1,457.21,1,439.21c0-15.07,6.8-26,19.82-30.58l8.49,14.72c-9.06,2.83-13,7.93-13,16.42C16.29,446.23,19.46,450.53,23.65,450.53Z"></path><path d="M63.28,377.5H81.4v18.11H63.28Z"></path><path d="M18.55,270.15v27.18H81.4v18.12H18.55v27.17H2.14V270.15Z"></path><path d="M50.83,242.3H81.4v18.12H2.14V242.3H34.41V207.2H2.14V189.08H81.4V207.2H50.83Z"></path><path d="M2.14,113.33H18.56v43.14H32.71V116.72H49.13v39.75H65V112.2H81.4v62.39H2.14Z"></path><path d="M81.4,19.12H11.65L81.4,37.24V64.41L11.65,82.53H81.4v18.12H2.14V67.81l66.35-17-66.35-17V1H81.4Z"></path></g>
        </svg>

        <div className="product-width product-w-1">
            <h2>How do we stack up to the Classics ? </h2>
            <img src={Chart} alt="" />
            <div id="shopify-section-product_us_content" className="shopify-section">
                <p className="p-data">
                    <br/>
                    **SERVING SIZES ARE AS FOLLOWS: FRUITY 38G. PEANUT BUTTER 36G. COCOA 37G. FROSTED 37G. CINNAMON ROLL 37G, BLUEBERRY MUFFIN 38G, MAPLE WAFFLE 38G, COOKIES AND CREAM 37G, HONEY NUT 37G. 
                    INFORMATION AS OF JANUARY 2023.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Product
