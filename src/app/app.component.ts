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
    name:['',Validators.required],
    cardNumber:['',Validators.required],
    month:['',Validators.required],
    year:['',Validators.required],
    cvc:['',Validators.required]
  })
  constructor(private fb: FormBuilder){}

  onSubmit = () =>{
    console.log('submitted form', this.cardForm.value)
  }
  
  title = 'interactive-form';

}
