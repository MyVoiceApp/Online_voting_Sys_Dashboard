import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';
import { CategoryService } from '../../../services/category.service';
import { UploadService } from '../../../services/upload.service';
import { Location } from '@angular/common';
import { HotTopicService } from '../../../services/hot-topic.service';

@Component({
  selector: 'app-action-topics',
  templateUrl: './action-topics.component.html',
  styleUrls: ['./action-topics.component.scss']
})
export class ActionTopicsComponent implements OnInit {

  action = false;
  categories: any;
  baseUrl = environment.baseurl;
  user = JSON.parse(localStorage.getItem('user'));
  formObj = {
    id: '',
    name: '',
    image: '',
    description: '',
    category: null,
    user: this.user._id
  }

  constructor(
    private appService: AppService,
    private router: Router,
    private _route: ActivatedRoute,
    private toast: ToastrService,
    private topicSrv: HotTopicService,
    private uploadSrv: UploadService,
    private location: Location,
    private categorySrv: CategoryService
  ) {

    this.appService.pageTitle = 'Category';
  }
  ngOnInit() {
    this.categorySrv.getAll().subscribe((resp: any) => {
      this.categories = resp.data;
    })

    this.formObj.id = this._route.snapshot.params['id'];
    if (this.formObj.id == 'new') {
      this.action = true;
    } else {
      this.action = false;
      this.topicSrv.getById(this.formObj.id).subscribe((resp: any) => {
        console.log(resp);
        this.formObj.name = resp.data.name;
        this.formObj.image = resp.data.image;
        this.formObj.category = resp.data.category;
        this.formObj.description = resp.data.description;
      })
    }
  }

  upload(event) {
    var file = event.target.files[0];
    this.uploadSrv.saveimage(file).subscribe((data: any) => {
      this.formObj.image = data;
    });
  }

  create() {
    console.log(this.formObj);

    if (
      this.formObj.name === '' ||
      this.formObj.image === '' ||
      this.formObj.category === null
    ) {
      this.toast.error('Credentials is not correct', 'Oops', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.topicSrv.create(this.formObj).subscribe((resp: any) => {
        console.log(resp);
        if (resp.message === 'success') {
          this.toast.success('Product Added', 'Success', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.backToBack();
        } else if (resp.message === 'alreaday') {
          this.toast.error('Product Name is alreaday Exist', 'Oops', {
            timeOut: 2000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
        } else {
          console.log('somthing went wrong');
        }
      });
    }
  }

  Update() {
    if (
      this.formObj.name === ''
    ) {
      this.toast.error('Credentials is not correct', 'Oops', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    } else {
      this.topicSrv.update(this.formObj).subscribe((resp: any) => {
        console.log(resp);
        if (resp.message === 'success') {
          this.toast.success('Product Update', 'Success', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
          this.backToBack();
        } else if (resp.message === 'alreaday') {
          this.toast.error('Product Name is alreaday Exist', 'Oops', {
            timeOut: 2000,
            positionClass: 'toast-top-right',
            progressBar: true,
            progressAnimation: 'increasing'
          });
        } else {
          console.log('somthing went wrong');
        }
      });
    }
  }

  backToBack() {
    this.location.back();
  }


}
