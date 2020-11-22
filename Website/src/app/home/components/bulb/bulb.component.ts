import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnInit {
  bulb = false;
  fmotionan:boolean = true;
  message;
  currTemp;
  public querySubscription: Subscription;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.getTempData();

  }

  getTempData(){

    this.querySubscription = this.apollo.watchQuery<any>({
      query: temp
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.currentUser = data.currentUser;
      });

  }

  changeBulbColor(){

    if(this.bulb){
      document.getElementById("bulb").style.color = "Yellow";
      this.message = gql`
      mutation sendMqttMessage {
        sendMqttMessage(topic:"esp/test", message: "on")
      }
    `
    }else{
      document.getElementById("bulb").style.color = "Black";
      this.message = gql`
      mutation sendMqttMessage {
        sendMqttMessage(topic:"esp/test", message: "1")
      }
    `
    }
    this.bulb = !this.bulb;
    this.apollo.mutate({
      mutation: this.message
    }).subscribe();
    
  }
  changeMotionColor(){
    if(this.fmotionan)document.getElementById("motion").style.color = "Green";
    if(!this.fmotionan)document.getElementById("motion").style.color = "Black";
    this.fmotionan = !this.fmotionan;
  }
}
