 



import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";

import { User } from '../../../shared/models/user.model';

 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hide = true;

  addFriend: boolean = false;
  activeView: string = "overview";
 

  countryTrafficStats: any[];
  user: any;
  // Doughnut
  doughnutChartColors: any[] = [
    {
      backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"],
    },
  ];

  total1: number = 500;
  data1: number = 200;
  doughnutChartData1: number[] = [this.data1, this.total1 - this.data1];

  total2: number = 1000;
  data2: number = 400;
  doughnutChartData2: number[] = [this.data2, this.total2 - this.data2];

  

  doughnutChartType = "doughnut";
  doughnutOptions: any = {
    cutoutPercentage: 85,
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
      position: "bottom",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    tooltips: {
      enabled: false,
    },
  };

  constructor(private router: ActivatedRoute, public jwtAuth: JwtAuthService) {

  }

  ngOnInit() {
    this.activeView = this.router.snapshot.params["view"];
    this.user = this.jwtAuth.user$;
   

    this.countryTrafficStats = [
      {
        "id": 1,
        "name": "Marko Apostolski",
        "img": "assets/images/face-1.jpg",
        "mutualFriends": "5 Mutual friends",
        "picked": false
        },
        {
            "id": 1,
            "name": "Sofija Apostolska",
            "img": "assets/images/images/face-2.jpg",
            "mutualFriends": "5 Mutual friends",
            "picked": false
            },
            {
                "id": 1,
                "name": "Elena Ravnjanski",
                "img": "assets/images/images/face-3.jpg",
                "mutualFriends": "7 Mutual friends",
                "picked": false
                }, 
    ];
  }



}
