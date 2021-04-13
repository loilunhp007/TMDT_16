import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACERASPIREComponent } from './aceraspire/aceraspire.component';
import { ACERNITROComponent } from './acernitro/acernitro.component';
import { ACERPREDATORComponent } from './acerpredator/acerpredator.component';
import { ACERSWIFComponent } from './acerswif/acerswif.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';
import { UsersComponent } from './admin/users/users.component';
import { ASUSGSERIESComponent } from './asusgseries/asusgseries.component';
import { ASUSKSERIESComponent } from './asuskseries/asuskseries.component';
import { ASUSNSERIESComponent } from './asusnseries/asusnseries.component';
import { ASUSPUSERIESComponent } from './asuspuseries/asuspuseries.component';
import { ASUSUXSERIESComponent } from './asusuxseries/asusuxseries.component';
import { ASUSXSERIESComponent } from './asusxseries/asusxseries.component';
import { CategoryComponent } from './category/category.component';
import { DELLALIENWAREComponent } from './dellalienware/dellalienware.component';
import { DELLINSPIRONComponent } from './dellinspiron/dellinspiron.component';
import { DELLLATITULEComponent } from './delllatitule/delllatitule.component';
import { DELLPRECISIONComponent } from './dellprecision/dellprecision.component';
import { DELLVOSTROComponent } from './dellvostro/dellvostro.component';
import { DELLXPSComponent } from './dellxps/dellxps.component';
import { HPELITEBOOKComponent } from './hpelitebook/hpelitebook.component';
import { HPENVYComponent } from './hpenvy/hpenvy.component';
import { HPOMENComponent } from './hpomen/hpomen.component';
import { HPPAVILIONComponent } from './hppavilion/hppavilion.component';
import { HPPROBOOKComponent } from './hpprobook/hpprobook.component';
import { HPSPECTREComponent } from './hpspectre/hpspectre.component';
import { HPZBOOKComponent } from './hpzbook/hpzbook.component';
import { LENOVOIDEAPADComponent } from './lenovoideapad/lenovoideapad.component';
import { LENOVOLEGIONComponent } from './lenovolegion/lenovolegion.component';
import { LENOVOTHINKBOOKComponent } from './lenovothinkbook/lenovothinkbook.component';
import { LENOVOTHINKPADComponent } from './lenovothinkpad/lenovothinkpad.component';
import { LENOVOYOGAComponent } from './lenovoyoga/lenovoyoga.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MSIBRAVOComponent } from './msibravo/msibravo.component';
import { MSIGEComponent } from './msige/msige.component';
import { MSIGFComponent } from './msigf/msigf.component';
import { MSIGLComponent } from './msigl/msigl.component';
import { MSIGSComponent } from './msigs/msigs.component';
import { MSIMODERNComponent } from './msimodern/msimodern.component';
import { MSIPRESTIGEComponent } from './msiprestige/msiprestige.component';
<<<<<<< Updated upstream
import { NotfoundexceptionComponent } from './notfoundexception/notfoundexception.component';
=======
import { MSIBRAVOComponent } from './msibravo/msibravo.component';
import { MSIGEComponent } from './msige/msige.component';
import { MSIGFComponent } from './msigf/msigf.component';
import { MSIGLComponent } from './msigl/msigl.component';
import { MSIGSComponent } from './msigs/msigs.component';
import { MSIMODERNComponent } from './msimodern/msimodern.component';
import { MSIPRESTIGEComponent } from './msiprestige/msiprestige.component';
import { NotfoundexceptionComponent } from './notfoundexception/notfoundexception.component';
>>>>>>> Stashed changes
import { ShoplayoutComponent } from './shoplayout/shoplayout.component';

const routes: Routes = [
  {path:'admin',
<<<<<<< Updated upstream
  component: DashboardComponent,
  children:[
    {
      path:"product",component:ProductComponent
    }
  ]
},
=======
    component: AdminMenuComponent,
    children:[
      {
        path:"users",component:UsersComponent
      }
    ]
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },
  {
    path:'home',component:ShoplayoutComponent,
    children:[
      {
        path:'dellprecision',component: DELLPRECISIONComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'delllatitule',component: DELLLATITULEComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'dellalienware',component: DELLALIENWAREComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'dellxps',component: DELLXPSComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'dellvostro',component: DELLVOSTROComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'dellinsprion',component: DELLINSPIRONComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpelitebook',component: HPELITEBOOKComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpenvy',component: HPENVYComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpprobook',component: HPPROBOOKComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hppavilion',component: HPPAVILIONComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpzbook',component: HPZBOOKComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpspectre',component: HPSPECTREComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'hpomen',component: HPOMENComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'asusgseries',component: ASUSGSERIESComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'asusuxseries',component: ASUSUXSERIESComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'asusxseries',component: ASUSXSERIESComponent,
        children:[
      {
        path:'dellprecision',component: DELLPRECISIONComponent,
      },
      {
        path:'delllatitule',component: DELLLATITULEComponent,
      },
      {
        path:'dellalienware',component: DELLALIENWAREComponent,
      },
      {
        path:'dellxps',component: DELLXPSComponent,
      },
      {
        path:'dellvostro',component: DELLVOSTROComponent,
      },
      {
        path:'dellinsprion',component: DELLINSPIRONComponent,
      },
      {
        path:'hpelitebook',component: HPELITEBOOKComponent,
      },
      {
        path:'hpenvy',component: HPENVYComponent,
      },
      {
        path:'hpprobook',component: HPPROBOOKComponent,
      },
      {
        path:'hppavilion',component: HPPAVILIONComponent,
      },
      {
        path:'hpzbook',component: HPZBOOKComponent,
      },
      {
        path:'hpspectre',component: HPSPECTREComponent,
      },
      {
        path:'hpomen',component: HPOMENComponent,
      },
      {
        path:'asusgseries',component: ASUSGSERIESComponent,
      },
      {
        path:'asusuxseries',component: ASUSUXSERIESComponent,
      },
      {
        path:'asusxseries',component: ASUSXSERIESComponent
      },
      {
        path:'asuskseries',component: ASUSKSERIESComponent,
      },
      {
        path:'asusnseries',component: ASUSNSERIESComponent,
      },
      {
        path:'asuspuseries',component: ASUSPUSERIESComponent,
      },
      {
        path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
      },
      {
        path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
      },
      {
        path:'lenovoideapad',component: LENOVOIDEAPADComponent,
      },
      {
        path:'lenovoyoga',component: LENOVOYOGAComponent,
      },
      {
        path:'lenovolegion',component: LENOVOLEGIONComponent,
      },
      {
        path:'aceraspire',component: ACERASPIREComponent,
      },
      {
        path:'acernitro',component: ACERNITROComponent,
      },
      {
        path:'acerswift',component: ACERSWIFComponent,
      },
      {
        path:'acerpredator',component: ACERPREDATORComponent,
      },
      {
        path:'msimodern',component: MSIMODERNComponent,
      },
      {
        path:'msigf',component: MSIGFComponent,
      },
      {
        path:'msigl',component: MSIGLComponent,
      },
      {
        path:'msibravo',component: MSIBRAVOComponent,
      },
      {
        path:'msiprestige',component: MSIPRESTIGEComponent,
      },
      {
        path:'msigs',component: MSIGSComponent,
      },
      {
        path:'msige',component: MSIGEComponent,
      },
    ]
      },
      {
        path:'asuskseries',component: ASUSKSERIESComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'asusnseries',component: ASUSNSERIESComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'asuspuseries',component: ASUSPUSERIESComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'lenovoideapad',component: LENOVOIDEAPADComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'lenovoyoga',component: LENOVOYOGAComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'lenovolegion',component: LENOVOLEGIONComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'aceraspire',component: ACERASPIREComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'acernitro',component: ACERNITROComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'acerswift',component: ACERSWIFComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'acerpredator',component: ACERPREDATORComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msimodern',component: MSIMODERNComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msigf',component: MSIGFComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msigl',component: MSIGLComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msibravo',component: MSIBRAVOComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msiprestige',component: MSIPRESTIGEComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msigs',component: MSIGSComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
      {
        path:'msige',component: MSIGEComponent,
        children:[
          {
            path:'dellprecision',component: DELLPRECISIONComponent,
          },
          {
            path:'delllatitule',component: DELLLATITULEComponent,
          },
          {
            path:'dellalienware',component: DELLALIENWAREComponent,
          },
          {
            path:'dellxps',component: DELLXPSComponent,
          },
          {
            path:'dellvostro',component: DELLVOSTROComponent,
          },
          {
            path:'dellinsprion',component: DELLINSPIRONComponent,
          },
          {
            path:'hpelitebook',component: HPELITEBOOKComponent,
          },
          {
            path:'hpenvy',component: HPENVYComponent,
          },
          {
            path:'hpprobook',component: HPPROBOOKComponent,
          },
          {
            path:'hppavilion',component: HPPAVILIONComponent,
          },
          {
            path:'hpzbook',component: HPZBOOKComponent,
          },
          {
            path:'hpspectre',component: HPSPECTREComponent,
          },
          {
            path:'hpomen',component: HPOMENComponent,
          },
          {
            path:'asusgseries',component: ASUSGSERIESComponent,
          },
          {
            path:'asusuxseries',component: ASUSUXSERIESComponent,
          },
          {
            path:'asusxseries',component: ASUSXSERIESComponent
          },
          {
            path:'asuskseries',component: ASUSKSERIESComponent,
          },
          {
            path:'asusnseries',component: ASUSNSERIESComponent,
          },
          {
            path:'asuspuseries',component: ASUSPUSERIESComponent,
          },
          {
            path:'lenovothinkpad',component: LENOVOTHINKPADComponent,
          },
          {
            path:'lenovothinkbook',component: LENOVOTHINKBOOKComponent,
          },
          {
            path:'lenovoideapad',component: LENOVOIDEAPADComponent,
          },
          {
            path:'lenovoyoga',component: LENOVOYOGAComponent,
          },
          {
            path:'lenovolegion',component: LENOVOLEGIONComponent,
          },
          {
            path:'aceraspire',component: ACERASPIREComponent,
          },
          {
            path:'acernitro',component: ACERNITROComponent,
          },
          {
            path:'acerswift',component: ACERSWIFComponent,
          },
          {
            path:'acerpredator',component: ACERPREDATORComponent,
          },
          {
            path:'msimodern',component: MSIMODERNComponent,
          },
          {
            path:'msigf',component: MSIGFComponent,
          },
          {
            path:'msigl',component: MSIGLComponent,
          },
          {
            path:'msibravo',component: MSIBRAVOComponent,
          },
          {
            path:'msiprestige',component: MSIPRESTIGEComponent,
          },
          {
            path:'msigs',component: MSIGSComponent,
          },
          {
            path:'msige',component: MSIGEComponent,
          },
        ]
      },
    ]
  },
  {
    path:'home/login',component: LoginComponent
  },
  {path:'**',component: NotfoundexceptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
