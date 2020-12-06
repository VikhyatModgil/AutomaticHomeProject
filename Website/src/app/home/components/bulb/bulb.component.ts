import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnInit  {
  constructor(private apollo: Apollo) { }
  bulb = true;
  fmotion = true;
  message;
  currTemp = 70;
  public querySubscription: Subscription;

  ngOnInit(): void {

    this.getTempData();
    this.updateMotion();

  }

  updateMotion(){
  }

  getTempData(){
    // const msg = gql`
    // mutation sendMqttMessage {
    //   sendMqttMessage(topic:"esp/test", message: "on")
    // }
    // `;
    // this.apollo.mutate({
    //   mutation: msg
    // }).subscribe(({ data }) => {
    //   const m = data.sendMqttMessage;
    //   this.currTemp = m;
    //   setTimeout(() => {
    //     this.getTempData();
    //   }, 500);
    // }, (error) => {
    //   console.log('there was an error sending the query', error);
    // });
  }

  changeBulbColor(){
    if (this.bulb){
      document.getElementById('bulb').style.color = 'Yellow';
      this.message = gql`
      mutation sendMqttMessage {
        sendMqttMessage(topic:"esp/test", message: "on")
      }
    `;
    }else{
      document.getElementById('bulb').style.color = 'Black';
      this.message = gql`
      mutation sendMqttMessage {
        sendMqttMessage(topic:"esp/test", message: "1")
      }
    `;
    }
    this.bulb = !this.bulb;
    this.apollo.mutate({
      mutation: this.message
    }).subscribe();
  }
  changeMotionColor(){
    if (this.fmotion){
      document.getElementById('motion').style.color = 'Red';
      document.getElementById('motion').style.fontSize = '120px';
    }
    if (!this.fmotion){
      document.getElementById('motion').style.color = 'Black';
      document.getElementById('motion').style.fontSize = '75px';
    }
    this.fmotion = !this.fmotion;
  }
}
