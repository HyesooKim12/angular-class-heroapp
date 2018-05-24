import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  hero: Hero = {id: 1, name: 'hyesoo'};
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log('constructor 호출');
  }

  ngOnInit() {
    console.log('ngOnInit() 메소드 호출');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy 메소드 호출');
  }
  onSelect(hero: Hero): void {
    // alert(`${hero.name}`);
    this.selectedHero = hero;
    // alert(this.selectedHero.name);
  }
}
