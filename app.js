const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`
    }
  ];
  
  let container = document.querySelector("#container");
  let butonlar = document.getElementsByTagName("button");
  
  //categoriler için array oluşturma
  let cats = ["All"];
  menu.forEach((x) => {
    if(!cats.includes(x.category)){
      cats.push(x.category);
    }
  });
  
  //butonları oluşturma
  for (let i of cats) {
    newButon = document.createElement("button");
    newButon.textContent = i;
    newButon.setAttribute("id", i);
    newButon.setAttribute("class", "btn btn-primary m-2");
  document.querySelector("#butonlarDOM").append(newButon);
  };
  
  //butona event fonksiyonu ekleme
  for (let x of butonlar) {
    x.addEventListener("click", function () {
      return olustur(x.id);
    });
  }
  
  //butondan gelen id'ye göre yemek menülerini ekrana basma
  function olustur(cat) {
    container.innerHTML = "";
    if(cat == "All"){
      return ALL();
    };
    menu.filter((x) => {
      if (x.category === cat) {
        newDish = document.createElement("div");
        newDish.setAttribute(
          "class",
          "col");
        newDish.innerHTML = `
        <div class="card mb-4 rounded-3 shadow-sm">
    <img src="${x.img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${x.title}</h5>
      <p class="card-text">${x.desc}</p>
    </div>
     <div class="card-footer">
    <h2 class="pricing-card-title">${x.price}</h2>     
    </div>
    </div>
  `;
        container.appendChild(newDish);
      } 
    });
  }
  
  //ALL tıklandığında ve sayfa ilk açıldığında tetiklenecek function
  function ALL() {
    container.innerHTML = "";
    menu.forEach((x) => {
      newDish = document.createElement("div");
      newDish.setAttribute("class", "col");
      newDish.innerHTML = `
      <div class="card mb-4 rounded-3 shadow-sm">
    <img src="${x.img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${x.title}</h5>
      <p class="card-text">${x.desc}</p>
    </div>
     <div class="card-footer">
    <h2 class="pricing-card-title">${x.price}</h2>     
    </div>
    </div>
  `;
      container.appendChild(newDish);
    });
  };
  