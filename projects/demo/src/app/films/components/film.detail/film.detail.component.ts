import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';
import { Film } from '../../types/film';

@Component({
  selector: 'cas-film.detail',
  imports: [],
  template: ` <p>film.detail works!</p> `,
  styles: ``,
})
export default class FilmDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = '';
  film: Film | undefined;
  stateService = inject(StateService);

  constructor() {
    console.log('Constructor FilmDetailComponent');
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params);
      this.film = this.stateService.getFilm(this.id);
    });
  }
}
