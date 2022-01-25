//  Age Calculator start here
const sign_up_form = document.getElementById('sign_up_form')
const output = document.getElementById('output')
const name = document.getElementById('name')

sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault()

    let date = this.querySelector('input[type="date"]').value
    let time = this.querySelector('input[type="time"]').value
      
    if (name.value == '' || date.value == '' || time.value == '') {
        output.innerHTML = `<p class = 'alert alert-danger'>All fields are required</p>`
    } else{
    
        let start_time = new Date()
    let end_time = new Date(date + ' ' + time)
        
    let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

    let total_sec = Math.floor(time_diff / 1000)
    let total_min = Math.floor(total_sec / 60)
    let total_hour = Math.floor(total_min / 60)
    let total_day = Math.floor(total_hour / 24)
        
    let total_month = Math.floor(total_day / 30.38)
    let total_year = Math.floor(total_month / 12)
        
      
    let month = Math.floor(Math.abs(total_month - (total_year * 12)));
    let day = Math.floor(Math.abs(total_day - (total_year * 12 * 30.38) - (month * 30.38)))

    
        output.innerHTML = ` <p class= 'alert alert-success'>
        Hi, ${name.value}, You are ${zero(total_year)} year, ${zero(month)} month & ${zero(day)} days old.
        
        </p> `
    }
    
    this.querySelector('input[type="date"]').value = ''
    this.querySelector('input[type="time"]').value = ''
    this.querySelector('#name').value= ''

})
//  Age Calculator end here


// - Product with LS start here
// get elements for products
const add_products = document.getElementById('add_products')
const products_area = document.querySelector('.products_area')
// products submit form

add_products.addEventListener('submit', function (e) {
    e.preventDefault()
    
    let name = this.querySelector('input[name="name"]').value
    let price = this.querySelector('input[name="price"]').value
    let sale = this.querySelector('input[name="sale"]').value
    let photo = this.querySelector('input[name="photo"]').value
    
    let product_arr

    if (getData('add_products')) {
        product_arr = getData('add_products')
    } else {
        product_arr = []
    }

    product_arr.push({
        name: name,
        price: price,
        sale: sale,
        photo: photo
    })

    sendData('add_products', product_arr)

    allProducts()

    
    this.querySelector('input[name="name"]').value = ''
    this.querySelector('input[name="price"]').value = ''
    this.querySelector('input[name="sale"]').value = ''
    this.querySelector('input[name="photo"]').value = ''

})

allProducts()
function allProducts(){

    let all_products = getData('add_products')

    let data = ''

    all_products.map(p_data => {
        data += `

        <div class="col-md-3">
             <div class="card shadow">
               <img src="${p_data.photo}" alt="">
             <div class="card-body">
                <h4>${p_data.name}</h4>
                 <p> <span class="mr-5 text-danger">${p_data.price}</span><span>${p_data.sale}</span></p>
               </div>
               <input class="btn btn-secondary " value="Add to cart">
                        
            </div>
        </div> 
        
        `

    })

    products_area.innerHTML = data
    
} 
// - Product with LS end here


// - Devs with LS start here
// get elements for devs
const devs_form = document.getElementById('devs_form')
const devs_area = document.querySelector('.devs-area')

// Devs form submit 
devs_form.addEventListener('submit', function(e){
    e.preventDefault()

    let name = this.querySelector('input[name="name"]')
    let gender = this.querySelector('input[name="gender"]:checked')
    let skill = this.querySelectorAll('input[name="skill"]:checked')
    let photo = this.querySelector('input[name="photo"]') 
    let email = this.querySelector('input[name="email"]')
        
    let skills_arr = []

    for(let i = 0; i < skill.length ; i++){
        skills_arr.push(skill[i].value)
    }

    let data_arr

    if(getData('devs')){
        data_arr = getData('devs')
    }else{
        data_arr = []
    }

    data_arr.push({
        name : name.value, 
        gender : gender.value, 
        skills : skills_arr,
        photo: photo.value,
        email: email.value
    });

    sendData('devs', data_arr)

    allDevs()

})


allDevs()
function allDevs(){
    let all_devs = getData('devs')

    let data1 = ''
    all_devs.map(d => {

        let lists = ''

        d.skills.map(list => {
            lists += '<li> '+ list +'  </li>'
        });

        data1 += `
                <div class="col-md-4 my-3">
						<div class="card shadow">
							<img src="${ d.photo }" alt="">
							<div class="card-body">
								<h2>${ d.name }</h2>
								<p>Gender : ${ d.gender }</p>
								
								<label>Skills : </label>
								
								<ul class="list-group">
                                    
                                    ${ lists }
								
								</ul>
                                <p id="email">${d.email}</p>
								
							</div>
						</div>
					</div>  `

    })

    devs_area.innerHTML = data1

}
// - Devs with LS end here

