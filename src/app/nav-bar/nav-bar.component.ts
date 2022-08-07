import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


declare let $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _Router:Router) { }


  ngOnInit(): void {



    $('#search-control').click(function()
    {

      $('#search-input').slideToggle(300)
    });
  }

}
