/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i2 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../../../../src/main/webapp/app/account/activate/activate.component';
import * as i5 from '../../../../../../../../src/main/webapp/app/account/activate/activate.service';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as i7 from '@angular/router';
const styles_ActivateComponent:any[] = ([] as any[]);
export const RenderType_ActivateComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ActivateComponent,data:{}});
function View_ActivateComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),11,'div',[['class',
      'alert alert-success']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),4,'span',[['jhiTranslate','activate.messages.success']],(null as any),
      (null as any),(null as any),i1.View_JhiTranslateComponent_0,i1.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i2.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Your user account has been activated.'])),
      (_l()(),i0.ɵted((null as any),[' Please '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',[['class','alert-link'],
          ['jhiTranslate','global.messages.info.authenticated.link']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.login()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i1.View_JhiTranslateComponent_0,i1.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i2.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['sign in'])),
      (_l()(),i0.ɵted((null as any),['. ']))],(_ck,_v) => {
    const currVal_0:any = 'activate.messages.success';
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = 'global.messages.info.authenticated.link';
    _ck(_v,9,0,currVal_1);
  },(null as any));
}
function View_ActivateComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'div',[['class',
      'alert alert-danger'],['jhiTranslate','activate.messages.error']],(null as any),
      (null as any),(null as any),i1.View_JhiTranslateComponent_0,i1.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i2.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Your user could not be activated.'])),(_l()(),i0.ɵted((null as any),[' Please use the registration form to sign up. ']))],
      (_ck,_v) => {
        const currVal_0:any = 'activate.messages.error';
        _ck(_v,1,0,currVal_0);
      },(null as any));
}
export function View_ActivateComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),17,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      14,'div',[['class','row justify-content-center']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),11,'div',[['class','col-md-8']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'h1',[['jhiTranslate','activate.title']],(null as any),(null as any),(null as any),
          i1.View_JhiTranslateComponent_0,i1.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i2.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Activation'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ActivateComponent_1)),i0.ɵdid(16384,(null as any),
          0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ActivateComponent_2)),i0.ɵdid(16384,(null as any),
          0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:i4.ActivateComponent = _v.component;
        const currVal_0:any = 'activate.title';
        _ck(_v,7,0,currVal_0);
        const currVal_1:any = _co.success;
        _ck(_v,11,0,currVal_1);
        const currVal_2:any = _co.error;
        _ck(_v,14,0,currVal_2);
      },(null as any));
}
export function View_ActivateComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-activate',
      ([] as any[]),(null as any),(null as any),(null as any),View_ActivateComponent_0,
      RenderType_ActivateComponent)),i0.ɵdid(114688,(null as any),0,i4.ActivateComponent,
      [i5.ActivateService,i6.LoginModalService,i7.ActivatedRoute],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const ActivateComponentNgFactory:i0.ComponentFactory<i4.ActivateComponent> = i0.ɵccf('jhi-activate',
    i4.ActivateComponent,View_ActivateComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9DSVQvY25vZ3VlaXJhL2xvb2ticmJhY2tlbmQvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQudHMuQWN0aXZhdGVDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2PiA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4gPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+IDxoMSBqaGlUcmFuc2xhdGU9XCJhY3RpdmF0ZS50aXRsZVwiPkFjdGl2YXRpb248L2gxPiA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiICpuZ0lmPVwic3VjY2Vzc1wiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XCJhY3RpdmF0ZS5tZXNzYWdlcy5zdWNjZXNzXCI+PHN0cm9uZz5Zb3VyIHVzZXIgYWNjb3VudCBoYXMgYmVlbiBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSA8L3NwYW4+IDxhIGNsYXNzPVwiYWxlcnQtbGlua1wiIChjbGljayk9XCJsb2dpbigpXCIgamhpVHJhbnNsYXRlPVwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXCI+c2lnbiBpbjwvYT4uIDwvZGl2PiA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgKm5nSWY9XCJlcnJvclwiIGpoaVRyYW5zbGF0ZT1cImFjdGl2YXRlLm1lc3NhZ2VzLmVycm9yXCI+IDxzdHJvbmc+WW91ciB1c2VyIGNvdWxkIG5vdCBiZSBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSB1c2UgdGhlIHJlZ2lzdHJhdGlvbiBmb3JtIHRvIHNpZ24gdXAuIDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiAiLCI8amhpLWFjdGl2YXRlPjwvamhpLWFjdGl2YXRlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0F3SDtNQUFBO01BQUEsZ0JBQWlELHNDQUFDO01BQUE7TUFBQTthQUFBO1VBQUEsZ0NBQStDO1VBQUE7VUFBQSxnQkFBUTtNQUE4Qyw2Q0FBZTtNQUFDO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBc0I7Y0FBQTtjQUFBO1lBQUE7WUFBdEI7VUFBQTthQUFBO1VBQUEsZ0NBQStGO01BQVc7SUFBek47SUFBTixXQUFNLFNBQU47SUFBNko7SUFBeEMsV0FBd0MsU0FBeEM7Ozs7b0JBQW1IO01BQUE7TUFBQTthQUFBO1VBQUEsZ0NBQXFGLHNDQUFDO2lCQUFBO2NBQUEsMERBQVE7VUFBQSx3Q0FBMEM7O1FBQTFGO1FBQTlDLFdBQThDLFNBQTlDOzs7O29CQUFsWjtNQUFBLHdFQUFLO2FBQUEsdUJBQUM7TUFBQTtNQUFBLDRDQUF3QztNQUFDO1VBQUE7TUFBc0Isc0NBQUM7VUFBQTs2RUFBQSxVQUFBO1VBQUE7Y0FBQSxnQ0FBa0M7TUFBZSxzQ0FBQztVQUFBLGdFQUFBO1VBQUE7TUFBeVIsc0NBQUM7VUFBQSxnRUFBQTtVQUFBO01BQTRMLHNDQUFPO01BQU8sc0NBQU87OztRQUF6aEI7UUFBSixXQUFJLFNBQUo7UUFBbUY7UUFBakMsWUFBaUMsU0FBakM7UUFBMFQ7UUFBaEMsWUFBZ0MsU0FBaEM7Ozs7b0JDQWxaO01BQUE7a0NBQUEsVUFBQTtNQUFBOztRQUFBOzs7OyJ9