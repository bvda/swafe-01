import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';
import { Class } from 'src/app/class.type';
import { passwordsEqual } from 'src/app/passwords-equal.directive';
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
    passwordGroup: this.fb.group({
      password: [''],
      confirm_password: [''],
    }, { validators: passwordsEqual, updateOn: 'blur'}),
    race: ['', [Validators.required]],
    class: ['', [Validators.required]],
    level: [, [Validators.min(1), Validators.max(60)]],
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

  compareClasses(c1: Race, c2: Race) {
    return c1 && c2 ? c1.name === c2.name : c1 === c2; 
  }

  get name() { return this.form.get('name') }
  get level() { return this.form.get('level') }
  get passwordGroup() { return this.form.get('passwordGroup')}

}
