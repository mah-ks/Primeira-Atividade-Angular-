import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../models/user.interface';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})

export class UserDetail implements OnInit {

  user!: UserInterface;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  loading:boolean = false;
  erro:boolean=false;


ngOnInit(): void {

  const id = Number(this.route.snapshot.paramMap.get('id'));

  // Validação do ID   // - não existir id
  // - não for número (NaN)
  // - for maior que 10
  // então mostra erro e para a execução
  if (!id || isNaN(id) || id > 10) {
    this.erro = true;
    this.loading = false;
    return;
  }

  this.loading = true;
  this.erro = false;

  this.userService.buscarUsuarioPorId(id)
    .pipe(
      finalize(() => {  // finalize sempre executa no final (sucesso ou erro)
        this.loading = false;
        this.cdr.detectChanges(); // força atualização da tela
      })
    )
    .subscribe({
      next: (data) => {   // Se der certo
        this.user = data;// salva os dados do usuário
      },
      error: (err) => {
        console.error(err);
        this.erro = true;
      }
    });
}
}