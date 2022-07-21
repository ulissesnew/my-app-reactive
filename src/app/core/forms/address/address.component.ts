import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Output()
  formReady = new EventEmitter<FormGroup>();

  form = this.fb.group({
    address: this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: [''],
      state: [''],
      zipcode: ['', [Validators.required, Validators.minLength(9)]]
    }),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.formReady.emit(this.form);
  }

  private field(field: string): FormControl {
    return this.form.get(field) as FormControl;
  }

  clearAddress() {
    this.field('address').setValue({
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipcode: ''
    });
  }
  cssError(field: any){
    return field
  }
  hasError(field: any, error?: any){
    return field
  }
  getCep(){}
}

// exemplo de uso  parent form
// @Component({
//   selector: 'app-parent',
//   template: `
//     <app-address (form)="addChildForm('address', $event)"></app-address>
//   `,
// })
// export class Parent {
//   form = this.fb.group({});

//   constructor(private fb: FormBuilder) {}
//   addChildForm(name: string, group: FormGroup) {
//     this.form.addControl(name, group);
//   }
// }
