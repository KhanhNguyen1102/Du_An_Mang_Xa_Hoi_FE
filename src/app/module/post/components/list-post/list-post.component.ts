import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../model/post";
import {PostService} from "../../../../service/post.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
declare var $:any
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  post: Post[] = []
  post2:Post={};
  postForm: FormGroup = new FormGroup({
    id:new FormControl(),
    content: new FormControl(''),
    imageList: new FormControl(''),
    status: new FormControl(''),
  })

  constructor(private postService: PostService,
  private activatedRoute: ActivatedRoute,
  private fb: FormBuilder,
  private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);

    this.postService.getAll(this.idUser).subscribe(result => {
        this.post = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    )
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.cityService.findById(id).subscribe(result => {
        this.post = result
        console.log(result)
      })
    })
    this.post2={
      id:'',
      content: '',
      status:'',
    }
  }

  createPost() {
    console.log(this.postForm.value)
    let post = {
      user: {
        id: this.idUser
      },
      content: this.postForm.value.content,

      status: this.postForm.value.status,
    }
    console.log(post);
    // @ts-ignore
    this.postService.create(post).subscribe(() => {
        alert("xong")
        this.ngOnInit();
      }
    )
  }

  update(id:any) {
    $('#formEdit ').modal('show');
    // setTimeout( () => {$('#requestSuccess').modal('hide');},3000);
  //   const post= this.postForm.value;
  //   this.postService.updatePostProfile(post.id, post).subscribe(() => {
  //     alert("Sửa thành công ")
  //   })
   }
}

