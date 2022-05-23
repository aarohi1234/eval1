//store the products array in localstorage as "products"

function Product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function addData(event){
    event.preventDefault();
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let image=form.image.value;
    let s1= new Product(type,desc,price,image)
    let data=JSON.parse(localStorage.getItem("Product"))
    data.push(s1)
    localStorage.setItem("Product",JSON.stringify(data))
    append()
}



