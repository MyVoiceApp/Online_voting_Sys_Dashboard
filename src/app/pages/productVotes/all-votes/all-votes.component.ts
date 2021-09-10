import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AppService } from '../../../app.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-all-votes',
  templateUrl: './all-votes.component.html',
  styleUrls: ['./all-votes.component.scss']
})
export class AllVotesComponent implements OnInit {

  votes: any;
  searchText = '';
  baseUrl = environment.baseurl;

  constructor(
    private appService: AppService,
    private authSrv: AuthService,
  ) {
    this.appService.pageTitle = 'All Votes';
  }

  ngOnInit() {
    this.authSrv.getAllVotes().subscribe((resp: any) => {
      this.votes = resp.data;
      console.log(this.votes)
    })
  }
}
