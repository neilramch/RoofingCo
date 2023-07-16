import React from 'react'
import BottomBanner from './BottomBanner'

function Store() {
  return (
    <div className='service-parent'>
        <div className="service-images">
        <figure>
        <img src="https://d9hhrg4mnvzow.cloudfront.net/buy.rooftopdesigns.net/lp/beeb8323-mask-group.png" alt="Service Image 1"/>
            <figcaption>
            <h3>Asphalt</h3>
                <ul>
                <li>Durable</li>
                    <li>Long-lasting</li>
                    <li>Steel, aluminum, or copper</li>
                </ul>
            </figcaption>
        </figure>

            <figure>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/buy.rooftopdesigns.net/lp/a613d95d-mask-group.png" alt="Service Image 2"/>
            <figcaption>
                <h3>Metal</h3>
                    <ul>
                        <li>Cost-effective</li>
                        <li>Protection against UV rays, water, and wind</li>
                        <li>Quicker installation</li>
                    </ul> 
                </figcaption>
            </figure>
            
        <figure>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/buy.rooftopdesigns.net/lp/7dc4e60b-mask-group.png" alt="Service Image 3"/>
            <figcaption>
                <h3>Divinci</h3>
                    <ul>
                        <li>Elegance</li>
                        <li>Low maintenance</li>
                        <li>Enhanced durability</li>
                    </ul>
            </figcaption>
            </figure>
        </div>
        <div className="services-container">

        <div className="service-item inspection">
          <h3>Roof Inspection</h3>
          <p>
            The integrity of your roof is crucial to protecting you and your home. A foolproof way to ensure your roof is fit to withstand the elements is to have it inspected by the roofing professionals at City Roofing.
            We assess your roof’s durability and offer recommendations for necessary improvements. Contact us to schedule an inspection.
          </p>
        </div>
        <div className="service-item item2">
          <h3>Roof Replacement</h3>
          <p>
            The integrity of your roof is crucial to protecting you and your home. A foolproof way to ensure your roof is fit to withstand the elements is to have it inspected by the roofing professionals at City Roofing.
            We assess your roof’s durability and offer recommendations for necessary improvements. Contact us to schedule an inspection.
          </p>
        </div>
        <div className="service-item item3">
          <h3>Roof Repair</h3>
          <p>
            The integrity of your roof is crucial to protecting you and your home. A foolproof way to ensure your roof is fit to withstand the elements is to have it inspected by the roofing professionals at City Roofing.
            We assess your roof’s durability and offer recommendations for necessary improvements. Contact us to schedule an inspection.
          </p>
        </div>
        </div>
            <BottomBanner />
        </div> 
         )
}

export default Store