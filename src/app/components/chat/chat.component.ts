import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  showChat=false;
  logUser:any;
  newMessage:string = "";
  messages:any= [];
  constructor() { }

  //Se debe ingresar el servicio que me retorne los datos del usuario
  ngOnInit(): void {
    //Función que nos devuelva el usuario
  }

  sendMessage(){

    if (this.newMessage == "") return;

    console.log(this.newMessage);
    let message ={
      //El id debería ser el usuario quien envía el mensaje
      transmitter:"id",
      text:this.newMessage
    }
    this.messages.push(message);
    this.newMessage = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10)

  }

  scrollToTheLastElementByClassName(){
    let elements= document.getElementsByClassName('msg');
    let last:any=elements[elements.length - 1];
    let toppos=last.offsetTop;

    //@ts-ignore
    document.getElementById('msgContanier')?.scrollTop=toppos
  }
}
