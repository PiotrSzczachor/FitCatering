import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dishes = [
    {
      imgUrl: "../../assets/menu-dishes-images/apple-pie.jpg",
      name: "Apple pie",
      cuisine: "American",
      type: "Desserts",
      price: "1.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/bao.jpg",
      name: "Bao",
      cuisine: "Asian",
      type: "Main dish",
      price: "4.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/bolognese.jpg",
      name: "Bolognese",
      cuisine: "Italian",
      type: "Main dish",
      price: "6.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/bruschetta.jpg",
      name: "Bruschetta",
      cuisine: "Italian",
      type: "Main dish",
      price: "2.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/burito.jpg",
      name: "Burito",
      cuisine: "Mexican",
      type: "Main dish",
      price: "5.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/cannoli.jpg",
      name: "Cannoli",
      cuisine: "Italian",
      type: "Desserts",
      price: "5.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/carbonara.jpg",
      name: "Carbonara",
      cuisine: "Italian",
      type: "Main dish",
      price: "6.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/cheese-cake.jpg",
      name: "Cheese cake",
      cuisine: "Italian",
      type: "Desserts",
      price: "5.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/chicken-soup.jpeg",
      name: "Chicken soup",
      cuisine: "Polish",
      type: "Soup",
      price: "2.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/chili-con-carne.jpeg",
      name: "Chili con carne",
      cuisine: "Mexican",
      type: "Main dish",
      price: "8.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/coconut-soup.jpg",
      name: "Coconut soup",
      cuisine: "Asian",
      type: "Soup",
      price: "6.49"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/croquettes.jpg",
      name: "Croquettes",
      cuisine: "Polish",
      type: "Main dish",
      price: "5.49"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/curry.jpeg",
      name: "Curry",
      cuisine: "Asian",
      type: "Main dish",
      price: "6.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/doves.jpeg",
      name: "Doves",
      cuisine: "Polish",
      type: "Main dish",
      price: "5.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/dumplings.jpg",
      name: "Dumplings",
      cuisine: "Polish",
      type: "Main dish",
      price: "6.98"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/fondant.jpg",
      name: "Fondant",
      cuisine: "French",
      type: "Desserts",
      price: "3.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/hunters-stew.jpg",
      name: "Hunter's Stew",
      cuisine: "Polish",
      type: "Main dish",
      price: "6.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/ice-cream.jpg",
      name: "Ice cream",
      cuisine: "International",
      type: "Desserts",
      price: "3.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/lasagne.jpg",
      name: "Lasagne",
      cuisine: "Italian",
      type: "Main dish",
      price: "6.39"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/nachos-guacamole.jpg",
      name: "Nachos & guacamole",
      cuisine: "Mexican",
      type: "Main dish",
      price: "2.69"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/pad-thai.jpg",
      name: "Pad Thai",
      cuisine: "Asian",
      type: "Main dish",
      price: "9.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/pizza.jpg",
      name: "Pizza",
      cuisine: "Italian",
      type: "Main dish",
      price: "8.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/quesadilla.jpg",
      name: "Quesadilla",
      cuisine: "Mexican",
      type: "Main dish",
      price: "5.29"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/ramen.jpg",
      name: "Ramen",
      cuisine: "Asian",
      type: "Soup",
      price: "8.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/red-borsch.jpg",
      name: "Red Borsch",
      cuisine: "Polish",
      type: "Soup",
      price: "3.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/white-borsch.jpg",
      name: "White Borsch",
      cuisine: "Polish",
      type: "Soup",
      price: "3.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/schnitzel.jpg",
      name: "Schnitzel",
      cuisine: "Polish",
      type: "Main dish",
      price: "7.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/spring-rolls.jpg",
      name: "Spring rolls",
      cuisine: "Asian",
      type: "Main dish",
      price: "6.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/sushi.jpg",
      name: "Sushi",
      cuisine: "Asian",
      type: "Soup",
      price: "13.99"
    },
    {
      imgUrl: "../../assets/menu-dishes-images/taco.jpg",
      name: "Taco",
      cuisine: "Mexican",
      type: "Main dish",
      price: "4.99"
    },
    
  ]

}
