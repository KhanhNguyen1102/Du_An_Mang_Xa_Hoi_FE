import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../model/post";
import {PostService} from "../../../../service/post.service";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
post: Post[] = []
  constructor(private posService :PostService) { }

  ngOnInit(): void {
    this.posService.getAll().subscribe(result =>{
        this.post = result;
        console.log(result);
      },error => {
        console.log(error);
      }
    )
  }
  }

