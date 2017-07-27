import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Addition page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addition',
  templateUrl: 'addition.html',
})
export class Addition {
    // Declare variables
    addNumFirst: number;
    addNumSecond: number;
    answers: Array<number>;
    MIN: number;
    MAX: number;
    MIN_ANSWER: number;
    MAX_ANSWER: number;
    correctIndex: number;
    //Time
    timeLeft: number;
    mPoint: number;
    internanId: number;
    NUMBER_QUESTION: number;
    MAX_QUESTION: number;

    LEVEL_NUMBER: number;
    LEVEL_MAX: number;

    // Level 1, min:1, max:50
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
        this.correctIndex = 0;

        this.NUMBER_QUESTION = 0;

        this.MAX_QUESTION = 20;

        this.mPoint = 0;

        this.answers = [];

        this.LEVEL_NUMBER = 1;

        this.LEVEL_MAX = 5;

        if (navParams.get('level') != null) {
            this.LEVEL_NUMBER = parseInt(navParams.get('level'));
        } else {
            this.LEVEL_NUMBER = 1;
        }

        this.setLevel(this.LEVEL_NUMBER);

        this.startCountTimeAndAnswer();
    }

    setLevel(level) {
        switch (level)
        {
            case 1:
                this.MIN = 1;
                this.MAX = 99;
                break;
            case 2:
                this.MIN = 100;
                this.MAX = 999;
                break;
            case 3:
                this.MIN = 1000;
                this.MAX = 9999;
                break;
            case 4:
                this.MIN = 10000;
                this.MAX = 99999;
                break;
            case 5:
                this.MIN = 1000;
                this.MAX = 5000;
                break;

            default:
                this.MIN = 1;
                this.MAX = 999;
                break;

        }
    }

    startCountTimeAndAnswer() {
        this.timeLeft = 10;

        this.checkAnswer();

        let self = this;
        if (this.internanId != null) {
            clearInterval(this.internanId);
        }
        this.internanId = setInterval(function () {
            self.countDownTime();
        }, 1000);
    }

    stopCountTime() {
        if (this.internanId != null) {
            clearInterval(this.internanId);
        }
    }

    // Coundown time, 
    countDownTime() {
        var that = this;
        if (that.timeLeft == 0) {
            that.checkAnswer();
            that.timeLeft = 10;

            this.checkQuestionLevel();
        } else {
            that.timeLeft--;
        }

        var b = that.timeLeft;
        var n = String(b);
        document.getElementById("TimeId").innerHTML = n;
    }

    // Increase question number or Level
    checkQuestionLevel() {
        // Check number of question to change LEVEL
        if (this.NUMBER_QUESTION == this.MAX_QUESTION) {
            this.NUMBER_QUESTION = 0;
            if (this.LEVEL_NUMBER < this.LEVEL_MAX) {
                this.LEVEL_NUMBER++;

                this.presentConfirm(this.LEVEL_NUMBER);
                
            } else {
                console.log("Max level archive " + this.LEVEL_MAX);
            }

        } else {
            this.NUMBER_QUESTION++;
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Check answer, guarantee there is not same answer
    checkAnswer() {

        this.getAnswers();

        if (this.answers.length > 1) {
            var count = 0;
            var i = 0;
            var j = 0;
            // Check conddition if answer same
            for (i = 0; i < this.answers.length - 1; i++) {
                for (j = i + 1; j < this.answers.length; j++) {
                    if (this.answers[i] == this.answers[j]) {
                        count++;
                        break;
                    }
                }
            }

            if (count > 0) {
                this.checkAnswer();
            }
        }
    }

    // Get random answers
    getAnswers() {
        this.addNumFirst = this.getRandomInt(this.MIN, this.MAX);
        this.addNumSecond = this.getRandomInt(this.MIN, this.MAX);

        // Answer always > max number
        if (this.addNumFirst > this.addNumSecond) {
            this.MIN_ANSWER = this.addNumFirst;
        } else {
            this.MIN_ANSWER = this.addNumSecond;
        }

        this.MAX_ANSWER = this.MIN_ANSWER * 2 + 2;

        this.answers[0] = this.getRandomAnswer(this.MIN_ANSWER, this.MAX_ANSWER);
        this.answers[1] = this.getRandomAnswer(this.MIN_ANSWER, this.MAX_ANSWER);
        this.answers[2] = this.getRandomAnswer(this.MIN_ANSWER, this.MAX_ANSWER);
        this.answers[3] = this.getRandomAnswer(this.MIN_ANSWER, this.MAX_ANSWER);

        this.correctIndex = this.getRandomCorrectIndex(0, 4);
        this.answers[this.correctIndex] = this.getCorrectAnswer(this.addNumFirst, this.addNumSecond);
    }

    getRandomAnswer(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomCorrectIndex(minIndex, maxIndex) {
        return Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
    }

    getCorrectAnswer(num1, num2) {
        return num1 + num2;
    }

    // Get point
    getPoint(index) {
        this.stopCountTime();

        var that = this;
        var elem = document.getElementById('btn' + index);
        var elemCorrect = document.getElementById('btn' + this.correctIndex);

        if (index === this.correctIndex) {
            this.mPoint = this.mPoint + 20;
            elem.style.backgroundColor = '#32CD32';
        } else {
            this.mPoint = this.mPoint - 20;
            elemCorrect.style.backgroundColor = '#32CD32';
            elem.style.backgroundColor = '#FF0000';
        }

 

        var p = that.mPoint;
        var pp = String(p);
        document.getElementById("pointId").innerHTML = pp;

        setTimeout(() => {    //<<<---    using ()=> syntax
            elem.style.backgroundColor = '#66CDAA';
            elemCorrect.style.backgroundColor = '#66CDAA';
            this.startCountTimeAndAnswer();
            this.checkQuestionLevel();
        }, 2000);
    }

    // Show Alert when finished LEVEL
    presentConfirm(levelNumber) {

        // Stop count down lft time
        this.stopCountTime();

        let alert = this.alertCtrl.create({
            title: 'Congratuaration!',
            message: 'Do you want to play Level ' + levelNumber + '?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Yes clicked');
                        this.setLevel(levelNumber);
                        this.startCountTimeAndAnswer();
                    }
                }
            ]
        });
        alert.present();
    }
}
