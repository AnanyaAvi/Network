import { Component, OnInit } from '@angular/core';

import {  faAngleDown, faBold, faItalic, faUnderline, faList, faSuperscript, faSubscript, faListOl, faListUl, faArrowRightRotate, faArrowLeftRotate, faAlignCenter, faAlignLeft, faAlignRight, faAlignJustify, faPaperPlane, faThumbsUp, faThumbsDown, faComment, faBookmark  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  errorMessage: any;
  deleteSuccess: any;
  userFound: any;
  email: any;
  TotalChars:number=1000;
  CharsLeft!: number;
  HtmlLength!: number;
  QuestionText:any;

  constructor() { }

  ngOnInit(): void {

    (<HTMLDivElement>document.getElementById('textEditor')).style.display="none";
    this.CharsLeft=1000;
    this.HtmlLength=0;

  }

  likeFunction(){
    if((<HTMLInputElement>document.getElementById('likeCheckbox')).checked){
      ((<HTMLLabelElement>document.getElementById('likeBtn')).classList.add("LikeBtnActive"));
    }
    else{
      ((<HTMLLabelElement>document.getElementById('likeBtn')).classList.remove("LikeBtnActive"));
    }
  }
  bookmarkFunction(){
    if((<HTMLInputElement>document.getElementById('bookmarkCheckbox')).checked){
      ((<HTMLLabelElement>document.getElementById('bookmarkBtn')).classList.add("BookmarkBtnActive"));
    }
    else{
      ((<HTMLLabelElement>document.getElementById('bookmarkBtn')).classList.remove("BookmarkBtnActive"));
    }
  }

  modifyText = (command: any, defaultUi: any, value: any) => {
    //execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
  };

  optionButton(name: any) {
    this.modifyText(name, false, null);
  }
  userLink: any;

  advancedOptionButton(name: any) {
    this.modifyText(name, false, null);
    if (name != 'unlink') {
      this.userLink = prompt("Enter a URL");
    }
    /http/i.test(this.userLink);
    //if link has http then pass directly else add https
    if (/http/i.test(this.userLink)) {
      this.modifyText(name, false, this.userLink);
    } else {
      this.userLink = "http://" + this.userLink;
      this.modifyText(name, false, this.userLink);
    }
  }



  ForeColorOptionButton(name: any) {
    (<HTMLInputElement>document.getElementById("foreColor")).addEventListener("change", () => {
      this.modifyText(name, false, (<HTMLInputElement>document.getElementById("foreColor")).value);
    })

  }
  BackColorOptionButton(name: any) {
    (<HTMLInputElement>document.getElementById("backColor")).addEventListener("change", () => {
      this.modifyText(name, false, (<HTMLInputElement>document.getElementById("backColor")).value);
    })
  }
  FontSizeChange() {
    (<HTMLInputElement>document.getElementById("fontSize")).onchange = function () {
      document.execCommand("fontSize", false, (<HTMLInputElement>document.getElementById("fontSize")).value);
    }
  }

  JustifyLeft(){
    document.execCommand('justifyLeft',false,'');
  }
  JustifyCenter(){
    document.execCommand('justifyCenter',false,'');
  }
  JustifyRight(){
    document.execCommand('justifyRight',false,'');
  }
  JustifyFull(){
    document.execCommand('justifyFull',false,'');
  }

  SendQuestion(){
    console.log((<HTMLDivElement>document.getElementById('text-input')).innerHTML);
    ;
  }


  isBoldActive:boolean = false;
  isItalicActive:boolean=false;
  isUnderlineActive:boolean=false;
  isStrikethroughActive:boolean = false;
  isSuperscriptActive:boolean = false;
  isSubscriptActive:boolean = false;

  ActivateMe(name: any) {
    if (name == 'bold') {
      if (this.isBoldActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isBoldActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isBoldActive = true;
      }
    }
    if (name == 'italic') {
      if (this.isItalicActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isItalicActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isItalicActive = true;
      }
    }
    if (name == 'underline') {
      if (this.isUnderlineActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isUnderlineActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isUnderlineActive = true;
      }
    }
    if (name == 'strikethrough') {
      if (this.isStrikethroughActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isStrikethroughActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isStrikethroughActive = true;
      }
    }
    if (name == 'superscript') {
      if (this.isSuperscriptActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isSuperscriptActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isSuperscriptActive = true;
      }
    }
    if (name == 'subscript') {
      if (this.isSubscriptActive) {
        (<HTMLButtonElement>document.getElementById(name)).classList.remove('active');
        this.isSubscriptActive = false;
      }
      else {
        (<HTMLButtonElement>document.getElementById(name)).classList.add('active');
        this.isSubscriptActive = true;
      }
    }
  }

  isEditorOpen:boolean=false;
  OpenTextEditor(){
    if(this.isEditorOpen){
      (<HTMLDivElement>document.getElementById('textEditor')).style.transform='scaleY(0)';
      (<HTMLDivElement>document.getElementById('textEditor')).style.display="none";
      (<HTMLElement>document.getElementById('arrowUp')).style.display="none";
      (<HTMLElement>document.getElementById('arrowDown')).style.display="block";
      this.isEditorOpen=false;
    }
    else{
      (<HTMLDivElement>document.getElementById('textEditor')).style.transform='scaleY(1)';
      (<HTMLDivElement>document.getElementById('textEditor')).style.display="block";
      (<HTMLElement>document.getElementById('arrowUp')).style.display="block";
      (<HTMLElement>document.getElementById('arrowDown')).style.display="none";
      this.isEditorOpen=true;
    }
  }

  CountChars(){
    var typedLength=(<HTMLDivElement>document.getElementById('text-input')).innerText.length;
    this.CharsLeft=this.TotalChars-typedLength;
    this.HtmlLength=(<HTMLDivElement>document.getElementById('text-input')).innerHTML.length;if(this.CharsLeft<=100){
      (<HTMLDivElement>document.getElementById('charsLeft')).style.color='red';
    }
    else{
      (<HTMLDivElement>document.getElementById('charsLeft')).style.color='green';
    }
  }

  faAngleDown=faAngleDown;
  faBold=faBold;
  faItalic=faItalic;
  faUnderline=faUnderline;
  faList=faList;
  faSuperscript=faSuperscript;
  faSubscript=faSubscript;
  faListOl=faListOl;
  faListUl=faListUl;
  faArrowRightRotate=faArrowRightRotate;
  faArrowLeftRotate=faArrowLeftRotate;
  faAlignRight=faAlignRight;
  faAlignCenter=faAlignCenter;
  faAlignLeft=faAlignLeft;
  faAlignJustify=faAlignJustify;
  faPaperPlane=faPaperPlane;
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  faComment=faComment;
  faBookmark=faBookmark;
}
