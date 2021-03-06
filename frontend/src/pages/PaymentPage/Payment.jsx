import "./style.css"


const Payment = () => {
    // const navigate = useNavigate();
    return (
<div class="container">
    <form action="">
        <div class="row">
            <div class="col">
                <h3 class="title">billing address</h3>
                <div class="inputbox">
                    <span>full name: </span>
                    <input type="text" placeholder="john doe"/>
                </div>
                <div class="inputbox">
                    <span>email: </span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputbox">
                    <span>address: </span>
                    <input type="text" placeholder="123 example drive"/>
                </div>
                <div class="inputbox">
                    <span>city: </span>
                    <input type="text" placeholder="Kaneohe"/>
                </div>
                <div class="flex">
                    <div class="inputbox">
                        <span>State</span>
                        <input type="text" placeholder="Hawaii"/>
                    </div>
                </div>
                <div class="inputbox">
                    <span>zip code</span>
                    <input type="text" placeholder="96744"/>
                </div>
            </div>

            <div class="col">
                <h3 class="title">payment</h3>
                
                <div class="inputbox">
                    <span>cards accepted :</span>
                    <img src="card_img.png" alt=""/>
                </div>
                <div class="inputbox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john doe"/>
                </div>

                <div class="inputbox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="inputbox">
                    <span>exp month :</span>
                    <input type="text" placeholder="January"/>
                </div>
                <div class="flex">
                    <div class="inputbox">
                        <span>exp year</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                </div>
                <div class="inputbox">
                    <span>CVV</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>
        </div>
        <input type="submit" value="checkout" class="submit-btn"/>
    </form>
</div>
)
}

export default Payment;