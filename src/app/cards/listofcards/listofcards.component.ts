import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofcards',
  templateUrl: './listofcards.component.html',
  styleUrls: ['./listofcards.component.css'],
})
export class ListofcardsComponent implements OnInit {
  cards: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    stock: number;
  }[] = [
    {
      id: 0,
      title: 'POCO Phone',
      description:
        'POCO, formerly known as POCO by Xiaomi and Pocophone, is a Chinese company specialized in smartphones.',
      imageUrl: '../../../assets/image/phone.jpg',
      stock: 10,
    },
    {
      id: 1,
      title: 'Mechanical Keyboard',
      description:
        'Computer keyboards that have switches under each key, rather than the rubber membranes used in most common keyboards. Physical switches give mechanical keyboards a less "mushy" feel — every keypress can be clearly felt, making them perfect for precise and accurate typing.',
      imageUrl: '../../../assets/image/keyboard.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Speaker',
      description:
        'A loudspeaker (commonly referred to as a speaker or speaker driver) is an electroacoustic transducer that converts an electrical audio signal into a corresponding sound.',
      imageUrl: './../../assets/image/speaker.jpg',
      stock: 10,
    },
    {
      id: 3,
      title: 'Headphones',
      description:
        'A device with parts that cover each ear through which you can listen to something, such as music, without other people hearing.',
      imageUrl: './../../assets/image/headset.jpg',
      stock: 10,
    },
    {
      id: 4,
      title: 'Camera',
      description:
        'Device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate. 35mm single-lens reflex (SLR) camera.',
      imageUrl: './../../assets/image/camera.jpg',
      stock: 10,
    },
    {
      id: 5,
      title: 'Mouse',
      description:
        'Small device that a computer user pushes across a desk surface in order to point to a place on a display screen and to select one or more actions to take from that position.',
      imageUrl: './../../assets/image/mouse.jpg',
      stock: 10,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onBuy(id: number) {
    if (this.cards[id].stock !== 0) {
      this.cards[id].stock--;
    }
  }

  itemName: string = '';
  itemDescription: string = '';
  itemFile: string = '';
  itemStock: string = '';

  onSubmit() {
    let dataId = this.cards.length;
    console.log(dataId);
    console.log(this.itemName);
    console.log(this.itemDescription);
    console.log(this.itemFile);
    console.log(this.itemStock);
    console.log(this.cards);
    this.cards.push({
      id: dataId,
      title: this.itemName,
      description: this.itemDescription,
      imageUrl: './../../assets/image/shopping-bag.png',
      stock: +this.itemStock,
    });
  }
}
