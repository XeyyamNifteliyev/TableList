
const data = [
    { product: "Shoes", price: 50, quantity: 20, buy: 0, sale: 0 },
    { product: "Blouse", price: 100, quantity: 10, buy: 0, sale: 0 },
    { product: "Hat", price: 40, quantity: 0, buy: 7, sale: 0 },
    { product: "Sweatshirt", price: 100, quantity: 90, buy: 14, sale: 0 },
    { product: "T-Shirt", price: 20, quantity: 50, buy: 30, sale: 0 },
    { product: "Trousers", price: 30, quantity: 30, buy: 0, sale: 1 },
    { product: "Coat", price: 500, quantity: 100, buy: 64, sale: 0 },
    { product: "Dress", price: 500, quantity: 70, buy: 70, sale: 0 }
];



let left = document.querySelectorAll(".left")
let tbl = document.getElementById("tbl")
let h_tr = document.getElementById("h_tr")
let b_tr = document.getElementById("b_tr")
let right = document.querySelector(".right")
let cards = document.querySelector(".cards")

let minus = document.getElementById("minus")
let select = document.getElementById("select")
let number = document.getElementById("number")
let plus = document.getElementById("plus")
let confirm = document.getElementById("confirm")

function yarad(i) {
    b_tr.innerHTML = ""
    select.innerHTML = ""
    number.value = ""
    i.forEach(item => {
        let { product, price, quantity, buy, sale } = item
        b_tr.innerHTML += `
                <td>${product}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${buy}</td>
                <td>${sale}</td>
            
            `
        select.innerHTML += `
            
            <option>${product}</option>`

    })


}

yarad(data)


function sl(a) {
    data.forEach(item => {
        if (item.product == a.value) {
            number.value = item.quantity

            if (item.quantity == 0) {
                number.setAttribute("disabled", "disabled")
                confirm.setAttribute("disabled", "disabled")
            } else {
                number.removeAttribute("disabled")
                confirm.removeAttribute("disabled")
            }
        }

    })
}

minus.addEventListener("click", () => {
    let min = data.find(item => item.product == select.value)
    if (number.value > 0) {
        number.value -= 5
    }
})

plus.addEventListener("click", () => {
    let min = data.find(item => item.product == select.value)
    number.value = +number.value + 5
})


confirm.addEventListener("click", () => {
    let cem = data.find(item => item.product == select.value)
    let kod = ""

    if (number.value != "" && number.value > 0) {
        kod += `
            <div class = "ana">
                <div>Mehsul :${cem.product}</div>
                <div>Miqdar :${number.value}</div>
                <div>Qiymeti : ${cem.price}</div>
                <div class = "umumi">Umumi Mebleg : ${number.value * cem.price}</div>
            </div>
                `
    }
    cards.innerHTML += kod

    if (cem.quantity > 0) {
        cem.sale = cem.buy + +number.value
        cem.quantity = cem.quantity - number.value
        cem.buy = cem.buy + +number.value
    }
    else if (cem.quantity == 0) {
        number.setAttribute("disabled", "disabled")
        confirm.setAttribute("disabled", "disabled")
    }
    yarad(data)
})








