import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uab',
  templateUrl: './uab.component.html',
  styleUrls: ['./uab.component.css']
})
export class UabComponent implements OnInit {

  espace:string= "&nbsp"
prestation:any="../assets/images/prestation.png"
contact:any="../assets/images/contactnous.png"
contrat:any="../assets/images/contrats.png"
fond:any="../assets/images/imagefond.png"
menu:any="../assets/images/menu.png"
produit:any="../assets/images/produits.png"
gps:any="../assets/images/gps.jpeg"
avatar:any="../assets/images/avatar.png"
compteur:number=1
  constructor() { }

  ngOnInit(): void {
  }
affiche(){
this.compteur++;
return this.compteur;
}
}
