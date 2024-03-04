const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir -input")
const ekleFormu = document.getElementById("ekle-formu")


let gelirler = 0

ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    ekleFormu.reset()
})