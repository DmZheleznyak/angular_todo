import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent {
  taskArray = [{taskName: 'brush', isCompleted: false}]

  // ngOnInit(): void {
    
  // }
  onSubmit(form: NgForm) {
    console.log('FORM - ', form)

    this.taskArray.push({taskName: form.controls['task'].value, isCompleted: false})

    form.reset()
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
}
