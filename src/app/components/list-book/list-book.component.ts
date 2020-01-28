import { Component, OnInit } from '@angular/core';
import { ListbookService } from '../../services/listbook.service';
import { ListDTO } from '../../interfaces/list-dto';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  List: Array<ListDTO>;
  constructor(public listbookService: ListbookService ) { }

  ngOnInit() {
    this.listbookService.getList().subscribe((res: ListDTO[]) => {
     this.List = res;
    console.log(res);
    } 
      
      );
  }

}
