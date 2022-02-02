new Vue({
    el : "#ttt",
    data() {
        return {
            msg        : "Please select one . . .",
            live       : '',
            cfs        : '',
            cfsai      : '',
            donev      : false,
            p1point    : 0,
            p2point    : 0,
            playerturn : '',
            times      : 0,
            PX         : '',
            PO         : '',
            tap1       : '',
            tap2       : '',
            tap3       : '',
            tap4       : '',
            tap5       : '',
            tap6       : '',
            tap7       : '',
            tap8       : '',
            tap9       : '',
            p1rc       : [],
            p2rc       : [],
            total      : ['1','2','3','4','5','6','7','8','9'],
            wintap2Condation: ["12313","45646","78979","14717","25828","36939","15919","35737"],
            wintap3Condation: ["123","456","789","147","258","369","159","357"],
            case3ary: [],
            d1         : false,
            d2         : false,
            d3         : false,
            d4         : false,
            d5         : false,
            d6         : false,
            d7         : false,
            d8         : false,
            d9         : false,
            wsp        : 'winanimation 0.5s infinite',
            appeartime : '250',
            winstyle1  : {animation:''},
            winstyle2  : {animation:''},
            winstyle3  : {animation:''},
            winstyle4  : {animation:''},
            winstyle5  : {animation:''},
            winstyle6  : {animation:''},
            winstyle7  : {animation:''},
            winstyle8  : {animation:''},
            winstyle9  : {animation:''},
           resultcolor : '',
           resultmsg   : '',
           onematch    : '',
           wintrue     : false,
           stopCase: false,
           break       : false,
           checkwinner : 1,
           aibrain     : true,
           aibrainmsg  : "",
           aimsgcolor  : "text-light",
           winms       : '',
           losems      : '',
           drawms      : '',
           tapms       : '',
           resultimg   : '',
           fmsg        : '',
           state       : 'normal',
           easy        : 'easy',
           normal      : 'normal',
           impossible  : 'impossible'
        }
    },
    methods: {
         selectX(){
            this.PX = 'X';
            this.PO = 'O';
            this.cleardata();
         },
         selectO(){
            this.PX = 'O';
            this.PO = 'X';
            this.cleardata();
         },
        cleardata(){
           this.total = ['1','2','3','4','5','6','7','8','9'];
           this.p1rc = [];
           this.p2rc = [];
           this.times = 0;
           this.fmsg     = true;
           this.tap1 = '',this.tap2 = '',this.tap3 = '',this.tap4 = '',this.tap5 = '',this.tap6 = '',this.tap7 = '',this.tap8 = '',this.tap9 = '';
           this.d1 = false,this.d2 = false,this.d3 = false,this.d4 = false,this.d5 = false,this.d6 = false,this.d7 = false,this.d8 = false,this.d9 = false;
           this.winstyle1.animation = '',this.winstyle2.animation = '',this.winstyle3.animation = '',this.winstyle4.animation = '',this.winstyle5.animation = '',this.winstyle6.animation = '',this.winstyle7.animation = '',this.winstyle8.animation = '',this.winstyle9.animation = '';
        },
        allThree(firstBox,secondBox,thirdBox,no){
           // "123","456","789","147","258","369","159","357"
           if(firstBox == secondBox && secondBox == thirdBox){
              
             if(firstBox == this.PX){
                this.allthree.play();
                this.fmsg  = 'text-success';
                this.resultmsg = "You Won !";
                this.winAnimation(no);
                this.wintrue = true;
                
              //   this.stopCase = true;
                this.restartGame('win');
              return "Win";
             }else if (firstBox == this.PO){
                this.allthree.play();
                this.fmsg  = 'text-danger';
                this.resultmsg = "Game Over!";  
                this.winAnimation(no);
              //   this.stopCase = true;
                this.wintrue = true;
                this.restartGame('lose');
              return "Lose";
             }

           }
           if(this.total.length == 0 && this.wintrue == false){ 
              this.d1 = true,this.d2 = true,this.d3 = true,this.d4 = true,this.d5 = true,this.d6 = true,this.d7 = true,this.d8 = true,this.d9 = true;
              // this.stopCase = true;
              this.fmsg     = "text-dark";
              this.resultmsg = "Draw";  
              this.wintrue = false;
              this.restartGame('draw'); 
              return "Draw";
           }

        },
        diagonalWinner(){
           const leftDownDiag = this.allThree(this.tap1, this.tap5, this.tap9,159);
           const rightUpDiag  = this.allThree(this.tap3, this.tap5, this.tap7,357);
           return leftDownDiag || rightUpDiag;
        },
        columnWinner(){
           const leftCol   = this.allThree(this.tap1, this.tap4, this.tap7,147);
           const middleCol = this.allThree(this.tap2, this.tap5, this.tap8,258);
           const rightCol  = this.allThree(this.tap3, this.tap6, this.tap9,369);
           return leftCol || (middleCol || rightCol);
        },
        rowWinner(){
           const topRow    = this.allThree(this.tap1, this.tap2, this.tap3,123);
           const middleRow = this.allThree(this.tap4, this.tap5, this.tap6,456);
           const bottomRow = this.allThree(this.tap7, this.tap8, this.tap9,789);
           return topRow || (middleRow || bottomRow);
        },
        winner(){
           return this.diagonalWinner() || (this.rowWinner() || this.columnWinner());
        },
        winAnimation(e){
           switch (e) {
                     case 123:
                       this.winstyle1.animation = this.wsp;
                       this.winstyle2.animation = this.wsp;
                       this.winstyle3.animation = this.wsp;
                     break;
                     case 456:
                       this.winstyle4.animation = this.wsp;
                       this.winstyle5.animation = this.wsp;
                       this.winstyle6.animation = this.wsp;
                     break;
                     case 789:
                       this.winstyle7.animation = this.wsp;
                       this.winstyle8.animation = this.wsp;
                       this.winstyle9.animation = this.wsp;
                     break;
                     case 147:
                       this.winstyle1.animation = this.wsp;
                       this.winstyle4.animation = this.wsp;
                       this.winstyle7.animation = this.wsp;
                     break;
                     case 258:
                       this.winstyle2.animation = this.wsp;
                       this.winstyle5.animation = this.wsp;
                       this.winstyle8.animation = this.wsp;
                     break;
                     case 369:
                       this.winstyle3.animation = this.wsp;
                       this.winstyle6.animation = this.wsp;
                       this.winstyle9.animation = this.wsp;
                     break;
                     case 159:
                       this.winstyle1.animation = this.wsp;
                       this.winstyle5.animation = this.wsp;
                       this.winstyle9.animation = this.wsp;
                     break;
                     case 357:
                       this.winstyle3.animation = this.wsp;
                       this.winstyle5.animation = this.wsp;
                       this.winstyle7.animation = this.wsp;
                     break;
               
                  default:
                     break;
               }
        },
        restartGame(e){  
           this.d1 = true,this.d2 = true,this.d3 = true,this.d4 = true,this.d5 = true,this.d6 = true,this.d7 = true,this.d8 = true,this.d9 = true;
            setTimeout(() => {
              if(e == "win"){
                this.winms.play();
              }else if(e == "lose"){
                 this.losems.play();
              }else if(e == "draw"){
                 this.drawms.play();
              }
               $.ajax({success(){
                   $('#gamefinalresult').modal('show')
               }})
               this.cleardata();
           }, 1500);

          setTimeout(() => {
             $.ajax({success(){
                $('#gamefinalresult').modal('hide')
             }})
             this.wintrue = false;
           }, 2500);

        },
        reading(){
          console.log(this.state);
          this.cleardata();        
        },
        tap(e){
          this.times++;
          console.log(this.state);
          switch (e) {

              case '1': this.tap1 = this.PX;  // NO.1
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d1 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                 setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['3','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                         console.log(this.p1rc) // Getting p1 record & AI try to win,if not winchance ai try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                        const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                      break;

                     default:
                     break;
                    }
                 }, this.appeartime);
              break;
             
              case '2': this.tap2 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d2 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                 setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                      console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                        const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                     default:
                     break;
                   }
                 }, this.appeartime);
              break;

              case '3': this.tap3 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d3 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                 setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                         console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                     default:
                     break;
                    }
                 }, this.appeartime);
              break;

              case '4': this.tap4 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d4 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                setTimeout(() => {
                 switch (this.times) {
                    case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                       console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                    default:
                     break;
                 }
                }, this.appeartime);
              break;

              case '5': this.tap5 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d5 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                  setTimeout(() => {
                    switch (this.times) {
                     case 1: //Case One Done
                         if(this.state == 'easy'){
                           const x = this.total[Math.floor(Math.random() * this.total.length)];
                           this.case1(x);
                         }else if(this.state == 'normal' || this.state == 'impossible'){
                          const p1tap5  = ['1','3','7','9']
                          const aicase1 = p1tap5[Math.floor(Math.random() * p1tap5.length)];
                          this.case1(aicase1);
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                         console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                     default:
                     break;
                   }
                  }, this.appeartime);
              break;

              case '6': this.tap6 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d6 = true;
                 this.winner();
                  setTimeout(() => {
               //  Check your tap times 1st to 9ne
                   switch (this.times) {
                    case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                        console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                    break;

                     default:
                     break;
                   }
                  }, this.appeartime);
              break;

              case '7': this.tap7 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d7 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                 setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                         console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                     default:
                     break;
                   }
                 }, this.appeartime);
              break;

              case '8': this.tap8 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d8 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                 setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','7','9']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                        console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                      break;

                      default:
                      break;
                    }
                 }, this.appeartime);
              break;

              case '9': this.tap9 = this.PX;
                 this.p1rc.push(e);
                 this.break = false;
                 this.total.remove(e);
                 this.tapms.play();
                 this.d9 = true;
                 this.winner();
                //  Check your tap times 1st to 9ne
                  setTimeout(() => {
                    switch (this.times) {
                       case 1: //Case One Done  For AI
                         if(this.state == 'easy'){
                            const x = this.total[Math.floor(Math.random() * this.total.length)];
                            this.case1(x);
                         }else if(this.state == 'normal'){
                            const normalcase1 = ['1','3','5','7']
                            const x = normalcase1[Math.floor(Math.random() * normalcase1.length)];
                            this.case1(x);
                         }
                         else if(this.state == 'impossible'){
                            this.firstAi();
                         }
                     break;
                     case 2:
                       var x = this.p1rc.sort().toString();
                       if(this.state == 'easy' || this.state == 'normal'){
                         this.normalcase2(x);
                       }
                       else if(this.state == 'impossible'){
                          this.case2(x)
                       }
                     break;
                     case 3:
                         console.log(this.p1rc) // Getting p1 pick record & AI try not to win p1
                         var x = this.p1rc.sort().toString();
                         this.case3(x);
                     break;
                     case 4:
                       this.checkAiWincase4();
                     break;
                     case 5:
                       const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                        this.case1(case5);
                     break;

                     default:
                     break;
                    }
                  }, this.appeartime);
              break;

             default:
              break;
          }
        },
        firstAi(){
           if(this.total.includes("5")){ //If No.5 is free, AI Will Pick 5
              this.tap5 = this.PO; 
              this.p2rc.push('5');
              this.total.remove('5');
              this.tapms.play();
              this.d5 = true;
           }else if(this.total.includes("2")){
              this.tap2 = this.PO; 
              this.p2rc.push('2');
              this.total.remove('2');
              this.tapms.play();
              this.d2 = true;
           }else if(this.total.includes("4")){
              this.tap4 = this.PO; 
              this.p2rc.push('4');
              this.total.remove('4');
              this.tapms.play();
              this.d4 = true;
           }
        },
        checkAiWincase4(){
           const x = this.p2rc.sort().toString();
            
            if(this.d1 && this.d2 && this.d3 && this.d4 && this.d5 && this.d6 && this.d7 && this.d8 && this.d9 == true){

            }else{
              //  Use Brake not to run case together
              if((x.includes('2,3') || (x.includes('4') && x.includes('7'))) && this.break == false){ // If P1 is already pick 3 & 1,Ai try to pick 2
                 if(this.total.includes("1")){
                     this.tap1 = this.PO;
                     this.break = true;
                     this.p2rc.push('1');
                     this.total.remove('1');
                     this.tapms.play();
                     this.d1 = true;
                  }
              }
              if(((x.includes('1') && x.includes('3')) || (x.includes('5') && x.includes('8'))) && this.break == false){ // If P1 is already pick 3 & 1,Ai try to pick 2
                 if(this.total.includes("2")){
                     this.tap2 = this.PO;
                     this.break = true;
                     this.p2rc.push('2');
                     this.total.remove('2');
                     this.tapms.play();
                     this.d2 = true;
                  }
              }
              if((x.includes('1,2') || (x.includes('6') && x.includes('9')) || (x.includes('5') && x.includes('7'))) && this.break == false){
                 if(this.total.includes("3")){
                    this.tap3 = this.PO;
                    this.break = true;
                    this.p2rc.push('3');
                    this.total.remove('3');
                    this.tapms.play();
                    this.d3 = true;
                 }
              }
              if(((x.includes('1') && x.includes('4')) || (x.includes('3') && x.includes('5')) || (x.includes('8') && x.includes('9'))) && this.break == false){
                 if(this.total.includes("7")){
                    this.tap7 = this.PO;
                    this.break = true;
                    this.p2rc.push('7');
                    this.total.remove('7');
                    this.tapms.play();
                    this.d7 = true;
                 }
              }
              if(((x.includes('1') && x.includes('7')) || (x.includes('5') && x.includes('6'))) && this.break == false){
                 if(this.total.includes("4")){
                    this.tap4 = this.PO;
                    this.break = true;
                    this.p2rc.push('4');
                    this.total.remove('4');
                    this.tapms.play();
                    this.d4 = true;
                 }
              }
              if(((x.includes('2') && x.includes('8')) || (x.includes('4') && x.includes('6'))) && this.break == false){
                 if(this.total.includes("5")){
                    this.tap5 = this.PO;
                    this.break = true;
                    this.p2rc.push('5');
                    this.total.remove('5');
                    this.tapms.play();
                    this.d5 = true;
                 }
              }
              if(((x.includes('3') && x.includes('9')) || (x.includes('4') && x.includes('5'))) && this.break == false){
                 if(this.total.includes("6")){
                    this.tap6 = this.PO;
                    this.break = true;
                    this.p2rc.push('6');
                    this.total.remove('6');
                    this.tapms.play();
                    this.d6 = true;
                 }
              }
              if(((x.includes('2') && x.includes('5')) || (x.includes('7') && x.includes('9'))) && this.break == false){
                 if(this.total.includes("8")){
                    this.tap8 = this.PO;
                    this.break = true;
                    this.p2rc.push('8');
                    this.total.remove('8');
                    this.tapms.play();
                    this.d8 = true;
                 }
              }
              if(((x.includes('3') && x.includes('6')) || (x.includes('7') && x.includes('8'))) && this.break == false){
                 if(this.total.includes("9")){
                    this.tap9 = this.PO;
                    this.break = true;
                    this.p2rc.push('9');
                    this.total.remove('9');
                    this.tapms.play();
                    this.d9 = true;
                 }
              }
              if((x.includes('5') && x.includes('9')) && this.break == false){
                if(this.total.includes("1")){
                    this.tap1 = this.PO;
                    this.break = true;
                    this.p2rc.push('1');
                    this.total.remove('1');
                    this.tapms.play();
                    this.d1 = true;
                 }
              }
              if(((x.includes('1') && x.includes('5'))) && this.break == false){
                if(this.total.includes("9")){
                    this.tap9 = this.PO;
                    this.break = true;
                    this.p2rc.push('9');
                    this.total.remove('9');
                    this.tapms.play();
                    this.d9 = true;
                 }
              }
              if(this.break == false){
                 this.case4();
              }
              this.winner();
           }
        },
        case1(x){
           if(this.d1 && this.d2 && this.d3 && this.d4 && this.d5 && this.d6 && this.d7 && this.d8 && this.d9 == true){

           }else{
              switch (x) {
                case '1':
                 this.tap1 = this.PO;       
                 this.p2rc.push('1');
                 this.total.remove('1');
                 this.tapms.play();
                 this.d1 = true;
                break;
                case '2':
                 this.tap2 = this.PO;     
                 this.p2rc.push('2');
                 this.total.remove('2');
                 this.tapms.play();
                 this.d2 = true;
                break;
                case '3':
                 this.tap3 = this.PO;    
                 this.p2rc.push('3');
                 this.total.remove('3');
                 this.tapms.play();
                 this.d3 = true;
                break;
                case '4':
                 this.tap4 = this.PO;   
                 this.p2rc.push('4');
                 this.total.remove('4');
                 this.tapms.play();
                 this.d4 = true;
                break;
                case '5':
                 this.tap5 = this.PO;  
                 this.p2rc.push('5');
                 this.total.remove('5');
                 this.tapms.play();
                 this.d5 = true;
                break;
                case '6':
                 this.tap6 = this.PO; 
                 this.p2rc.push('6');
                 this.total.remove('6');
                 this.tapms.play();
                 this.d6 = true;
                break;
                case '7':
                 this.tap7 = this.PO; 
                 this.p2rc.push('7');
                 this.total.remove('7');
                 this.tapms.play();
                 this.d7 = true;
                break;
                case '8':
                 this.tap8 = this.PO; 
                 this.p2rc.push('8');
                 this.total.remove('8');
                 this.tapms.play();
                 this.d8 = true;
                break;
                case '9':
                 this.tap9 = this.PO;
                 this.p2rc.push('9');
                 this.total.remove('9');
                 this.tapms.play();
                 this.d9 = true;
                break;

                default:
                break;
             }
             console.log("Case 1")
             this.winner();
           }   
        },
        case2(x){

            if(x.includes('2,3') || x.includes('4,7')){ // If P1 is already pick 3 & 1,Ai try to pick 2
               if(this.total.includes("1")){
                   this.tap1 = this.PO;
                   this.p2rc.push('1');
                   this.total.remove('1');
                   this.tapms.play();
                   this.d1 = true;
                }else{
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
                }
            }
            if(x.includes('1,3') || x.includes('5,8')){ // If P1 is already pick 3 & 1,Ai try to pick 2
               if(this.total.includes("2")){
                   this.tap2 = this.PO;
                   this.p2rc.push('2');
                   this.total.remove('2');
                   this.tapms.play();
                   this.d2 = true;
                }else{
                   this.tap4 = this.PO;
                   this.p2rc.push('4');
                   this.total.remove('4');
                   this.tapms.play();
                   this.d4 = true;
                }
            }
            if(x.includes('1,2') || x.includes('6,9')){
               if(this.total.includes("3")){
                  this.tap3 = this.PO;
                  this.p2rc.push('3');
                  this.total.remove('3');
                  this.tapms.play();
                  this.d3 = true;
               }else{
                  this.tap8 = this.PO;
                  this.p2rc.push('8');
                  this.total.remove('8');
                  this.tapms.play();
                  this.d8 = true;
               }
            }
            if(x.includes('1,4') || x.includes('8,9')){
               if(this.total.includes("7")){
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }
            if(x.includes('1,7') || x.includes('5,6')){
               if(this.total.includes("4")){
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }else{
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }
            }
            if(x.includes('2,8') || x.includes('4,6')){
               if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }
            }
            if(x.includes('3,9') || x.includes('4,5')){
               if(this.total.includes("6")){
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }
            if(x.includes('2,5') || x.includes('7,9')){
               if(this.total.includes("8")){
                  this.tap8 = this.PO;
                  this.p2rc.push('8');
                  this.total.remove('8');
                  this.tapms.play();
                  this.d8 = true;
               }else{
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
               }
            }
            if(x.includes('3,6') || x.includes('7,8')){
               if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }
            }
            if(x.includes('5,7')){
              if(this.total.includes("3")){
                  this.tap3 = this.PO;
                  this.p2rc.push('3');
                  this.total.remove('3');
                  this.tapms.play();
                  this.d3 = true;
               }else{
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }
            }
            if(x.includes('3,5')){
              if(this.total.includes("7")){
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }else{
                 this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }
            }
            if(x.includes('1,5')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }
            }
            if(x.includes('5,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }
            }
            // If p1 not to try win,AI try to win
           //  You can change this code to win the p1 2kyat kyout
            if(x.includes('1,6')){
               if(this.total.includes("2")){
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('1,8')){
               if(this.total.includes("4")){
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('3,4')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('3,8')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,7')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('6,7')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('4,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,4')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,6')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('4,8')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('6,8')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('1,9')){
              if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }
            }
            if(x.includes('3,7')){
              if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }


        },
        case3(x){

           var p2sort = this.p2rc.sort();// P2  Small to Greater
           var p2tap  = p2sort.join(""); // P2 Array to string not comma
           const p2winwc = this.wintap2Condation.find(e=>{ //   Checking P2 Win Chance
              return e.includes(`${p2tap}`)
           })
           //console.log("This is p2 Possible Win "+p2winwc);

           if(p2winwc == undefined){ 
              this.case4();
           }else{

              switch (p2winwc) {
                case '12313':
                   if(p2tap == '12'){
                       if(this.total.includes("3")){
                          this.tap3 = this.PO;
                          this.p2rc.push('3');
                          this.total.remove('3');
                          this.tapms.play();
                          this.d3 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '23'){
                       if(this.total.includes("1")){
                          this.tap1 = this.PO;
                          this.p2rc.push('1');
                          this.total.remove('1');
                          this.tapms.play();
                          this.d1 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '13'){
                       if(this.total.includes("2")){
                          this.tap2 = this.PO;
                          this.p2rc.push('2');
                          this.total.remove('2');
                          this.tapms.play();
                          this.d2 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '45646':
                   if(p2tap == '45'){
                       if(this.total.includes("6")){
                          this.tap6 = this.PO;
                          this.p2rc.push('6');
                          this.total.remove('6');
                          this.tapms.play();
                          this.d6 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '56'){
                       if(this.total.includes("4")){
                          this.tap4 = this.PO;
                          this.p2rc.push('4');
                          this.total.remove('4');
                          this.tapms.play();
                          this.d4 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '46'){
                       if(this.total.includes("5")){
                          this.tap5 = this.PO;
                          this.p2rc.push('5');
                          this.total.remove('5');
                          this.tapms.play();
                          this.d5 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '78979':
                  if(p2tap == '78'){
                       if(this.total.includes("9")){
                          this.tap9 = this.PO;
                          this.p2rc.push('9');
                          this.total.remove('9');
                          this.tapms.play();
                          this.d9 = true;
                          this.winner();
                       }else{   
                          this.case4();
                       }
                    }
                    if(p2tap == '89'){
                       if(this.total.includes("7")){
                          this.tap7 = this.PO;
                          this.p2rc.push('7');
                          this.total.remove('7');
                          this.tapms.play();
                          this.d7 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '79'){
                       if(this.total.includes("8")){
                          this.tap8 = this.PO;
                          this.p2rc.push('8');
                          this.total.remove('8');
                          this.tapms.play();
                          this.d8 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '14717':
                   if(p2tap == '14'){
                       if(this.total.includes("7")){
                          this.tap7 = this.PO;
                          this.p2rc.push('7');
                          this.total.remove('7');
                          this.tapms.play();
                          this.d7 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '47'){
                       if(this.total.includes("1")){
                          this.tap1 = this.PO;
                          this.p2rc.push('1');
                          this.total.remove('1');
                          this.tapms.play();
                          this.d1 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '17'){
                       if(this.total.includes("4")){
                          this.tap4 = this.PO;
                          this.p2rc.push('4');
                          this.total.remove('4');
                          this.tapms.play();
                          this.d4 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '25828':
                   if(p2tap == '25'){
                       if(this.total.includes("8")){
                          this.tap8 = this.PO;
                          this.p2rc.push('8');
                          this.total.remove('8');
                          this.tapms.play();
                          this.d8 = true;
                          this.winner();
                       }else{                           
                          this.case4();
                       }
                    }
                    if(p2tap == '58'){
                       if(this.total.includes("2")){
                          this.tap2 = this.PO;
                          this.p2rc.push('2');
                          this.total.remove('2');
                          this.tapms.play();
                          this.d2 = true;
                          this.winner();
                       }else{                           
                          this.case4();
                       }
                    }
                    if(p2tap == '28'){
                       if(this.total.includes("5")){
                          this.tap5 = this.PO;
                          this.p2rc.push('5');
                          this.total.remove('5');
                          this.tapms.play();
                          this.d5 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '36939':
                   if(p2tap == '36'){
                       if(this.total.includes("9")){
                          this.tap9 = this.PO;
                          this.p2rc.push('9');
                          this.total.remove('9');
                          this.tapms.play();
                          this.d9 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '69'){
                       if(this.total.includes("3")){
                          this.tap3 = this.PO;
                          this.p2rc.push('3');
                          this.total.remove('3');
                          this.tapms.play();
                          this.d3 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '39'){
                       if(this.total.includes("6")){
                          this.tap6 = this.PO;
                          this.p2rc.push('6');
                          this.total.remove('6');
                          this.tapms.play();
                          this.d6 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '15919':
                   if(p2tap == '15'){
                       if(this.total.includes("9")){
                          this.tap9 = this.PO;
                          this.p2rc.push('9');
                          this.total.remove('9');
                          this.tapms.play();
                          this.d9 = true;
                          this.winner();
                       }else{   
                          this.case4();
                       }
                    }
                    if(p2tap == '59'){
                       if(this.total.includes("1")){
                          this.tap1 = this.PO;
                          this.p2rc.push('1');
                          this.total.remove('1');
                          this.tapms.play();
                          this.d1 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '19'){
                       if(this.total.includes("5")){
                          this.tap5 = this.PO;
                          this.p2rc.push('5');
                          this.total.remove('5');
                          this.tapms.play();
                          this.d5 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                 break;
                 case '35737':
                   if(p2tap == '35'){
                       if(this.total.includes("7")){
                          this.tap7 = this.PO;
                          this.p2rc.push('7');
                          this.total.remove('7');
                          this.tapms.play();
                          this.d7 = true;
                          this.winner();
                       }else{                           
                          this.case4();
                       }
                    }
                    if(p2tap == '57'){
                       if(this.total.includes("3")){
                          this.tap3 = this.PO;
                          this.p2rc.push('3');
                          this.total.remove('3');
                          this.tapms.play();
                          this.d3 = true;
                          this.winner();
                       }else{
                          this.case4();
                       }
                    }
                    if(p2tap == '37'){
                       if(this.total.includes("5")){
                          this.tap5 = this.PO;
                          this.p2rc.push('5');
                          this.total.remove('5');
                          this.tapms.play();
                          this.d5 = true;
                       }else{
                          this.case4();
                       }
                    }
                 break;

               default:
                 break;
              }
           }

        },
        case4(){
            const x = this.p1rc.sort().toString();
            
            if(this.d1 && this.d2 && this.d3 && this.d4 && this.d5 && this.d6 && this.d7 && this.d8 && this.d9 == true){

            }else{
              //  Use Brake not to run case together
              if((x.includes('2,3') || (x.includes('4') && x.includes('7'))) && this.break == false){ // If P1 is already pick 3 & 1,Ai try to pick 2
                 if(this.total.includes("1")){
                     this.tap1 = this.PO;
                     this.break = true;
                     this.p2rc.push('1');
                     this.total.remove('1');
                     this.tapms.play();
                     this.d1 = true;
                  }
              }
              if(((x.includes('1') && x.includes('3')) || (x.includes('5') && x.includes('8'))) && this.break == false){ // If P1 is already pick 3 & 1,Ai try to pick 2
                 if(this.total.includes("2")){
                     this.tap2 = this.PO;
                     this.break = true;
                     this.p2rc.push('2');
                     this.total.remove('2');
                     this.tapms.play();
                     this.d2 = true;
                  }
              }
              if((x.includes('1,2') || (x.includes('6') && x.includes('9')) || (x.includes('5') && x.includes('7'))) && this.break == false){
                 if(this.total.includes("3")){
                    this.tap3 = this.PO;
                    this.break = true;
                    this.p2rc.push('3');
                    this.total.remove('3');
                    this.tapms.play();
                    this.d3 = true;
                 }
              }
              if(((x.includes('1') && x.includes('4')) || (x.includes('3') && x.includes('5')) || (x.includes('8') && x.includes('9'))) && this.break == false){
                 if(this.total.includes("7")){
                    this.tap7 = this.PO;
                    this.break = true;
                    this.p2rc.push('7');
                    this.total.remove('7');
                    this.tapms.play();
                    this.d7 = true;
                 }
              }
              if(((x.includes('1') && x.includes('7')) || (x.includes('5') && x.includes('6'))) && this.break == false){
                 if(this.total.includes("4")){
                    this.tap4 = this.PO;
                    this.break = true;
                    this.p2rc.push('4');
                    this.total.remove('4');
                    this.tapms.play();
                    this.d4 = true;
                 }
              }
              if(((x.includes('2') && x.includes('8')) || (x.includes('4') && x.includes('6'))) && this.break == false){
                 if(this.total.includes("5")){
                    this.tap5 = this.PO;
                    this.break = true;
                    this.p2rc.push('5');
                    this.total.remove('5');
                    this.tapms.play();
                    this.d5 = true;
                 }
              }
              if(((x.includes('3') && x.includes('9')) || (x.includes('4') && x.includes('5'))) && this.break == false){
                 if(this.total.includes("6")){
                    this.tap6 = this.PO;
                    this.break = true;
                    this.p2rc.push('6');
                    this.total.remove('6');
                    this.tapms.play();
                    this.d6 = true;
                 }
              }
              if(((x.includes('2') && x.includes('5')) || (x.includes('7') && x.includes('9'))) && this.break == false){
                 if(this.total.includes("8")){
                    this.tap8 = this.PO;
                    this.break = true;
                    this.p2rc.push('8');
                    this.total.remove('8');
                    this.tapms.play();
                    this.d8 = true;
                 }
              }
              if(((x.includes('3') && x.includes('6')) || (x.includes('7') && x.includes('8'))) && this.break == false){
                 if(this.total.includes("9")){
                    this.tap9 = this.PO;
                    this.break = true;
                    this.p2rc.push('9');
                    this.total.remove('9');
                    this.tapms.play();
                    this.d9 = true;
                 }
              }
              if((x.includes('5') && x.includes('9')) && this.break == false){
                if(this.total.includes("1")){
                    this.tap1 = this.PO;
                    this.break = true;
                    this.p2rc.push('1');
                    this.total.remove('1');
                    this.tapms.play();
                    this.d1 = true;
                 }
              }
              if(((x.includes('1') && x.includes('5'))) && this.break == false){
                if(this.total.includes("9")){
                    this.tap9 = this.PO;
                    this.break = true;
                    this.p2rc.push('9');
                    this.total.remove('9');
                    this.tapms.play();
                    this.d9 = true;
                 }
              }

              if(this.break == false){
                console.log('Random times')
                const case5 = this.total[Math.floor(Math.random() * this.total.length)];
                this.case1(case5);
              }
              console.log(x,"this is total ",this.total)
              this.winner();

            }

        },
        normalcase2(x){
           
            if(x.includes('2,3') || x.includes('4,7')){ // If P1 is already pick 3 & 1,Ai try to pick 2
               if(this.total.includes("1")){
                   this.tap1 = this.PO;
                   this.p2rc.push('1');
                   this.total.remove('1');
                   this.tapms.play();
                   this.d1 = true;
                }else{
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
                }
            }
            if(x.includes('1,3') || x.includes('5,8')){ // If P1 is already pick 3 & 1,Ai try to pick 2
               if(this.total.includes("2")){
                   this.tap2 = this.PO;
                   this.p2rc.push('2');
                   this.total.remove('2');
                   this.tapms.play();
                   this.d2 = true;
                }else{
                   this.tap4 = this.PO;
                   this.p2rc.push('4');
                   this.total.remove('4');
                   this.tapms.play();
                   this.d4 = true;
                }
            }
            if(x.includes('1,2') || x.includes('6,9')){
               if(this.total.includes("3")){
                  this.tap3 = this.PO;
                  this.p2rc.push('3');
                  this.total.remove('3');
                  this.tapms.play();
                  this.d3 = true;
               }else{
                  this.tap8 = this.PO;
                  this.p2rc.push('8');
                  this.total.remove('8');
                  this.tapms.play();
                  this.d8 = true;
               }
            }
            if(x.includes('1,4') || x.includes('8,9')){
               if(this.total.includes("7")){
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }
            if(x.includes('1,7') || x.includes('5,6')){
               if(this.total.includes("4")){
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }else{
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }
            }
            if(x.includes('2,8') || x.includes('4,6')){
               if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }
            }
            if(x.includes('3,9') || x.includes('4,5')){
               if(this.total.includes("6")){
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }
            if(x.includes('2,5') || x.includes('7,9')){
               if(this.total.includes("8")){
                  this.tap8 = this.PO;
                  this.p2rc.push('8');
                  this.total.remove('8');
                  this.tapms.play();
                  this.d8 = true;
               }else{
                  this.tap6 = this.PO;
                  this.p2rc.push('6');
                  this.total.remove('6');
                  this.tapms.play();
                  this.d6 = true;
               }
            }
            if(x.includes('3,6') || x.includes('7,8')){
               if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }
            }
            // Give a chance to win p1
            if(x.includes('5,7')){
              if(this.total.includes("3")){
                  this.tap3 = this.PO;
                  this.p2rc.push('3');
                  this.total.remove('3');
                  this.tapms.play();
                  this.d3 = true;
               }else{
                  const normalrandom  = ['1','6','8'] // 6,8 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('3,5')){
              if(this.total.includes("7")){
                  this.tap7 = this.PO;
                  this.p2rc.push('7');
                  this.total.remove('7');
                  this.tapms.play();
                  this.d7 = true;
               }else{
                  const normalrandom  = ['1','4','8'] // 4,8 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('1,5')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  const normalrandom  = ['3','6','8'] // 6,8 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('5,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  const normalrandom  = ['2','3','4'] // 2,4 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
           //  Chance End
            // If p1 not to try win,AI try to win
           //  You can change this code to win the p1 2kyat kyout
            if(x.includes('1,6')){
               if(this.total.includes("3")){
                  this.tap3 = this.PO;
                  this.p2rc.push('3');
                  this.total.remove('3');
                  this.tapms.play();
                  this.d3 = true;
               }else{
                  const normalrandom  = ['5','7','9']//7,9 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('1,8')){
               if(this.total.includes("5")){
                  if(this.total.includes("2")){
                    this.tap5 = this.PO;
                    this.p2rc.push('5');
                    this.total.remove('5');
                    this.tapms.play();
                    this.d5 = true;
                  }else{
                    this.tap9 = this.PO;
                    this.p2rc.push('9');
                    this.total.remove('9');
                    this.tapms.play();
                    this.d9 = true;
                  }
               }else{
                  const normalrandom  = ['3','4','6']//7,9 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('3,4')){
              if(this.total.includes("5")){
                  if(this.total.includes("6") && this.total.includes("7")){
                    this.tap5 = this.PO;
                    this.p2rc.push('5');
                    this.total.remove('5');
                    this.tapms.play();
                    this.d5 = true;
                  }else{
                    this.tap1 = this.PO;
                    this.p2rc.push('1');
                    this.total.remove('1');
                    this.tapms.play();
                    this.d1 = true;
                  }
               }else{
                  const normalrandom  = ['1','8','9']//7,9 p1 win
                  const x = normalrandom[Math.floor(Math.random() * normalrandom.length)];
                  this.case1(x);
               }
            }
            if(x.includes('3,8')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,7')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('6,7')){
              if(this.total.includes("9")){
                  this.tap9 = this.PO;
                  this.p2rc.push('9');
                  this.total.remove('9');
                  this.tapms.play();
                  this.d9 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('4,9')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,4')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('2,6')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('4,8')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('6,8')){
              if(this.total.includes("1")){
                  this.tap1 = this.PO;
                  this.p2rc.push('1');
                  this.total.remove('1');
                  this.tapms.play();
                  this.d1 = true;
               }else{
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }
            }
            if(x.includes('1,9')){
              if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap4 = this.PO;
                  this.p2rc.push('4');
                  this.total.remove('4');
                  this.tapms.play();
                  this.d4 = true;
               }
            }
            if(x.includes('3,7')){
              if(this.total.includes("5")){
                  this.tap5 = this.PO;
                  this.p2rc.push('5');
                  this.total.remove('5');
                  this.tapms.play();
                  this.d5 = true;
               }else{
                  this.tap2 = this.PO;
                  this.p2rc.push('2');
                  this.total.remove('2');
                  this.tapms.play();
                  this.d2 = true;
               }
            }
            this.winner();
        },
        drawcanvas(e,id){
           var ctx = document.getElementById(id).getContext("2d"),
           dashLen = 220, dashOffset = dashLen, speed = 10,
           txt = e, x = 25, i = 0;

           ctx.font = "70px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
           ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2 / 3;
           ctx.shadowColor="#fff";
           ctx.shadowBlur=10;
           ctx.strokeStyle = ctx.fillStyle = "#0af";

          (function loop() {
              ctx.clearRect(0, 0, 100, 90);
              ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
              dashOffset -= speed;                                         // reduce dash length
              ctx.strokeText(txt[i], x, 65);                               // stroke letter
  
              if (dashOffset > 0) requestAnimationFrame(loop);             // animate
              else {
                  ctx.fillText(txt[i], x, 65);                               // fill final letter
                  dashOffset = dashLen;                                      // prep next char
                  x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
                  ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
                  ctx.rotate(Math.random() * 0.005);                         // random rotation
                  if (i < txt.length) requestAnimationFrame(loop);
              }
          })();
        }
    },
    mounted() {

      Array.prototype.remove = function() {
         var what, a = arguments, L = a.length, ax;
         while (L && this.length) {
             what = a[--L];
             while ((ax = this.indexOf(what)) !== -1) {
                 this.splice(ax, 1);
             }
         }
         return this;
      }

       const w   = new Audio("./sound/win.wav");
       const l   = new Audio("./sound/lose.wav");
       const t   = new Audio("./sound/tap.mp3");
       const d   = new Audio("./sound/draw.wav");
       const s   = new Audio("./sound/allthree.wav");
       this.winms  = w;
       this.losems = l;
       this.tapms  = t;
       this.drawms = d;
       this.allthree = s;
       
     $.ajax({success(){
      $('#selectplayer').modal('show')
     }})            

     
    },
    computed: {
              // Import Adding 2 Array diffent value to know possible win;
              //   let totalp1rc = this.total
              //      .filter(x => !this.p1rc.includes(x))
              //      .concat(this.p1rc.filter(x => !this.total.includes(x)));
    },
})