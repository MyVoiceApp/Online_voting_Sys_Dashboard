import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert'
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';
import { SliderService } from '../../../services/slider.service';

@Component({
  selector: 'app-all-slider',
  templateUrl: './all-slider.component.html',
  styleUrls: ['./all-slider.component.scss']
})
export class AllSliderComponent implements OnInit {

  slider: any;
  searchText = '';
  baseUrl = environment.baseurl;

  constructor(
    private appService: AppService,
    private sliderSrv: SliderService,
    private modalService: NgbModal,
    private toast: ToastrService
  ) {
    this.appService.pageTitle = 'All slider';
  }

  ngOnInit() {
    this.sliderSrv.getAll().subscribe((resp: any) => {
      this.slider = resp.data;
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
        this.sliderSrv.delete(id).subscribe((resp: any) => {
          console.log(resp)
          if (resp.message == 'success') {
            this.sliderSrv.getAll().subscribe((resp: any) => {
              this.slider = resp.data;
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
