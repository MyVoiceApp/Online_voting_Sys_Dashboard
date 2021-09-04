import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';
import { CategoryService } from '../../../services/category.service';
import swal from 'sweetalert'
import { HotTopicService } from '../../../services/hot-topic.service';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss']
})
export class AllTopicsComponent implements OnInit {


  topics: any;
  searchText = '';
  baseUrl = environment.baseurl;

  constructor(
    private appService: AppService,
    private topicSrv: HotTopicService,
    private modalService: NgbModal,
    private toast: ToastrService
  ) {
    this.appService.pageTitle = 'All Topics';
  }

  ngOnInit() {
    this.topicSrv.getAll().subscribe((resp: any) => {
      this.topics = resp.data;
    })
  }

  delete(id) {
    swal('Are you sure, you want to delete it?', {
      icon: 'warning',
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {
        catch: {
          text: 'No',
          value: 'catch',
          closeModal: false,
        },
        yes: {
          closeModal: false,
        },
      },
    }).then((value) => {
      if (value === 'yes') {
        this.topicSrv.delete(id).subscribe((resp: any) => {
          console.log(resp)
          if (resp.message == 'success') {
            this.topicSrv.getAll().subscribe((resp: any) => {
              this.topics = resp.data;
            })
            this.toast.success('Deleted successfully', '', {
              timeOut: 2000,
              positionClass: 'toast-top-right',
              progressBar: true,
              progressAnimation: 'increasing',
            })
            swal.close()
          } else {
            console.log('something went wrong')
          }
        })

      } else swal.close()
    })

  }

}
