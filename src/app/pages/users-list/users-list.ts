import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../models/user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {

  usuarios: UserInterface[] = [];

  constructor(private userService: UserService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe((dados) => {
      this.usuarios = dados;
      this.cdr.detectChanges();
    });
  }

}