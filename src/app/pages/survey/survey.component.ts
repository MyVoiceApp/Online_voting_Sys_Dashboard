import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppService } from '../../app.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  survey: any;
  searchText = '';
  baseUrl = environment.baseurl;

  constructor(
    private appService: AppService,
    private authSrv: AuthService,
  ) {
    this.appService.pageTitle = 'All Survey';
  }

  ngOnInit() {
    this.authSrv.getAllsurvey().subscribe((resp: any) => {
      this.survey = resp.data;
      console.log(this.survey)
    })
  }

}
