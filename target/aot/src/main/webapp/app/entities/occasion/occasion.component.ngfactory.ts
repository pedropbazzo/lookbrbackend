/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as i4 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as i5 from '../../shared/alert/alert.component.ngfactory';
import * as i6 from '../../../../../../../../src/main/webapp/app/shared/alert/alert.component';
import * as i7 from 'ng-jhipster/src/service/alert.service';
import * as i8 from '@angular/forms';
import * as i9 from '../../../../../../../../src/main/webapp/app/entities/occasion/occasion.component';
import * as i10 from '@ngx-translate/core/src/translate.pipe';
import * as i11 from '@ngx-translate/core/src/translate.service';
import * as i12 from '../../../../../../../../src/main/webapp/app/entities/occasion/occasion.service';
import * as i13 from 'ng-jhipster/src/service/event-manager.service';
import * as i14 from '../../../../../../../../src/main/webapp/app/shared/auth/principal.service';
const styles_OccasionComponent:any[] = ([] as any[]);
export const RenderType_OccasionComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_OccasionComponent,data:{}});
function View_OccasionComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'button',[['class',
      'input-group-addon btn btn-danger']],(null as any),[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.clear()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-trash-o']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      [' ']))],(null as any),(null as any));
}
function View_OccasionComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
      [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),
      [' ']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,4,0,'../inspiration',(<any>_v.parent).context.$implicit.inspirationId);
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,3).target;
    const currVal_1:any = i0.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_3:any = (<any>_v.parent).context.$implicit.inspirationId;
    _ck(_v,5,0,currVal_3);
  });
}
function View_OccasionComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
      [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),
      [' ']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,4,0,'../look',(<any>_v.parent).context.$implicit.lookId);
    _ck(_v,3,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,3).target;
    const currVal_1:any = i0.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_3:any = (<any>_v.parent).context.$implicit.lookId;
    _ck(_v,5,0,currVal_3);
  });
}
function View_OccasionComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),65,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      4,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),
      [[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,4).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
      [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),
      [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['',''])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),4,'td',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
      i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_OccasionComponent_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'td',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_OccasionComponent_5)),i0.ɵdid(16384,(null as any),
          0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),41,'td',[['class','text-right']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          38,'div',[['class','btn-group flex-btn-group-container']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),9,'button',[['class',
          'btn btn-info btn-sm'],['type','submit']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,28).onClick()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,
          [i1.Router,i1.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {routerLink:[0,'routerLink']},(null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class',
          'fa fa-eye']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['class','d-none d-md-inline'],['jhiTranslate','entity.action.view']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['View'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),11,'button',[['class',
          'btn btn-primary btn-sm'],['replaceUrl','true'],['type','submit']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,39).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,
          [i1.Router,i1.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {replaceUrl:[0,'replaceUrl'],routerLink:[1,'routerLink']},(null as any)),
      i0.ɵpod({popup:0}),i0.ɵpod({outlets:0}),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class',
          'fa fa-pencil']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'span',[['class','d-none d-md-inline'],['jhiTranslate',
              'entity.action.edit']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Edit'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),11,'button',[['class',
          'btn btn-danger btn-sm'],['replaceUrl','true'],['type','submit']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,52).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,
          [i1.Router,i1.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {replaceUrl:[0,'replaceUrl'],routerLink:[1,'routerLink']},(null as any)),
      i0.ɵpod({popup:0}),i0.ɵpod({outlets:0}),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class',
          'fa fa-remove']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),2,'span',[['class','d-none d-md-inline'],['jhiTranslate',
              'entity.action.delete']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Delete'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' ']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,5,0,'../occasion',_v.context.$implicit.id);
    _ck(_v,4,0,currVal_2);
    const currVal_5:any = _v.context.$implicit.inspirationId;
    _ck(_v,14,0,currVal_5);
    const currVal_6:any = _v.context.$implicit.lookId;
    _ck(_v,20,0,currVal_6);
    const currVal_7:any = _ck(_v,29,0,'../occasion',_v.context.$implicit.id);
    _ck(_v,28,0,currVal_7);
    const currVal_8:any = 'entity.action.view';
    _ck(_v,34,0,currVal_8);
    const currVal_9:any = 'true';
    const currVal_10:any = _ck(_v,42,0,'/',_ck(_v,41,0,_ck(_v,40,0,(('occasion/' + _v.context.$implicit.id) + '/edit'))));
    _ck(_v,39,0,currVal_9,currVal_10);
    const currVal_11:any = 'entity.action.edit';
    _ck(_v,47,0,currVal_11);
    const currVal_12:any = 'true';
    const currVal_13:any = _ck(_v,55,0,'/',_ck(_v,54,0,_ck(_v,53,0,(('occasion/' + _v.context.$implicit.id) + '/delete'))));
    _ck(_v,52,0,currVal_12,currVal_13);
    const currVal_14:any = 'entity.action.delete';
    _ck(_v,60,0,currVal_14);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,4).target;
    const currVal_1:any = i0.ɵnov(_v,4).href;
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_3:any = _v.context.$implicit.id;
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = _v.context.$implicit.page;
    _ck(_v,9,0,currVal_4);
  });
}
function View_OccasionComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),38,'div',[['class',
      'table-responsive']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),35,'table',[['class','table table-striped']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),26,'thead',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),23,'tr',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'global.field.id']],(null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['ID'])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),3,'th',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['jhiTranslate','lookbrbackendApp.occasion.page']],(null as any),
          (null as any),(null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Page'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'lookbrbackendApp.occasion.inspiration']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Inspiration'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'span',[['jhiTranslate',
          'lookbrbackendApp.occasion.look']],(null as any),(null as any),(null as any),
          i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,
          (null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
              'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Look'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_OccasionComponent_3)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf'],ngForTrackBy:[1,'ngForTrackBy']},
          (null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'global.field.id';
    _ck(_v,10,0,currVal_0);
    const currVal_1:any = 'lookbrbackendApp.occasion.page';
    _ck(_v,15,0,currVal_1);
    const currVal_2:any = 'lookbrbackendApp.occasion.inspiration';
    _ck(_v,20,0,currVal_2);
    const currVal_3:any = 'lookbrbackendApp.occasion.look';
    _ck(_v,25,0,currVal_3);
    const currVal_4:any = _co.occasions;
    const currVal_5:any = _co.trackId;
    _ck(_v,35,0,currVal_4,currVal_5);
  },(null as any));
}
export function View_OccasionComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),62,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      19,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),2,'span',[['jhiTranslate','lookbrbackendApp.occasion.home.title']],
      (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,i3.RenderType_JhiTranslateComponent)),
      i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,([] as any[]),{jhiTranslate:[0,
          'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),['Occasions'])),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          12,'button',[['class','btn btn-primary float-right jh-create-entity create-occasion']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,9).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.RouterLink,
          [i1.Router,i1.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {routerLink:[0,'routerLink']},(null as any)),i0.ɵpad(1),i0.ɵpod({popup:0}),
      i0.ɵpod({outlets:0}),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-plus']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          2,'span',[['class','hidden-sm-down'],['jhiTranslate','lookbrbackendApp.occasion.home.createLabel']],
          (null as any),(null as any),(null as any),i3.View_JhiTranslateComponent_0,
          i3.RenderType_JhiTranslateComponent)),i0.ɵdid(49152,(null as any),0,i4.JhiTranslateComponent,
          ([] as any[]),{jhiTranslate:[0,'jhiTranslate']},(null as any)),(_l()(),i0.ɵted((null as any),
          [' Create new Occasion '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'jhi-alert',([] as any[]),(null as any),
              (null as any),(null as any),i5.View_JhiAlertComponent_0,i5.RenderType_JhiAlertComponent)),
      i0.ɵdid(245760,(null as any),0,i6.JhiAlertComponent,[i7.JhiAlertService],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),30,'div',[['class','row']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),27,'div',[['class','col-sm-12']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),24,'form',[['class',
          'form-inline'],['name','searchForm'],['novalidate','']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'submit'],
          [(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,32).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,32).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i8.ɵbf,([] as any[]),
          (null as any),(null as any)),i0.ɵdid(16384,(null as any),0,i8.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),(null as any)),i0.ɵprd(2048,
          (null as any),i8.ControlContainer,(null as any),[i8.NgForm]),i0.ɵdid(16384,
          (null as any),0,i8.NgControlStatusGroup,[i8.ControlContainer],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),17,'div',[['class','input-group w-100 mt-3']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),6,'input',[['class',
          'form-control'],['id','currentSearch'],['name','currentSearch'],['type',
          'text']],[[8,'placeholder',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
          (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
          [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
              (null as any)]],[[(null as any),'ngModelChange'],[(null as any),'input'],
          [(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i9.OccasionComponent = _v.component;
        if (('input' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,39)._handleInput($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,39).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('compositionstart' === en)) {
          const pd_2:any = ((<any>i0.ɵnov(_v,39)._compositionStart()) !== false);
          ad = (pd_2 && ad);
        }
        if (('compositionend' === en)) {
          const pd_3:any = ((<any>i0.ɵnov(_v,39)._compositionEnd($event.target.value)) !== false);
          ad = (pd_3 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_4:any = ((<any>(_co.currentSearch = $event)) !== false);
          ad = (pd_4 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i8.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i8.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i8.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i8.DefaultValueAccessor]),i0.ɵdid(671744,(null as any),0,i8.NgModel,[[2,i8.ControlContainer],
          [8,(null as any)],[8,(null as any)],[2,i8.NG_VALUE_ACCESSOR]],{name:[0,'name'],
          model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),
          i8.NgControl,(null as any),[i8.NgModel]),i0.ɵdid(16384,(null as any),0,i8.NgControlStatus,
          [i8.NgControl],(null as any),(null as any)),i0.ɵpid(131072,i10.TranslatePipe,
          [i11.TranslateService,i0.ChangeDetectorRef]),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'button',[['class',
          'input-group-addon btn btn-info']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i9.OccasionComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.search(_co.currentSearch)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-search']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),[' '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_OccasionComponent_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),0,'br',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_OccasionComponent_2)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
          [' ']))],(_ck,_v) => {
    var _co:i9.OccasionComponent = _v.component;
    const currVal_0:any = 'lookbrbackendApp.occasion.home.title';
    _ck(_v,5,0,currVal_0);
    const currVal_1:any = _ck(_v,13,0,'/',_ck(_v,12,0,_ck(_v,11,0,_ck(_v,10,0,'occasion-new'))));
    _ck(_v,9,0,currVal_1);
    const currVal_2:any = 'lookbrbackendApp.occasion.home.createLabel';
    _ck(_v,18,0,currVal_2);
    _ck(_v,24,0);
    const currVal_18:any = 'currentSearch';
    const currVal_19:any = _co.currentSearch;
    _ck(_v,41,0,currVal_18,currVal_19);
    const currVal_20:any = _co.currentSearch;
    _ck(_v,52,0,currVal_20);
    const currVal_21:any = _co.occasions;
    _ck(_v,61,0,currVal_21);
  },(_ck,_v) => {
    const currVal_3:any = i0.ɵnov(_v,34).ngClassUntouched;
    const currVal_4:any = i0.ɵnov(_v,34).ngClassTouched;
    const currVal_5:any = i0.ɵnov(_v,34).ngClassPristine;
    const currVal_6:any = i0.ɵnov(_v,34).ngClassDirty;
    const currVal_7:any = i0.ɵnov(_v,34).ngClassValid;
    const currVal_8:any = i0.ɵnov(_v,34).ngClassInvalid;
    const currVal_9:any = i0.ɵnov(_v,34).ngClassPending;
    _ck(_v,30,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
    const currVal_10:any = i0.ɵinlineInterpolate(1,'',i0.ɵunv(_v,38,0,i0.ɵnov(_v,44).transform('lookbrbackendApp.occasion.home.search')),
        '');
    const currVal_11:any = i0.ɵnov(_v,43).ngClassUntouched;
    const currVal_12:any = i0.ɵnov(_v,43).ngClassTouched;
    const currVal_13:any = i0.ɵnov(_v,43).ngClassPristine;
    const currVal_14:any = i0.ɵnov(_v,43).ngClassDirty;
    const currVal_15:any = i0.ɵnov(_v,43).ngClassValid;
    const currVal_16:any = i0.ɵnov(_v,43).ngClassInvalid;
    const currVal_17:any = i0.ɵnov(_v,43).ngClassPending;
    _ck(_v,38,0,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,
        currVal_16,currVal_17);
  });
}
export function View_OccasionComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'jhi-occasion',
      ([] as any[]),(null as any),(null as any),(null as any),View_OccasionComponent_0,
      RenderType_OccasionComponent)),i0.ɵdid(245760,(null as any),0,i9.OccasionComponent,
      [i12.OccasionService,i7.JhiAlertService,i13.JhiEventManager,i1.ActivatedRoute,
          i14.Principal],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const OccasionComponentNgFactory:i0.ComponentFactory<i9.OccasionComponent> = i0.ɵccf('jhi-occasion',
    i9.OccasionComponent,View_OccasionComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb2NjYXNpb24vb2NjYXNpb24uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb2NjYXNpb24vb2NjYXNpb24uY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9DSVQvY25vZ3VlaXJhL2xvb2ticmJhY2tlbmQvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9vY2Nhc2lvbi9vY2Nhc2lvbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvQ0lUL2Nub2d1ZWlyYS9sb29rYnJiYWNrZW5kL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvb2NjYXNpb24vb2NjYXNpb24uY29tcG9uZW50LnRzLk9jY2FzaW9uQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XCJsb29rYnJiYWNrZW5kQXBwLm9jY2FzaW9uLmhvbWUudGl0bGVcIj5PY2Nhc2lvbnM8L3NwYW4+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgamgtY3JlYXRlLWVudGl0eSBjcmVhdGUtb2NjYXNpb25cIiBbcm91dGVyTGlua109XCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnb2NjYXNpb24tbmV3J10gfSB9XVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLXBsdXNcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGlkZGVuLXNtLWRvd25cIiBqaGlUcmFuc2xhdGU9XCJsb29rYnJiYWNrZW5kQXBwLm9jY2FzaW9uLmhvbWUuY3JlYXRlTGFiZWxcIj4gQ3JlYXRlIG5ldyBPY2Nhc2lvbiA8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2IGNsYXNzPVwicm93XCI+IDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4gPGZvcm0gbmFtZT1cInNlYXJjaEZvcm1cIiBjbGFzcz1cImZvcm0taW5saW5lXCI+IDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCB3LTEwMCBtdC0zXCI+IDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50U2VhcmNoXCIgaWQ9XCJjdXJyZW50U2VhcmNoXCIgbmFtZT1cImN1cnJlbnRTZWFyY2hcIiBwbGFjZWhvbGRlcj1cInt7ICdsb29rYnJiYWNrZW5kQXBwLm9jY2FzaW9uLmhvbWUuc2VhcmNoJyB8IHRyYW5zbGF0ZSB9fVwiPiA8YnV0dG9uIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYnRuIGJ0bi1pbmZvXCIgKGNsaWNrKT1cInNlYXJjaChjdXJyZW50U2VhcmNoKVwiPiA8c3BhbiBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJjbGVhcigpXCIgKm5nSWY9XCJjdXJyZW50U2VhcmNoXCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPGJyLz4gPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiAqbmdJZj1cIm9jY2FzaW9uc1wiPiA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+IDx0aGVhZD4gPHRyPiA8dGg+PHNwYW4gamhpVHJhbnNsYXRlPVwiZ2xvYmFsLmZpZWxkLmlkXCI+SUQ8L3NwYW4+PC90aD4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cImxvb2ticmJhY2tlbmRBcHAub2NjYXNpb24ucGFnZVwiPlBhZ2U8L3NwYW4+PC90aD4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cImxvb2ticmJhY2tlbmRBcHAub2NjYXNpb24uaW5zcGlyYXRpb25cIj5JbnNwaXJhdGlvbjwvc3Bhbj48L3RoPiA8dGg+PHNwYW4gamhpVHJhbnNsYXRlPVwibG9va2JyYmFja2VuZEFwcC5vY2Nhc2lvbi5sb29rXCI+TG9vazwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVwibGV0IG9jY2FzaW9uIG9mIG9jY2FzaW9ucyA7dHJhY2tCeTogdHJhY2tJZFwiPiA8dGQ+PGEgW3JvdXRlckxpbmtdPVwiWycuLi9vY2Nhc2lvbicsIG9jY2FzaW9uLmlkIF1cIj57e29jY2FzaW9uLmlkfX08L2E+PC90ZD4gPHRkPnt7b2NjYXNpb24ucGFnZX19PC90ZD4gPHRkPiA8ZGl2ICpuZ0lmPVwib2NjYXNpb24uaW5zcGlyYXRpb25JZFwiPiA8YSBbcm91dGVyTGlua109XCJbJy4uL2luc3BpcmF0aW9uJywgb2NjYXNpb24uaW5zcGlyYXRpb25JZCAgXVwiPnt7b2NjYXNpb24uaW5zcGlyYXRpb25JZH19PC9hPiA8L2Rpdj4gPC90ZD4gPHRkPiA8ZGl2ICpuZ0lmPVwib2NjYXNpb24ubG9va0lkXCI+IDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vbG9vaycsIG9jY2FzaW9uLmxvb2tJZCAgXVwiPnt7b2NjYXNpb24ubG9va0lkfX08L2E+IDwvZGl2PiA8L3RkPiA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+IDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXCI+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtyb3V0ZXJMaW5rXT1cIlsnLi4vb2NjYXNpb24nLCBvY2Nhc2lvbi5pZCBdXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLXNtXCI+IDxzcGFuIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cImQtbm9uZSBkLW1kLWlubGluZVwiIGpoaVRyYW5zbGF0ZT1cImVudGl0eS5hY3Rpb24udmlld1wiPlZpZXc8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbcm91dGVyTGlua109XCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdvY2Nhc2lvbi8nKyBvY2Nhc2lvbi5pZCArICcvZWRpdCd9IH1dXCIgcmVwbGFjZVVybD1cInRydWVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj4gPHNwYW4gY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwiZC1ub25lIGQtbWQtaW5saW5lXCIgamhpVHJhbnNsYXRlPVwiZW50aXR5LmFjdGlvbi5lZGl0XCI+RWRpdDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtyb3V0ZXJMaW5rXT1cIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ29jY2FzaW9uLycrIG9jY2FzaW9uLmlkICsgJy9kZWxldGUnfSB9XVwiIHJlcGxhY2VVcmw9XCJ0cnVlXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj4gPHNwYW4gY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwiZC1ub25lIGQtbWQtaW5saW5lXCIgamhpVHJhbnNsYXRlPVwiZW50aXR5LmFjdGlvbi5kZWxldGVcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiAiLCI8amhpLW9jY2FzaW9uPjwvamhpLW9jY2FzaW9uPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNBODBCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBaUQ7VUFBQTtVQUFBO1FBQUE7UUFBakQ7TUFBQSxnQ0FBeUYsc0NBQUM7YUFBQTtVQUFBLDBEQUFtQztNQUFBOzs7b0JBQXluQjtNQUFBLHdFQUFvQzthQUFBLHVCQUFD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