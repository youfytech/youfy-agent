function a20_0x117d(_0x1c1c8c,_0x4a497b){const _0x260ee8=a20_0x260e();return a20_0x117d=function(_0x117d6f,_0x50c9a2){_0x117d6f=_0x117d6f-0x1e7;let _0x58d0a7=_0x260ee8[_0x117d6f];return _0x58d0a7;},a20_0x117d(_0x1c1c8c,_0x4a497b);}const a20_0x11ca2a=a20_0x117d;(function(_0x18ba88,_0x5b70e3){const _0x115c55=a20_0x117d,_0x580c19=_0x18ba88();while(!![]){try{const _0x5456db=-parseInt(_0x115c55(0x1f4))/0x1*(parseInt(_0x115c55(0x1f8))/0x2)+parseInt(_0x115c55(0x1ee))/0x3*(parseInt(_0x115c55(0x201))/0x4)+parseInt(_0x115c55(0x1f3))/0x5*(-parseInt(_0x115c55(0x1f5))/0x6)+-parseInt(_0x115c55(0x1e7))/0x7*(-parseInt(_0x115c55(0x1fd))/0x8)+-parseInt(_0x115c55(0x200))/0x9*(parseInt(_0x115c55(0x1f6))/0xa)+-parseInt(_0x115c55(0x1e9))/0xb*(-parseInt(_0x115c55(0x1ed))/0xc)+parseInt(_0x115c55(0x1f2))/0xd*(-parseInt(_0x115c55(0x1f9))/0xe);if(_0x5456db===_0x5b70e3)break;else _0x580c19['push'](_0x580c19['shift']());}catch(_0x514d85){_0x580c19['push'](_0x580c19['shift']());}}}(a20_0x260e,0x3de6c));const {writeFileSync,existsSync,mkdirSync,readFileSync,rmSync}=require('fs'),{resolve,dirname}=require('path'),{homedir}=require('os');function a20_0x260e(){const _0x5de8a9=['4VSJguf','2010883ouPYUm','exports','3377YhfQwt','credentials_path','.youfy/credentials.json','getUser','17340wTmNQU','1080831ypsRkV','getCredentials','getCompany','updateCredentials','1168934NqldXg','411185hkdLXn','2375HzAaeT','18RmvMga','23330cvnvmT','get','82JEUPol','14FKUtqB','getToken','removeCredentials','setToken','8wDxsdZ','stringify','setCredentials','1557VgNqLy'];a20_0x260e=function(){return _0x5de8a9;};return a20_0x260e();}class AuthHelper{[a20_0x11ca2a(0x1ea)]=resolve(homedir(),a20_0x11ca2a(0x1eb));['getCredentials'](){const _0x16cc6e=a20_0x11ca2a;try{const _0x42cf9c=readFileSync(this[_0x16cc6e(0x1ea)]);return JSON['parse'](_0x42cf9c);}catch{return{};}}['updateCredentials'](_0x22c107={}){const _0x5838d1=a20_0x11ca2a,_0x1f0991=this[_0x5838d1(0x1ef)]();writeFileSync(this[_0x5838d1(0x1ea)],JSON[_0x5838d1(0x1fe)]({..._0x1f0991,..._0x22c107}));}[a20_0x11ca2a(0x1f7)](_0x1fe1f5){const _0x50630f=a20_0x11ca2a,_0x24c798=this[_0x50630f(0x1ef)]();return _0x24c798[_0x1fe1f5];}[a20_0x11ca2a(0x1fa)](){const _0x23a831=a20_0x11ca2a;return this[_0x23a831(0x1f7)]('access_token');}[a20_0x11ca2a(0x1f0)](){const _0x1f5a57=a20_0x11ca2a;return this[_0x1f5a57(0x1f7)]('company');}[a20_0x11ca2a(0x1ec)](){const _0x281e41=a20_0x11ca2a;return this[_0x281e41(0x1f7)]('user');}[a20_0x11ca2a(0x1fb)](){const _0x267e5f=a20_0x11ca2a;existsSync(this[_0x267e5f(0x1ea)])&&rmSync(dirname(this[_0x267e5f(0x1ea)]),{'recursive':!![],'force':!![]});}[a20_0x11ca2a(0x1ff)](_0xd10d8){const _0x1d23ff=a20_0x11ca2a;!existsSync(this[_0x1d23ff(0x1ea)])&&mkdirSync(dirname(this[_0x1d23ff(0x1ea)]),{'recursive':!![],'force':!![]}),this['updateCredentials'](_0xd10d8);}[a20_0x11ca2a(0x1fc)](_0x357f9a){const _0x56d40e=a20_0x11ca2a;this[_0x56d40e(0x1f1)]({'access_token':_0x357f9a});}['setCompany'](_0x2e4dd0){const _0x37220d=a20_0x11ca2a;this[_0x37220d(0x1f1)]({'company':_0x2e4dd0});}['setUser'](_0x111625){this['updateCredentials']({'user':_0x111625});}}module[a20_0x11ca2a(0x1e8)]=new AuthHelper();