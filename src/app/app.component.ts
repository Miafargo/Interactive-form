import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardForm = this.fb.group({
    name:['e.g. Jane Appleseed',Validators.required],
    cardNumber:['e.g. 1234 5678 9123 0000',[Validators.required, Validators.pattern("[0-9 ]+")]],
    month:['MM',Validators.required],
    year:['YY',Validators.required],
    cvc:['e.g. 123',Validators.required]
  })
  constructor(private fb: FormBuilder){}

  onSubmit = () =>{
    console.log('submitted form', this.cardForm.value)
  }

  get f(){
    return this.cardForm.controls;
  }
  
  title = 'interactive-form';

}
