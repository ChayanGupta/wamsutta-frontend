import React from 'react'
import '../../styles/FAQ.css'

const Page = () => {
    return (
        <section className='faq-main-div'>
            <div className='faq-heading-div'>
                <h3 className='faq-heading'>Frequently Asked Questions</h3>
            </div>
            <div className='faq'>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle1" />
                    <h2 className="handle">
                        <label htmlFor="handle1">Do the duvet covers have ties on the corners to secure the edges of the Duvet?</label>
                    </h2>
                    <div className="content">
                        <p>Yes, it comes with four corner ties for perfect fit that do not move or bunch up and stay firm on duvet along with hidden button closure give you a protective layer for duvet and envelope closure sham give your bedding a 5 star hotel quality luxurious elegant look.</p>
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle2" />
                    <h2 className="handle">
                        <label htmlFor="handle2">Are these sheets heavy?</label>
                    </h2>
                    <div className="content">
                        <p>The weight of the sheet totally depends on the thread count. A 1000 thread count sheet is heavier than a 800, 600 or 400 thread count sheet. If you want to purchase a lightweight sheet then we recommend that you purchase our 400 thread count sheets.</p>    
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle3" />
                    <h2 className="handle">
                        <label htmlFor="handle3">How badly do they wrinkle?</label>
                    </h2>
                    <div className="content">
                        <p>Our sheets are made from 100% Long Staple Cotton. Cotton fabrics offer superior comfort, but tend to wrinkle. To reduce wrinkling, wash in gentle cycle separately in water and tumble dry low. Do remember to remove the sheets immediately from the washer and the dryer once the respective cycles is completed. Please refer to our Wash Care section for more details.</p>
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle4" />
                    <h2 className="handle">
                        <label htmlFor="handle4">Are these sheets made from Pima or Egyptian cotton?</label>
                    </h2>
                    <div className="content">
                        <p>These sheets are made from 100% Long Staple cotton of Indian origin. The staple length of the cotton is of Egyptian/Pima cotton standard. Therefore, the durability and other characteristics of the sheets are similar to that of sheets made of Egyptian and pima cotton.</p>
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle5" />
                    <h2 className="handle">
                        <label htmlFor="handle5">What exactly does the California King 4 piece include?</label>
                    </h2>
                    <div className="content">
                        <p>The California King 4 piece includes 1 California King Size flat sheet 108” X 102”, 1 Fully Elasticized Fitted sheet with deep pockets: 72” x 84” + 15” and 2 King Size pillowcases 20” x 40”.</p>
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle6" />
                    <h2 className="handle">
                        <label htmlFor="handle6">What&apos;s the difference between King and California King size fitted sheet?</label>
                    </h2>
                    <div className="content">
                        <p>A King size fitted sheet is 78&quot; X 80&quot; and California King size fitted sheet is 72&quot; X 84&quot;. The size of the flat sheet in both the King and California variants are the same - 108&quot; x 102&quot; and so are the pillowcases 20&quot;x 40&quot;. Please check our size guide page for more information.</p>
                    </div>
                </section>
                <section className="accordion">
                    <input type="checkbox" name="collapse2" id="handle7" />
                    <h2 className="handle">
                        <label htmlFor="handle7">What is included in the 3-piece XL twin Sheet set?</label>
                    </h2>
                    <div className="content">
                        <p>The 3-piece XL Twin Sheets Set includes - 1 Standard pillow case (20” x 30”), 1 Twin XL flat (66” x 102”) and 1 Twin XL fitted sheet (39” x 80” + 15”).</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Page