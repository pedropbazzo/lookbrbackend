/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../../../../src/main/webapp/app/entities/closet/closet-dialog.component';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i4 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i5 from '../../shared/alert/alert-error.component.ngfactory';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/alert/alert-error.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from 'ng-jhipster/src/service/event-manager.service';
import * as i9 from '@ngx-translate/core/src/translate.service';
import * as i10 from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import * as i11 from '../../../../../../../../src/main/webapp/app/entities/closet/closet.service';
import * as i12 from '@angular/router';
import * as i13 from '../../../../../../../../src/main/webapp/app/entities/closet/closet-popup.service';
const styles_ClosetDialogComponent:any[] = ([] as any[]);
export const RenderType_ClosetDialogComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ClosetDialogComponent,data:{}});
export function View_ClosetDialogComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),71,'form',[['name',
      'editForm'],['novalidate',''],['role','form']],[[2,'ng-untouched',(null as any)],
      [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
          (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
      [2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
      [(null as any),'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i1.ClosetDialogComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.save()) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(16384,[['editForm',4]],0,i2.NgForm,[[8,
      (null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i0.ɵprd(2048,
      (null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i0.ɵdid(16384,(null as any),
      0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),(null as any)),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          8,'div',[['class','modal-header']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),2,'h4',[['class','modal-title'],['id',
              'myClosetLabel'],['jhiTranslate','lookbrbackendApp.closet.home.createOrEditLabel']],
              (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
              i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,
          i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,'jhiTranslate']},
          (null as any)),(_l()(),i0.ɵted((null as any),['Create or edit a Closet'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'button',[['aria-hidden','true'],['class','close'],['data-dismiss','modal'],
              ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClosetDialogComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clear()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),33,'div',[['class','modal-body']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'jhi-alert-error',([] as any[]),(null as any),(null as any),(null as any),
          i5.View_JhiAlertErrorComponent_0,i5.RenderType_JhiAlertErrorComponent)),
      i0.ɵdid(180224,(null as any),0,i6.JhiAlertErrorComponent,[i7.JhiAlertService,
          i8.JhiEventManager,i9.TranslateService],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          12,'div',[['class','form-group']],[[8,'hidden',0]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),2,'label',[['for','id'],['jhiTranslate',
              'global.field.id']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
              i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,
          i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,'jhiTranslate']},
          (null as any)),(_l()(),i0.ɵted((null as any),['ID'])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'input',[['class',
          'form-control'],['id','id'],['name','id'],['readonly','readonly'],['type',
          'text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'ngModelChange'],[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClosetDialogComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,28)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,28).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,28)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,28)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.closet.id = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i2.NgModel,[[2,i2.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),13,'div',[['class','form-group']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'label',[['class',
          'form-control-label'],['for','field_page'],['jhiTranslate','lookbrbackendApp.closet.page']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Page'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),6,'input',[['class','form-control'],['id','field_page'],['name',
              'page'],['type','number']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend'],[(null as any),'change']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClosetDialogComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,42)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,42).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,42)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,42)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('change' === en)) {
              const pd_4:any = ((<any>i0.ɵnov(_v,43).onChange($event.target.value)) !== false);
              ad = (pd_4 && ad);
            }
            if (('input' === en)) {
              const pd_5:any = ((<any>i0.ɵnov(_v,43).onChange($event.target.value)) !== false);
              ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
              const pd_6:any = ((<any>i0.ɵnov(_v,43).onTouched()) !== false);
              ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_7:any = ((<any>(_co.closet.page = $event)) !== false);
              ad = (pd_7 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i2.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i2.DefaultValueAccessor,i2.ɵbc]),i0.ɵdid(671744,(null as any),0,i2.NgModel,
          [[2,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          19,'div',[['class','modal-footer']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),7,'button',[['class','btn btn-secondary'],
              ['data-dismiss','modal'],['type','button']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ClosetDialogComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.clear()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-ban']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'entity.action.cancel']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Cancel'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'button',[['class',
          'btn btn-primary'],['type','submit']],[[8,'disabled',0]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-save']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['jhiTranslate','entity.action.save']],(null as any),(null as any),
          (null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Save'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' ']))],
      (_ck,_v) => {
        var _co:i1.ClosetDialogComponent = _v.component;
        const currVal_7:any = 'lookbrbackendApp.closet.home.createOrEditLabel';
        _ck(_v,9,0,currVal_7);
        const currVal_9:any = 'global.field.id';
        _ck(_v,24,0,currVal_9);
        const currVal_17:any = 'id';
        const currVal_18:any = _co.closet.id;
        _ck(_v,30,0,currVal_17,currVal_18);
        const currVal_19:any = 'lookbrbackendApp.closet.page';
        _ck(_v,38,0,currVal_19);
        const currVal_27:any = 'page';
        const currVal_28:any = _co.closet.page;
        _ck(_v,45,0,currVal_27,currVal_28);
        const currVal_29:any = 'entity.action.cancel';
        _ck(_v,58,0,currVal_29);
        const currVal_31:any = 'entity.action.save';
        _ck(_v,67,0,currVal_31);
      },(_ck,_v) => {
        var _co:i1.ClosetDialogComponent = _v.component;
        const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
        const currVal_8:boolean = !_co.closet.id;
        _ck(_v,21,0,currVal_8);
        const currVal_10:any = i0.ɵnov(_v,32).ngClassUntouched;
        const currVal_11:any = i0.ɵnov(_v,32).ngClassTouched;
        const currVal_12:any = i0.ɵnov(_v,32).ngClassPristine;
        const currVal_13:any = i0.ɵnov(_v,32).ngClassDirty;
        const currVal_14:any = i0.ɵnov(_v,32).ngClassValid;
        const currVal_15:any = i0.ɵnov(_v,32).ngClassInvalid;
        const currVal_16:any = i0.ɵnov(_v,32).ngClassPending;
        _ck(_v,27,0,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,
            currVal_16);
        const currVal_20:any = i0.ɵnov(_v,47).ngClassUntouched;
        const currVal_21:any = i0.ɵnov(_v,47).ngClassTouched;
        const currVal_22:any = i0.ɵnov(_v,47).ngClassPristine;
        const currVal_23:any = i0.ɵnov(_v,47).ngClassDirty;
        const currVal_24:any = i0.ɵnov(_v,47).ngClassValid;
        const currVal_25:any = i0.ɵnov(_v,47).ngClassInvalid;
        const currVal_26:any = i0.ɵnov(_v,47).ngClassPending;
        _ck(_v,41,0,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,
            currVal_26);
        const currVal_30:any = (i0.ɵnov(_v,2).form.invalid || _co.isSaving);
        _ck(_v,62,0,currVal_30);
      });
}
export function View_ClosetDialogComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-closet-dialog',
      ([] as any[]),(null as any),(null as any),(null as any),View_ClosetDialogComponent_0,
      RenderType_ClosetDialogComponent)),i0.ɵdid(114688,(null as any),0,i1.ClosetDialogComponent,
      [i10.NgbActiveModal,i7.JhiAlertService,i11.ClosetService,i8.JhiEventManager],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ClosetDialogComponentNgFactory:i0.ComponentFactory<i1.ClosetDialogComponent> = i0.ɵccf('jhi-closet-dialog',
    i1.ClosetDialogComponent,View_ClosetDialogComponent_Host_0,{},{},([] as any[]));
const styles_ClosetPopupComponent:any[] = ([] as any[]);
export const RenderType_ClosetPopupComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ClosetPopupComponent,data:{}});
export function View_ClosetPopupComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,([] as any[]),(null as any),(null as any));
}
export function View_ClosetPopupComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-closet-popup',
      ([] as any[]),(null as any),(null as any),(null as any),View_ClosetPopupComponent_0,
      RenderType_ClosetPopupComponent)),i0.ɵdid(245760,(null as any),0,i1.ClosetPopupComponent,
      [i12.ActivatedRoute,i13.ClosetPopupService],(null as any),(null as any))],(_ck,
      _v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ClosetPopupComponentNgFactory:i0.ComponentFactory<i1.ClosetPopupComponent> = i0.ɵccf('jhi-closet-popup',
    i1.ClosetPopupComponent,View_ClosetPopupComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY2xvc2V0L2Nsb3NldC1kaWFsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY2xvc2V0L2Nsb3NldC1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9DSVQvY25vZ3VlaXJhL2xvb2ticmJhY2tlbmQvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jbG9zZXQvY2xvc2V0LWRpYWxvZy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY2xvc2V0L2Nsb3NldC1kaWFsb2cuY29tcG9uZW50LnRzLkNsb3NldERpYWxvZ0NvbXBvbmVudF9Ib3N0Lmh0bWwiLCJuZzovLy9ob21lL0NJVC9jbm9ndWVpcmEvbG9va2JyYmFja2VuZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Nsb3NldC9jbG9zZXQtZGlhbG9nLmNvbXBvbmVudC50cy5DbG9zZXRQb3B1cENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmb3JtIG5hbWU9XCJlZGl0Rm9ybVwiIHJvbGU9XCJmb3JtXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVwic2F2ZSgpXCIgI2VkaXRGb3JtPVwibmdGb3JtXCI+IDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4gPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIm15Q2xvc2V0TGFiZWxcIiBqaGlUcmFuc2xhdGU9XCJsb29rYnJiYWNrZW5kQXBwLmNsb3NldC5ob21lLmNyZWF0ZU9yRWRpdExhYmVsXCI+Q3JlYXRlIG9yIGVkaXQgYSBDbG9zZXQ8L2g0PiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAoY2xpY2spPVwiY2xlYXIoKVwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW2hpZGRlbl09XCIhY2xvc2V0LmlkXCI+IDxsYWJlbCBmb3I9XCJpZFwiIGpoaVRyYW5zbGF0ZT1cImdsb2JhbC5maWVsZC5pZFwiPklEPC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlkXCIgbmFtZT1cImlkXCIgWyhuZ01vZGVsKV09XCJjbG9zZXQuaWRcIiByZWFkb25seT1cInJlYWRvbmx5XCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4gPGxhYmVsIGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsXCIgamhpVHJhbnNsYXRlPVwibG9va2JyYmFja2VuZEFwcC5jbG9zZXQucGFnZVwiIGZvcj1cImZpZWxkX3BhZ2VcIj5QYWdlPC9sYWJlbD4gPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYWdlXCIgaWQ9XCJmaWVsZF9wYWdlXCIgWyhuZ01vZGVsKV09XCJjbG9zZXQucGFnZVwiLz4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJjbGVhcigpXCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtYmFuXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cImVudGl0eS5hY3Rpb24uY2FuY2VsXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtc2F2ZVwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XCJlbnRpdHkuYWN0aW9uLnNhdmVcIj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gIiwiPGpoaS1jbG9zZXQtZGlhbG9nPjwvamhpLWNsb3NldC1kaWFsb2c+IiwiPGpoaS1jbG9zZXQtcG9wdXA+PC9qaGktY2xvc2V0LXBvcHVwPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7TUFBQTtVQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQTZDO01BQUE7TUFBQTtJQUFBO0lBQTdDO0VBQUEsdUNBQUE7TUFBQSxvQ0FBQTtNQUFBLDhFQUFBO01BQUEsb0VBQUE7TUFBQTtNQUFvRixzQ0FBQztVQUFBO1VBQUEsOEJBQTBCLHNDQUFDO2lCQUFBO2NBQUE7Y0FBQTtpREFBQSxVQUFBO21DQUFBO1VBQUEsZUFBeUc7TUFBNEIsc0NBQUM7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUE0RTtjQUFBO2NBQUE7WUFBQTtZQUE1RTtVQUFBLGdDQUE4RixzQ0FBZ0I7aUJBQUEsdUJBQU8sc0NBQUM7aUJBQUE7Y0FBQTtNQUF3QixzQ0FBQztVQUFBOytFQUFBO2FBQUE7Z0RBQUEsK0JBQW1DO2lCQUFBLHVCQUFDO1VBQUE7VUFBQSw4QkFBOEMsc0NBQUM7aUJBQUE7Y0FBQTtpREFBQSxVQUFBO21DQUFBO1VBQUEsZUFBK0MsdUNBQVU7VUFBQSxRQUFDO1VBQUE7VUFBQTtVQUFBO2NBQUE7VUFBQTtjQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBMEQ7Y0FBQTtjQUFBO1lBQUE7WUFBMUQ7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSxvREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUF1RztVQUFBLFFBQU8sc0NBQUM7VUFBQTtVQUFBLDRDQUF3QjtVQUFBLFFBQUM7VUFBQTtVQUFBOzZDQUFBLFVBQUE7VUFBQSwrREFBK0Y7VUFBQSxXQUFZLHNDQUFDO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQXNFO2NBQUE7Y0FBQTtZQUFBO1lBQXRFO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsb0NBQUE7VUFBQTtZQUFBO1VBQUEsMkNBQUE7VUFBQTtVQUFBLHFFQUFBO1VBQUEsOERBQUE7VUFBQSxpRUFBaUc7aUJBQUEsdUJBQU8sc0NBQU87aUJBQUEsdUJBQUM7VUFBQTtVQUFBLDhCQUEwQixzQ0FBQztpQkFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1lBQXFFO2NBQUE7Y0FBQTtZQUFBO1lBQXJFO1VBQUEsZ0NBQXVGLHNDQUFDO2lCQUFBO2NBQUEsMERBQStCO1VBQUEsUUFBTTtVQUFBOzZDQUFBLFVBQUE7VUFBQSwrREFBMEM7VUFBQSxhQUFhLHNDQUFVO1VBQUEsUUFBQztVQUFBO1VBQUEsOEJBQTZGLHNDQUFDO2lCQUFBO2NBQUE7TUFBZ0Msc0NBQU07VUFBQTtVQUFBO2FBQUE7VUFBQSxnQ0FBd0M7TUFBVyxzQ0FBVTtNQUFPLHNDQUFROzs7UUFBcm9DO1FBQTNDLFdBQTJDLFNBQTNDO1FBQXdYO1FBQWhCLFlBQWdCLFNBQWhCO1FBQTBHO1FBQVU7UUFBMUQsWUFBZ0QsV0FBVSxVQUExRDtRQUEwSztRQUFsQyxZQUFrQyxVQUFsQztRQUFzSjtRQUE0QjtRQUF0RSxZQUEwQyxXQUE0QixVQUF0RTtRQUE4UTtRQUFOLFlBQU0sVUFBTjtRQUE0TTtRQUFOLFlBQU0sVUFBTjs7O1FBQXB0QztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEscUVBQUE7UUFBaWM7UUFBeEIsWUFBd0IsU0FBeEI7UUFBeUc7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQSxZQUFBO1lBQUEsVUFBQTtRQUFvUDtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFlBQUE7WUFBQSxVQUFBO1FBQWdXO1FBQXRCLFlBQXNCLFVBQXRCOzs7O29CQ0FobEM7TUFBQTtzQ0FBQSxVQUFBO01BQUE7TUFBQTtJQUFBOzs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtxQ0FBQSxVQUFBO01BQUE7O0lBQUE7Ozs7In0=