import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  photoCover:string = "https://freegametips.com/wp-content/uploads/2020/11/1604566345_Top-10-best-selling-Nintendo-Switch-games-2020.jpg"
  contentTitle:string = "Os 10 jogos mais vendidos do Nintendo Switch em 2020"
  contentDescription:string = "Descrição da noticia aqui"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )
  }

}
