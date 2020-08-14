import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      //ham kiem tra tien cach ra 3 chu so
      function FormatNumber(obj) {
        var strvalue;
        if (eval(obj)) strvalue = eval(obj).value;
        else strvalue = obj;
        var num;
        num = strvalue.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) num = "";
        var sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        num = Math.floor(num / 100).toString();
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        eval(obj).value = (((sign) ? '' : '-') + num);
      }

      function checkCapsLock(e) {
        var myKeyCode = 0;
        var myShiftKey = false;
        // Internet Explorer 4+
        if (document.all) {
          myKeyCode = e.keyCode;
          myShiftKey = e.shiftKey;
          // Netscape 4
        // } else if (document.layers) {
        //   myKeyCode = e.which;
        //   myShiftKey = (myKeyCode == 16) ? true : false;
        //   // Netscape 6
        } else if (document.getElementById) {
          myKeyCode = e.which;
          myShiftKey = (myKeyCode == 16) ? true : false;
        }
        // Upper case letters are seen without depressing the Shift key, therefore Caps Lock is on
        if ((myKeyCode >= 65 && myKeyCode <= 90) && !myShiftKey) {
          alert("");
          // Lower case letters are seen while depressing the Shift key, therefore Caps Lock is on
        } else if ((myKeyCode >= 97 && myKeyCode <= 122) && myShiftKey) {
          alert("");
        }
      }

      //ham kiem tra so
      function checkNumber(val) {
        var strPass = val.val();
        var strLength = strPass.length;
        var lchar = val.val().charAt((strLength) - 1);
        var cCode = lchar.charCodeAt(0);
        if (cCode < 48 || cCode > 57) {
          var myNumber = val.val().substring(0, (strLength) - 1);
          val.val(myNumber);
        }
        return false;
      }

      //ham kiem tra rong
      function IsEmpty(str) {
        var text = str.val();
        if (text == '') {
          str.addClass('error');
          return false;
        }
        str.removeClass('error');
        return true;
      }

      //ham so sanh mat khau
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

      //ham kiem tra email
      function isEmail(str) {
        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var email = str.val();
        if (email == '') {
          str.addClass('error');
          return false;
        }
        if (!re.test(email)) {
          str.addClass('error');
          return false;
        }
        str.removeClass('error');
        return true;
      }

      // returns true if the string only contains characters A-Z or a-z
      function isAlpha(str) {
        var re = /[^a-zA-Z]/g
        if (re.test(str)) return false;
        return true;
      }

      // returns true if the string only contains characters 0-9
      function isNumeric(str) {
        var re = /[\D]/g
        if (re.test(str)) return false;
        return true;
      }

      // returns true if the string only contains characters A-Z, a-z or 0-9
      function isAlphaNumeric(str) {
        var re = /[^a-zA-Z0-9]/g
        if (re.test(str)) return false;
        return true;
      }

      // returns true if the string's length equals "len"
      function isLength(str, len) {
        return str.length == len;
      }

      // returns true if the string's length is between "min" and "max"
      function isLengthBetween(str, min, max) {
        return (str.length >= min) && (str.length <= max);
      }

      function addCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
      }
    })
  }

}
