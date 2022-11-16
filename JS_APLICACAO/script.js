function createCardElement() {
let card_el = document.createElement("article")
card_el.classList.add("card", "mb-2", "mx-2")

let img_el = document.createElement("img")
img_el.src = "http://farm9.staticflickr.com/8445/7763429394_837a23640f_o.jpg"
img_el.alt = "Hale-Bopp: the Great Comet of 1997"
img_el.classList.add("card-img-top")

let card_body_el = document.createElement("div")
card_body_el.classList.add("card-body")

let card_title = document.createElement("h3")
card_title.textContent = "Hale-Bopp: the Great Comet of 1997"
card_title_el.classList.add("card-title")

let card_description = document.createElement("p")
card_description.textContent = "Tem short years ago. comet Hale-Bopp rounded the sun and offered a dazzling spectacle [...]"
card_description_el.classList.add("card-text")



card_el.appendChild(img_el)

card_body_el.appendChild(card_title_el)
card_body_el.appendChild(card_description)

card_el.appendChild(card_body_el)

return card_el
}