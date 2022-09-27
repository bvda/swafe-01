import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest, map, merge, Observable } from 'rxjs';
import { Class } from 'src/app/class.type';
import { Race } from 'src/app/race.type';
import { WarcraftService } from 'src/app/warcraft.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    password: [''],
    confirm_password: [''],
    race: ['', [Validators.required]],
    class: ['', [Validators.required]],
    level: ['', [Validators.min(1), Validators.max(60)]],
    description: [''],
  })

  classes$: Observable<Class[]>
  races$: Observable<Race[]>

  constructor(private fb: FormBuilder, private service: WarcraftService) { 
    this.classes$ = this.service.getClasses()
    this.races$ = combineLatest([this.service.getAllianceRaces(), this.service.getHordeRaces()]).pipe(map(c => [...c[0], ...c[1]]))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onSubmit')
  }

  get name() { return this.form.get('name') }

}
