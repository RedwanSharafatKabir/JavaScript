
!function thisfunc() {
    'use strict';
    document.write(this);
    var obj = {
        property: 'Hi !',
        sona: 'dudu',
        method: function () {
            return '<br>&nbsp'+this.property + "<br>" + this.sona;
        }
    }
    document.write(obj.method());
}();
