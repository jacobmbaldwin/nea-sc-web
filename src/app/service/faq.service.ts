import { Injectable } from '@angular/core';
import { FaqModel } from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
    private faqList: FaqModel[] = [
        {
            question: 'Is NEA Soccer Club a “real” club?',
            answer: 'Yes. We are registered with the Arkansas Soccer Association and are one of three soccer clubs in Northeast Arkansas.'
        },
        {
            question: 'Will NEA SC be doing outdoor soccer?',
            answer: 'Yes. We are registering players for tryouts now and will be playing full-sided soccer in Spring 2024 to complete the 2023/24 season.'
        },
        {
            question: 'Who will your coaches be?',
            answer: 'We currently have several age groups forming, and each group already has a coach, or coaches. Once tryouts have been completed, if your player makes the roster for his or her age group, you will be contacted by the coach for that team.'
        },
        {
            question: 'Will you have uniforms, and how much will they cost?',
            answer: 'Yes, we will have a uniform package with home and away colors including socks. For players who were in the entire winter Futsal session and register for spring outdoor, their unforms will be provided at no charge. For players who were in the Winter 2 Futsal session and register for spring outdoor, their uniform package will be 75% off our cost. For players who are only registering for spring outdoor, their uniform package will be 50% off our cost. We currently only have a cost estimate, but once we have a final price we will communicate that through Chats, social media, and our website.'
        },
        {
            question: 'Will we have a team store?',
            answer: 'Yes! Our team store is up and running! Visit our store today by clicking the "store" opion in our navigation menu.'
        },
        {
            question: 'Will every player on the roster get playing time?',
            answer: 'Absolutely. We work hard to identify players capable of competing in the age groups they’re trying out for, so we will train them well and give them the opportunity to showcase their skills on the field. Every player will have a chance to play in every game barring sickness or injury.'
        },
        {
            question: 'What is State League, and will my player be competing there?',
            answer: 'The Arkansas Competitive Soccer League is the most competitive league in the state for classic level teams in the 11U-19U Boys & Girls age groups. This league is the only pathway for the US Youth Soccer South Region Championships & Presidents Cup. There are competitive tiers in most age groups, so we will enter as many teams as possible in the state league. That doesn’t mean every team in our club will be entered, just that every team we believe can compete at the level of the other entrants will be entered. Our goal is to have every age group of both boys and girls competing in the State League at some point in their soccer journey.'
        },
        {
            question: 'What are costs of registration?',
            answer: 'Each program has a standalone registration fee that helps cover the cost of facility rentals, coaches’ pay, and administrative costs. The spring and summer outdoor season are $250 each. The full winter futsal program is $200, with the half-session (Jan-Feb) being $100. Summer 3v3 is $150, with some tournaments being as early as February, and 3v3 Nationals being as late as November. For parents who want their players to participate in the year around NEA SC program, we also offer an annual membership that includes all seasons for $798 or $66.50 per month. Families with multiple players will also receive a $25 discount on outdoor registration if paying per season.'
        },
        {
            question: 'What are additional costs?',
            answer: 'Prior to each season we will publish the total cost for tournaments, state league, and coaching stipends and offer both one-time and split payment options.'
        },
        {
            question: 'Will we do fundraising to help offset costs?',
            answer: 'Yes. There will be several club-wide fundraising opportunities. We have teamed up with RaiseRight (Code: 5FSIK5L31S3P for app) where families can purchase gift cards and e-gift cards for over 500 different businesses, including retail, restaurants, hotels, airlines, etc., with a percentage of the purchase going back to the club. We get $5 for every item purchased from the team store.  All funds raised will go toward offsetting tournament fees and stipends for ALL teams. Ex: In Fall 2024 we have 10 teams and 150 players with $3,500 each in fees and stipends totaling $35,000 or $233/player, but our fundraising efforts bring in $5,000 so cost per player drops to $200/player.'
        },
        {
            question: 'What are scholarships and what do they cover?',
            answer: 'A scholarship will be used to help families facing financial difficulties ensure their player(s) can afford to play club soccer. NEA SC has set up a scholarship fund at Arvest Bank and will be seeking grants and donations to help provide those scholarships. Scholarships will be need-based, so starting in Fall 2024 there will be a link for an application on our website. We will form a committee to review and approve applications.'
        },
    ]

    public getFaqs(): FaqModel[] {
        return this.faqList;
    }
}