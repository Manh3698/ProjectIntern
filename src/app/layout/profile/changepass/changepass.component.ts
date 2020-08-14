import { Component, OnInit } from '@angular/core';
declare var $:any; 

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      function isCompare(pass, passconf) {
        var pass_val = pass.val();
        var passconf_val = passconf.val();
        if (passconf == "") {
            passconf.addClass("error");
            return false;
        }
        if (pass_val != passconf_val) {
            passconf.addClass("error");
            return false;
        }
        passconf.removeClass("error");
        return true;
    }
    })
  }

}
