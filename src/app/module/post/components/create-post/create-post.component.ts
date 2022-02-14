import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../../service/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  xxx: FormGroup = new FormGroup({
    user: new FormControl(''),
    createAt: new FormControl(''),
    content: new FormControl(''),
    imageList: new FormControl(''),
    status: new FormControl(''),
  })
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.xxx.value)
    let post = {
      user:{
        id:this.xxx.value.user,
      },
      createAt:this.xxx.value.createAt,
      content:this.xxx.value.content,
      imageList:{
        id:this.xxx.value.imageList,
      },
      status:this.xxx.value.status,

    }
    // @ts-ignore
    this.postService.create(post).subscribe(()=>{
        alert("xong")
      }
    )
  }
}
