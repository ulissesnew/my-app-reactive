import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UrlValidator } from '../../validators/url.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
    href: ["", Validators.compose([Validators.required,UrlValidator.validarURL])]
  })

  field(value: string){
    return this.form.get(value)
  }
  hasError(value: string, error: string){
    const field = this.field(value);
    if(!field?.invalid || !field?.dirty || !field?.touched) {
      return false;
    }
    return  field?.errors?.[error];
  }
  ngOnInit(): void {
  }

}
