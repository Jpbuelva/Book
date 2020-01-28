import { Component, OnInit } from '@angular/core';
import { ListDTO } from '../../interfaces/list-dto';
import { ListbookService } from '../../services/listbook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  book: ListDTO = {
    userId: null,
    id: null,
    title: null,
    body: null
  }
  List: Array<ListDTO>;
  Listbook: Array<ListDTO>;
  id:any;
  editing: boolean=false;
  constructor(private listbookService: ListbookService, private activateRoute: ActivatedRoute) {
   this.id= this.activateRoute.snapshot.params['id'];
   if(this.id){
    this.listbookService.getList().subscribe((res: ListDTO[]) => {
      this.book = res.find(m=>m.id=this.id);
     console.log(res);
     this.editing=true;

        });
       } else{
        } this.editing=false;

   
  }
  ngOnInit() {
  }
  saveBook(book){

    if(this.editing){
      this.listbookService.putBook(book).subscribe(resp =>  {
        alert('Pelicula Actualizada')
        console.log(resp);
      this.List=resp;
      }, error=>{});

    }else{
      this.listbookService.setBook(book).subscribe(resp =>  {
        alert('Pelicula guardada')
        console.log(resp);
      this.List=resp;
      }, error=>{});

    }
 
    

  }
  
}
