

let form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  let sf = document.querySelector("#sf")

let sx_mu = document.querySelector("#sx_mu")

let x_x_m = document.querySelector("#x_x_m")

let x_i_m = document.querySelector("#x_i_m")
let x_mx_m = document.querySelector("#x_mx_m")
let x_m_m = document.querySelector("#x_m_m")



let sx_tu = document.querySelector("#sx_tu")

let x_x_t = document.querySelector("#x_x_t")

let x_i_t = document.querySelector("#x_i_t")
let x_mx_t = document.querySelector("#x_mx_t")
let x_m_t = document.querySelector("#x_m_t")

x_x_m__value = x_i_m.value + x_mx_m.value + 1.07 * x_m_m.value
x_x_t__value = x_i_t.value + x_mx_t.value + 1.07 * x_m_t.value

sx_mu__value = 1.2 * x_x_m__value
sx_tu__value = 1.2 * x_x_t__value

sf__value = sx_mu__value - sx_tu__value

x_x_m.innerHTML = x_x_m__value
x_x_t.innerHTML = x_x_t__value

sx_mu.innerHTML = sx_mu__value
sx_tu.innerHTML = sx_tu__value

sf.innerHTML = sf__value
})