import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // productId: string | null = '';
  // private routeSub: Subscription | undefined;

  // constructor(private route: ActivatedRoute){}


  // ngOnInit(): void {
  //    this.routeSub = this.route.paramMap.subscribe(params => {
  //     this.productId = params.get('id');
  //    })
  //   }

  //   ngOnDestroy(): void {
  //     if(this.routeSub) {
  //       this.routeSub.unsubscribe();
  //     }
  //   }
}
