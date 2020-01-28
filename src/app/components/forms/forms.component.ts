import { Component, OnInit } from '@angular/core';
import { ListDTO } from '../../interfaces/list-dto';
import { ListbookService } from '../../services/listbook.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  book: ListDTO = {
    bookId: null,
    title: null,
    body: null
  }
  ;
  constructor(private listbookService: ListbookService) { }

  ngOnInit() {
  }
  saveBook(book){
    this.listbookService.setBook(book).subscribe(resp =>  {
      console.log(resp);

    }, error=>{});
    console.log(this.book);

  }

}
