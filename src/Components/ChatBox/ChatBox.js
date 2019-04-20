import React, { Component } from "react";
import "./ChatBot.css";
import $ from 'jquery';
// import AwesomeComponent from "../Loader/AwesomeComponent";
import Evaluation from "../Evaluation/Evaluation";
import  {buckets} from '../../globalConstFile/globalConstFile.js'
//const valueOfQuestion=1.7;
// import LoadingOverlay from 'react-loading-overlay'
// import BounceLoader from 'react-spinners/BounceLoader'
class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [
        {
          id:1,
          question : 'Hi, I am Janice! Are you ready to find out what career paths could be favorable to you?',
          questionvalue : 1,
          options : [
            {
              id : 1,
              option : 'Yes'
            }
          ]
        },
        {
            id : 2,
            question : 'Oh my god! Let’s go ahead then. Take this test. Note that you would have to arrange the options in descending order, i.e. what suits you the most to what suits you the least. ',
            questionvalue : 1,
            options : [
              {
                  id : 1,
                  option : "Cool, let's start the test"
              },
            ]
        },
        {
          id: 3,
          question: "How do you spend your day?",
          questionvalue: 4,
          options: [
            {
              id: 1,
              option: "Reading novels/ editorials/ articles ",
              value: "",
              category : ['CW']
            },
            {
              id: 2,
              option: "Organising your shelves/ closet",
              value: "",
              category : ['M','HR']
            },
            {
              id: 3,
              option: "Browsing Instagram and forwarding memes",
              value: "",
              category : ['SMM']
            },
            {
              id: 4,
              option: "Practising a speech in case you win the Filmfare award",
              value: "",
              category : ['S']
            }
          ]
        },
        {
          id: 4,
          question: "What bothers you?",
          questionvalue: 4,
          options: [
            {
              id: 1,
              option: "AIB ain’t making any memes",
              value: "",
              category : ['SMM']
            },
            {
              id: 2,
              option: "Chetan Bhagat novels",
              value: "",
              category : ['CW']
            },
            {
              id: 3,
              option: "Hundreds of icons on your desktop",
              value: "",
              category : ['M']
            },
            {
              id: 4,
              option: "Crowded websites",
              value: '',
              category : ['V']
            }
          ]
        },
        {
          id: 5,
          question: "You are -",
          questionvalue: 4,
          options: [
            {
              id: 1,
              option: "I am the mommy in my group",
              value: "",
              category : ['HR']
            },
            {
              id: 2,
              option: "I can buy a sweater worth Rs. 1800 for Rs. 200 at Sarojini Nagar Market",
              value: "",
              category : ['S']
            },
            {
              id: 3,
              option: "I can handle multiple tasks at once",
              value: "",
              category : ['M','O']
            },
            {
              id: 4,
              option: "I am the official photographer of my groupX",
              value: "",
              category : ['V']
            }
          ]
        },
        {
            id: 6,
            question: "What do your friends hate about you?",
            questionvalue: 4,
            options: [
              {
                id: 1,
                option: "You keep correcting their grammatical errors",
                value: "",
                category : ['CW','CS']
              },
              {
                id: 2,
                option: "You keep making weird videos when you are hanging out",
                value: "",
                category : ['V']
              },
              {
                id: 3,
                option: "You always have to take a lead in every plan or project ",
                value: "",
                category : ['M']
              },
              {
                id: 4,
                option: "You already know all comics/ memes your friends share with you",
                value: "",
                category : ['SMM']
              }
            ]
        },
        {
            id: 7,
            question: "I like -",
            questionvalue: 4,
            options: [
              {
                id: 1,
                option: "Delegating my work ",
                value: "",
                category : ['O']
              },
              {
                id: 2,
                option: "Writing reports ",
                value: "",
                category : ['M','CW']
              },
              {
                id: 3,
                option: "Doodling on the back of my notebook ",
                value: "",
                category : ['V','SMM']
              },
              {
                id: 4,
                option: "Helping  friends with their problems ",
                value: "",
                category : ['CS']
              }
            ]
        },
        {
            id: 8,
            question: "My friends love me because -",
            questionvalue: 4,
            options: [
              {
                id: 1,
                option: "I write their essays/ assignments ",
                value: "",
                category : ['CW']
              },
              {
                id: 2,
                option: "I calmly listen to them crib 24X7",
                value: "",
                category : ['CS']
              },
              {
                id: 3,
                option: "I help them prepare for interviews ",
                value: "",
                category : ['HR']
              },
              {
                id: 4,
                option: "I can convince the friend who always wears black to buy a red shirt",
                value: "",
                category : ['S','CS']
              }
            ]
        },
        {
            id: 9,
            question: "I am comfortable in -",
            questionvalue: 4,
            options: [
              {
                id: 1,
                option: "Giving presentations",
                value: "",
                category : ['S','M']
              },
              {
                id: 2,
                option: "Addressing a crowd ",
                value: "",
                category : ['S']
              },
              {
                id: 3,
                option: "Making comics/ memes",
                value: "",
                category : ['SMM']
              },
              {
                id: 4,
                option: "Saying “You are fired”",
                value: "",
                category : ['HR']
              }
            ]
        },
        {
            id: 10,
            question: "Which statement is true for you -",
            questionvalue: 4,
            options: [
              {
                id: 1,
                option: "You follow random vloggers on Youtube ",
                value: "",
                category : ['V']
              },
              {
                id: 2,
                option: "You can force Sabzi vale bhaiya to give you free mirchi and dhaniya ",
                value: "",
                category : ['O']
              },
              {
                id: 3,
                option: "You are always daydreaming about a book/ writer/ journalist",
                value: "",
                category : ['CW']
              },
              {
                id: 4,
                option: "You like finding solutions",
                value: "",
                category : ['O','M']
              }
            ]
        }
      ],
      chatShown: [],
      showButtons : {show : false,chatId : ''},
      currentQuestion : [],
      showLoader : false,
      showResult : false,
      fields : '',
      nextQuestion : ''
    };
  }
  componentWillMount() {
    var chatShown = this.state.chatShown;
    chatShown.push(this.state.chat[0]);
    console.log(chatShown);
    this.setState(
      {
        chatShown: chatShown,
        currentQuestion : chatShown[0]
      },
      () => {
        console.log(this.state.chatShown);
        console.log('this state',this.state);
        console.log('currentQuestion ',this.state.currentQuestion);
      }
    );
  }
  handleChange = event => {
    event.preventDefault();
    console.log("event", event.target.id);
    console.log("className",event.target.className);
    if(event.target.className.includes('choosed')){
        return ;
    }
    // console.log(event.target.getAttribute('chatid') +" "+event.target.id);
    // console.log('chatid ',event.target.getAttribute('chatid'));
    var chatId=event.target.getAttribute('chatid')-1;
    
    console.log(this.state);
    console.log('chatId' ,chatId);
    console.log(this.state.chat[chatId]);
    if (this.state.chat[chatId].questionvalue === 4) {
      let element = Array.from(document.getElementsByClassName("optionList"+(chatId+1)+event.target.id));
      element.map(e=>e.classList.add("red",'choosed'));
      console.log(element);
      let optionId=event.target.id-1;
      let chatValue=this.state.chat[chatId].questionvalue-1;
      console.log(chatValue);
      let chatQ=this.state.chat;
      chatQ[chatId].options[optionId].value = 1;
      chatQ[chatId].questionvalue = chatValue;
      console.log(chatQ);
      this.setState({
        // [this.state.chat[chatId].options[event.target.id].value]: 1,
        // [(this.state.chat[chatId].questionvalue)]: chatValue
       chat : chatQ
      },()=>{
          console.log(this.state.chat[chatId]);
          console.log('this state ',this.state);
      });
    } else if (this.state.chat[chatId].questionvalue === 3) {
        let element = Array.from(document.getElementsByClassName("optionList"+(chatId+1)+event.target.id));
        element.map(e=>e.classList.add("red1",'choosed'));
      let optionId=event.target.id-1;
      let chatValue=this.state.chat[chatId].questionvalue-1;
      let chatQ=this.state.chat;
      chatQ[chatId].options[optionId].value = 0.5;
      chatQ[chatId].questionvalue = chatValue;
      this.setState({
        // [this.state.chat[chatId].options[event.target.id].value]: 1,
        // [(this.state.chat[chatId].questionvalue)]: chatValue
        chat : chatQ
      },()=>{
          console.log(this.state.chat[chatId]);
          console.log('this state ',this.state);
      });
    } else if (this.state.chat[chatId].questionvalue === 2) {
        let element = Array.from(document.getElementsByClassName("optionList"+(chatId+1)+event.target.id));
        element.map(e=>e.classList.add("red2",'choosed'));
      let optionId=event.target.id-1;
      let chatValue=this.state.chat[chatId].questionvalue-1;
      let chatQ=this.state.chat;
      chatQ[chatId].options[optionId].value = 0.2;
      chatQ[chatId].questionvalue = chatValue;
      this.setState({
        // [this.state.chat[chatId].options[event.target.id].value]: 1,
        // [(this.state.chat[chatId].questionvalue)]: chatValue
        chat : chatQ
      },()=>{
          console.log(this.state.chat[chatId]);
          console.log('this state ',this.state);
      });
    } else{
        let element = Array.from(document.getElementsByClassName("optionList"+(chatId+1)+event.target.id));
      element.map(e=>e.classList.add("red3",'choosed'));
      let optionId=event.target.id-1;
      let chatValue=this.state.chat[chatId].questionvalue-1;
      let chatQ=this.state.chat;
      chatQ[chatId].options[optionId].value = 0;
      chatQ[chatId].questionvalue = chatValue;
      var eventId=event.target.id;
      this.setState({
        // [this.state.chat[chatId].options[event.target.id].value]: 1,
        // [(this.state.chat[chatId].questionvalue)]: chatValue
        chat : chatQ},
        () => {   
            if(chatId==0 || chatId==1){
              this.nextQuestion();
            }
            else{
              let shwbtn={show : true,chatId : (chatId+1)}
              this.setState({
                  showButtons : shwbtn
              },()=>{
                  console.log('this state',this.state);
                  var chatBox = document.getElementById("chatBox");
                  chatBox.scrollTop = chatBox.scrollHeight;
                  
                  // console.log(chatId +" "+eventId);
                  // if(chatId==0 && eventId==1){
                  //   console.log('Yes');
                  //   this.setState({
                  //     nextQuestion : 2
                  //   })
                  // }
                  // else if(chatId==0 && eventId==2){
                  //   console.log('no')
                  //   this.setState({
                  //     nextQuestion : 3
                  //   })
                  // }
                  // else if(chatId==1 && eventId==1){
                  //   console.log('start test');
                  //   this.setState({
                  //     nextQuestion : 4
                  //   })
                  // }
              })
            }
            
        }
      );
    }
  };
  nextQuestion=()=>{
    // if(this.state.nextQuestion){
    //     let chatShown = this.state.chatShown;
    //     chatShown.push(this.state.chat[this.state.nextQuestion-1]);

    //     this.setState({
    //       chatShown: chatShown,
    //       showButtons : false,
    //       nextQuestion : '',
    //       currentQuestion : chatShown[this.state.nextQuestion-1]
    //     },()=>{
    //     });
    //     return;
    // }
    var chatShownLength = this.state.chatShown.length;
    var chatLength= this.state.chat.length;
    if(chatShownLength===chatLength){
        this.evaluateSkills();
        return;
    }
      let chatShown = this.state.chatShown;
      chatShown.push(this.state.chat[chatShownLength]);

      this.setState({
        chatShown: chatShown,
        showButtons : false,
        nextQuestion : '',
        currentQuestion : chatShown[chatShownLength-1]
      },()=>{
        var chatBox = document.getElementById("chatBox");
        chatBox.scrollTop = chatBox.scrollHeight;
      });
  }
  evaluateSkills=()=>{
      var cw=0;
      var smm=0;
      var hr=0;
      var s=0;
      var m=0;
      var v=0;
      var o=0;
      var cs=0;
      this.state.chat.forEach(cht=>{
          console.log('cht',cht.id);
          cht.options.forEach(option=>{
              // console.log('option',option);
              // console.log("option"+option.category);
                if(!option.category){
                  return;
                }
                if(option.category.includes('CW')){
                    cw=cw+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('SMM')){
                    smm=smm+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('HR')){
                    hr=hr+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('S')){
                    s=s+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('M')){
                    m=m+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('V')){
                    v=v+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('O')){
                    o=o+option.value;
                }
                // console.log("option"+option.category);
                if(option.category.includes('CS')){
                    cs=cs+option.value;
                }
          })
      });
      var fieldsArray=[
          {'name' : 'CW',value : cw},
          {'name' : 'SMM',value : smm},
          {'name' : 'HR',value : hr},
          {'name' : 'S',value : s},
          {'name' : 'M', value : m},
          {'name' : 'V',value : v},
          {'name' : 'O',value : o},
          {'name' : 'CS',value : cs}
      ];
      var tempArray=fieldsArray.map(o => o.value);
      var maxPercentage=Math.max(...tempArray);
      var maxi = tempArray.indexOf(maxPercentage);
      tempArray[maxi] = -Infinity; // replace max in the array with -infinity
      var secondMax = Math.max.apply(null, tempArray); // get the new max 
      var max2=tempArray.indexOf(secondMax);
      tempArray[max2]=-Infinity;
      var thirdMax = Math.max.apply(null, tempArray); 
      tempArray[maxi] = maxPercentage;
      tempArray[max2]=secondMax;
      var fields=[];
      fieldsArray.forEach(field=>{
          if(field.value===maxPercentage){
            fields.push(field.name);
          }
          if(field.value===secondMax){
            fields.push(field.name);
          }
          if(field.value===thirdMax){
            fields.push(field.name);
          }
        })
        console.log('fields',fields);
      
      var f=[]
      fields.forEach(fieldName=>{
        f.push(buckets[fieldName]);
      })
      var {hideChatNow} =this.props;
            hideChatNow();
      this.setState({
          fields : f,
          showLoader : false,
          showResult : true
      })
  }
  resetQuestion=()=>{
    var resetQuestion= this.state.chat;
    console.log(resetQuestion);
    console.log(this.state.currentQuestion);
    // resetQuestion=resetQuestion.map((c,index)=>{
    //     console.log("c",c.id);
    //     console.log("currentQuestion",this.state.currentQuestion.id);
    //     if(c.id===this.state.currentQuestion.id){
    //         console.log('matches');
    //         return resetQuestion.splice(index,1,this.state.currentQuestion)[0];
    //     }
    //     else{ 
    //         return resetQuestion[index];
    //     }
    // });
    resetQuestion=resetQuestion.map((c,index)=>{
        if(c.id===this.state.currentQuestion.id){
            if(c.id==1 || c.id==2){
              resetQuestion[index].questionvalue=1;
            }
            else{
              resetQuestion[index].questionvalue=4;
            }
            resetQuestion[index].options.map((option)=>{
                let elem=document.getElementsByClassName("optionList"+(c.id+1)+option.id);
                console.log('eleme ',elem);
                elem.className='options';
                // console.log(elem);
                // let elements = document.getElementById(option.id);
                // let elements1=document.getElementsByClassName('optionList'); 
                // let colors=['red','red1','red2','red3'];
                // colors.forEach(color=>{
                    // let elements3=document.querySelector('li '+option.id+" .optionList"+"."+ color);
                    // elements3.className=''
                    // console.log('elements3 ',elements3);
                // })
                // let elements3=document.querySelectorAll('li#'+option.id+".optionList");
                // console.log(elements3);
                // console.log(elements);
                // console.log(elements1);
            })
            this.setState({
                chat : resetQuestion 
            },()=>{
                console.log('resetQuestion ',resetQuestion);
            })
        }
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* <LoadingOverlay
        active={this.state.showLoader}
        spinner={<BounceLoader/>}
        styles={{
            overlay: (base) => ({
            ...base,
            background: 'rgba(237, 247, 248, 0.3)'
            })
        }}> */}
        {this.state.showResult? <div className='evaluationContainer'><Evaluation field={this.state.fields}/></div> :
        <div className="chatBox" id="chatBox">
            <div>
                {this.state.chatShown.map(chat => {
                return (
                    <div key={chat.id} name={chat.id} id={chat.id}>
                        {/* {console.log(chat.id)} */}
                    <div className={"Question "+chat.id}>{(chat.id==1 || chat.id==2) ? " " : "Question:"} {chat.question}</div>
                    <div className="clearfix">
                        <div className="">
                        <ul>
                            {chat.options.map(option => (
                            <li
                                onClick={this.handleChange}
                                className={"optionList"+chat.id+option.id+" options"}
                                id={option.id}
                                chatid={chat.id}
                                key={option.id}
                            >
                                {option.option}
                                {/* {console.log(chat.id)} */}
                            </li>
                            ))}
                        </ul>
                            {this.state.showButtons.show && this.state.showButtons.chatId===chat.id ?
                            <div className='selectButtons right'>
                                    <button className='btn btn-danger' >Reset</button>
                                    <button className='btn btn-success' onClick={this.nextQuestion}>Next</button>
                            </div> : ''
                            }
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            
        </div>
        }
        {/* </LoadingOverlay> */}
      </React.Fragment>
    );
  }
}

export default ChatBox;
