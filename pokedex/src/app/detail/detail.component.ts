import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
pokemons = POKEMONS;// import de POKEMONS bdd grâce à la variable pokemons (celle en minuscule)
pokemon: Pokemon = new Pokemon(); // on créé une nouvelle instance

  constructor(private route:ActivatedRoute, private Router: Router) { }// on a créé une variable "route" qui est privée (private route) et on lui a ajouté un type => un fichier (ActivatedRoute) qui comprend plein de méthodes/fonction (c'est une petite librairie Angular)

  ngOnInit(): void { //ngOnInit ==> lors de l'initialisation de la page, je créé ...
    this.pokemons = POKEMONS; // lors de l'initialisation on dit que => this.pokemon = POKEMONS
    let id = this.route.snapshot.params['id'];// "snapshot", "paramMap", "getAll" sont des méthodes qui font partie de la petite librairie Activated Route

    for(let i=0; i < this.pokemons.length; i++){//boucle qui nous permet de faire des tours
      if(this.pokemons[i].id == id){// id du pokemon == id dans l'url
        this.pokemon = this.pokemons[i];
      }
    }
  }

  onDelete(){
    let id = this.route.snapshot.params['id'];
    for(let i = 0; i< this.pokemons.length; i++){// on parcours l'ensemble des pokemons et on recupere le pokemon avec l'id de l'url et on le supprime
      if(this.pokemons[i].id == id){
          this.pokemons.splice(i,1);
      }
    }
    let link = [''];
    this.Router.navigate(link);//redirection vers la page d'accueil
  }
}
