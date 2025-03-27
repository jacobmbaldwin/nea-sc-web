import { Injectable } from '@angular/core';
import {OfferingModel} from "../models/offering.model";

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {
  private offerings: OfferingModel[] = [
    {
      title: "Goalkeeper Class",
      description: "Are you ready to dive into excellence? Our expert-led goalkeeper classes are designed to sharpen your skills, boost your confidence, and elevate your game to new heights!",
      image: "offering-images/goalkeeping-card.png",
      link: "[insert gk url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    },
    {
      title: "Futsal",
      description: "Ever wondered what sets apart extraordinary soccer players? Enter Futsal – the dynamic, fast-paced game that shapes future soccer stars!",
      image: "offering-images/futsal-card.png",
      link: "[insert futsal url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    },
    {
      title: "Clinics",
      description: "Looking to elevate your skills? Enroll in one of our Attacker/Finisher, Defender, and Midfielder Clinics! Learn Precision shooting, solid defense, midfield mastery and more.",
      image: "offering-images/clinics-card.png",
      link: "[insert clinics url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    },
    {
      title: "3v3 Soccer League",
      description: "Join our thrilling 3v3 SoccerLeague and Training Program, where passion meets precision and teamwork reigns supreme.",
      image: "offering-images/3v3-card.png",
      link: "[insert 3v3 url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    },
    {
      title: "Academies",
      description: "Unlock Your Potential: Join NEA Soccer Academies and transform your passion into expertise. Learn from seasoned coaches with a proven track record in developing soccer stars.",
      image: "offering-images/academies-card.png",
      link: "[insert academies url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    },
    {
      title: "Juggle Club",
      description: "Hone your skills and get rewarded for your efforts. Join our Juggle Club and exponentially enhance your potential.",
      image: "offering-images/juggle-club-card.png",
      link: "[insert juggle club url]",
      seasonOffered: "Summer",
      ageGroup: "U8-U18"
    }
  ];

  getOfferings() {
    return this.offerings;
  }
}
