/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../../src/main/webapp/app/admin/user-management/user-management-delete-dialog.component';
import * as i2 from '@angular/router';
import * as i3 from '../../../../../../../../src/main/webapp/app/admin/user-management/user-modal.service';
import * as i4 from '@angular/forms';
import * as i5 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i6 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i7 from '../../shared/alert/alert-error.component.ngfactory';
import * as i8 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as i9 from 'ng-jhipster/src/service/alert.service';
import * as i10 from 'ng-jhipster/src/service/event-manager.service';
import * as i11 from '@ngx-translate/core/src/translate.service';
import * as i12 from '../../../../../../../../src/main/webapp/app/shared/user/user.service';
import * as i13 from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
const styles_UserDeleteDialogComponent:any[] = ([] as any[]);
export const RenderType_UserDeleteDialogComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_UserDeleteDialogComponent,data:{}});
export function View_UserDeleteDialogComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,([] as any[]),(null as any),(null as any));
}
export function View_UserDeleteDialogComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-user-delete-dialog',
      ([] as any[]),(null as any),(null as any),(null as any),View_UserDeleteDialogComponent_0,
      RenderType_UserDeleteDialogComponent)),i0.ɵdid(245760,(null as any),0,i1.UserDeleteDialogComponent,
      [i2.ActivatedRoute,i3.UserModalService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const UserDeleteDialogComponentNgFactory:i0.ComponentFactory<i1.UserDeleteDialogComponent> = i0.ɵccf('jhi-user-delete-dialog',
    i1.UserDeleteDialogComponent,View_UserDeleteDialogComponent_Host_0,{},{},([] as any[]));
const styles_UserMgmtDeleteDialogComponent:any[] = ([] as any[]);
export const RenderType_UserMgmtDeleteDialogComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_UserMgmtDeleteDialogComponent,data:{}});
export function View_UserMgmtDeleteDialogComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),46,'form',[['name',
      'deleteForm'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
      (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
      [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
          (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],[(null as any),
      'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i1.UserMgmtDeleteDialogComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.confirmDelete(_co.user.login)) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i4.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(16384,(null as any),0,i4.NgForm,[[8,(null as any)],
      [8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i0.ɵprd(2048,(null as any),
      i4.ControlContainer,(null as any),[i4.NgForm]),i0.ɵdid(16384,(null as any),0,
      i4.NgControlStatusGroup,[i4.ControlContainer],(null as any),(null as any)),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      8,'div',[['class','modal-header']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),2,'h4',[['class','modal-title'],['jhiTranslate',
          'entity.delete.title']],(null as any),(null as any),(null as any),i5.View_JhiTranslateComponent_0,
          i5.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i6.JhiTranslateComponent,
      ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['Confirm delete operation'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'button',[['aria-hidden','true'],['class',
          'close'],['data-dismiss','modal'],['type','button']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.UserMgmtDeleteDialogComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.clear()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),8,'div',[['class','modal-body']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-alert-error',([] as any[]),
      (null as any),(null as any),(null as any),i7.View_JhiAlertErrorComponent_0,i7.RenderType_JhiAlertErrorComponent)),
      i0.ɵdid(180224,(null as any),0,i8.JhiAlertErrorComponent,[i9.JhiAlertService,
          i10.JhiEventManager,i11.TranslateService],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'p',[['jhiTranslate','userManagement.delete.question']],(null as any),
          (null as any),(null as any),i5.View_JhiTranslateComponent_0,i5.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i6.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate'],translateValues:[1,'translateValues']},(null as any)),(_l()(),
          i0.ɵted((null as any),['Are you sure you want to delete this User?'])),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),19,'div',[['class','modal-footer']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'button',[['class','btn btn-secondary'],['data-dismiss','modal'],['type',
              'button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.UserMgmtDeleteDialogComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clear()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-ban']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'entity.action.cancel']],(null as any),(null as any),(null as any),i5.View_JhiTranslateComponent_0,
          i5.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i6.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Cancel'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'button',[['class',
          'btn btn-danger'],['type','submit']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-remove']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['jhiTranslate','entity.action.delete']],(null as any),(null as any),
          (null as any),i5.View_JhiTranslateComponent_0,i5.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i6.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Delete'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:i1.UserMgmtDeleteDialogComponent = _v.component;
        const currVal_7:any = 'entity.delete.title';
        _ck(_v,9,0,currVal_7);
        const currVal_8:any = 'userManagement.delete.question';
        const currVal_9:any = i0.ɵinlineInterpolate(1,'{login: \'',_co.user.login,
            '\'}');
        _ck(_v,22,0,currVal_8,currVal_9);
        const currVal_10:any = 'entity.action.cancel';
        _ck(_v,33,0,currVal_10);
        const currVal_11:any = 'entity.action.delete';
        _ck(_v,42,0,currVal_11);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
      });
}
export function View_UserMgmtDeleteDialogComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-user-mgmt-delete-dialog',
      ([] as any[]),(null as any),(null as any),(null as any),View_UserMgmtDeleteDialogComponent_0,
      RenderType_UserMgmtDeleteDialogComponent)),i0.ɵdid(49152,(null as any),0,i1.UserMgmtDeleteDialogComponent,
      [i12.UserService,i13.NgbActiveModal,i10.JhiEventManager],(null as any),(null as any))],
      (null as any),(null as any));
}
export const UserMgmtDeleteDialogComponentNgFactory:i0.ComponentFactory<i1.UserMgmtDeleteDialogComponent> = i0.ɵccf('jhi-user-mgmt-delete-dialog',
    i1.UserMgmtDeleteDialogComponent,View_UserMgmtDeleteDialogComponent_Host_0,{},
    {},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL0NJVC9jbm9ndWVpcmEvbG9va2JyYmFja2VuZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL0NJVC9jbm9ndWVpcmEvbG9va2JyYmFja2VuZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMuVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiLCJuZzovLy9ob21lL0NJVC9jbm9ndWVpcmEvbG9va2JyYmFja2VuZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cy5Vc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxqaGktdXNlci1kZWxldGUtZGlhbG9nPjwvamhpLXVzZXItZGVsZXRlLWRpYWxvZz4iLCI8Zm9ybSBuYW1lPVwiZGVsZXRlRm9ybVwiIChuZ1N1Ym1pdCk9XCJjb25maXJtRGVsZXRlKHVzZXIubG9naW4pXCI+IDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuZGVsZXRlLnRpdGxlXCI+Q29uZmlybSBkZWxldGUgb3BlcmF0aW9uPC9oND4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgKGNsaWNrKT1cImNsZWFyKClcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8cCBqaGlUcmFuc2xhdGU9XCJ1c2VyTWFuYWdlbWVudC5kZWxldGUucXVlc3Rpb25cIiB0cmFuc2xhdGVWYWx1ZXM9XCJ7bG9naW46ICd7e3VzZXIubG9naW59fSd9XCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFVzZXI/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwiY2xlYXIoKVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLWJhblwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLmNhbmNlbFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj4gPHNwYW4gY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVwiZW50aXR5LmFjdGlvbi5kZWxldGVcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiAiLCI8amhpLXVzZXItbWdtdC1kZWxldGUtZGlhbG9nPjwvamhpLXVzZXItbWdtdC1kZWxldGUtZGlhbG9nPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7MENBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUE7TUFBQTtVQUFBO01BQUE7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUF3QjtNQUFBO01BQUE7SUFBQTtJQUF4QjtFQUFBLHVDQUFBO01BQUEsb0NBQUE7TUFBQSwrREFBQTswQkFBQSxrQ0FBQTs4QkFBQSxtREFBK0Q7YUFBQSx1QkFBQztNQUFBO01BQUEsOEJBQTBCLHNDQUFDO2FBQUE7VUFBQTs2Q0FBQSxVQUFBO01BQUEsK0RBQTJEO01BQUEsK0JBQTZCLHNDQUFDO2FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUE0RTtVQUFBO1VBQUE7UUFBQTtRQUE1RTtNQUFBLGdDQUE4RixzQ0FBZ0I7YUFBQSx1QkFBTyxzQ0FBQzthQUFBO1VBQUEsMERBQXdCO01BQUEsUUFBQztNQUFBO2FBQUE7a0RBQUEsK0JBQW1DO2lCQUFBLHVCQUFDO1VBQUE7VUFBQTthQUFBO1VBQUEsc0VBQTZGO2lCQUFBLGdFQUE4QztpQkFBQSx1QkFBTyxzQ0FBQztpQkFBQTtjQUFBO01BQTBCLHNDQUFDO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBcUU7Y0FBQTtjQUFBO1lBQUE7WUFBckU7VUFBQSxnQ0FBdUYsc0NBQUM7aUJBQUE7Y0FBQSwwREFBK0I7VUFBQSxRQUFNO1VBQUE7NkNBQUEsVUFBQTtVQUFBLCtEQUEwQztVQUFBLGFBQWEsc0NBQVU7VUFBQSxRQUFDO1VBQUE7VUFBQSw4QkFBNkMsc0NBQUM7aUJBQUE7Y0FBQTtNQUFrQyxzQ0FBTTtVQUFBO1VBQUE7YUFBQTtVQUFBLGdDQUEwQztNQUFhLHNDQUFVO01BQU8sc0NBQVE7OztRQUF2d0I7UUFBeEIsV0FBd0IsU0FBeEI7UUFBK1E7UUFBOEM7WUFBQTtRQUFqRCxZQUFHLFVBQThDLFNBQWpEO1FBQWlUO1FBQU4sWUFBTSxVQUFOO1FBQThKO1FBQU4sWUFBTSxVQUFOOztRQUExeUI7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQSxXQUFBLHFFQUFBOzs7O29CQ0FBO01BQUE7OENBQUEsVUFBQTtNQUFBOzs7OzsifQ==