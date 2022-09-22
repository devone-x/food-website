AOS.init();

swal("Hallo 👋 ","Selamat Datang Di Website Resmi Kuliah (Kulit Lumpia Renyah)");

let add = document.querySelector(".plus"),
    min = document.querySelector(".minus"),
    inpOrder = document.querySelector("input"),
    total = document.querySelector(".total"),
    pesan = document.querySelector(".pesan"),
    order = 0,
    price = 0;


add.addEventListener("click", () => {
  inpOrder.value = ++order;
  total.innerText = `Total Harga : Rp. ${price+=3000}`;
});

min.addEventListener("click", () => {
  if (order > 0) {
    inpOrder.value = --order;
    total.innerHTML= `Total harga : Rp. ${price-=3000}`;
  }
});

pesan.addEventListener("click", function() {
  this.href = `https://api.whatsapp.com/send?phone=6289517056228&text=Pesan%20${order}%20Lumpia%20Kering%20(Rp.%20${price})`;
});

function msg() {
  swal({
   title: "Terimakasih Telah Memesan! ☺️",
   text: "Semoga Kamu Suka!",
   icon: "success",
   button: "Oke"
  });
}

function send() {
  swal({
   title: "Terimakasih 💌",
   icon: "success",
   button: "Oke"
  });
}