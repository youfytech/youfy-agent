#!/usr/bin/env node
function a0_0x50b7(_0x2ca96a,_0x33b7d8){const _0x188a68=a0_0x188a();return a0_0x50b7=function(_0x50b7c6,_0x3064dd){_0x50b7c6=_0x50b7c6-0xf7;let _0x52615d=_0x188a68[_0x50b7c6];return _0x52615d;},a0_0x50b7(_0x2ca96a,_0x33b7d8);}const a0_0x4e3116=a0_0x50b7;function a0_0x188a(){const _0x4fb92b=['./src/cmds/bot/install','./src/cmds/device/info','./src/cmds/bot/uninstall','getCommandInstance','./src/cmds/auth/login','boolean','getCommands','indexOf','./src/cmds/auth/logout','420959LuOQFj','35ZCYJDj','scriptName','./src/cmds/company/info','398699QYTCOo','yfy','dotenv','6569912oNnhmL','./src/cmds/publish/dist','command','395280WmNamP','272148ClVsSR','1328148HjZWYp','Run\x20with\x20verbose\x20logging','yargs/yargs','./src/cmds/company/set','./src/cmds/bot/start','./src/cmds/bot/info','./src/cmds/publish/publish','./src/cmds/auth/me','option','./src/cmds/bot/update','yargs/helpers','353266RohbOz','exit'];a0_0x188a=function(){return _0x4fb92b;};return a0_0x188a();}(function(_0x3406d7,_0x5bcfa3){const _0x4b8537=a0_0x50b7,_0x37aae9=_0x3406d7();while(!![]){try{const _0x2cea42=parseInt(_0x4b8537(0x114))/0x1+-parseInt(_0x4b8537(0x105))/0x2+parseInt(_0x4b8537(0xf8))/0x3+parseInt(_0x4b8537(0xfa))/0x4+parseInt(_0x4b8537(0x111))/0x5*(parseInt(_0x4b8537(0xf9))/0x6)+parseInt(_0x4b8537(0x110))/0x7+-parseInt(_0x4b8537(0x117))/0x8;if(_0x2cea42===_0x5bcfa3)break;else _0x37aae9['push'](_0x37aae9['shift']());}catch(_0x463a45){_0x37aae9['push'](_0x37aae9['shift']());}}}(a0_0x188a,0x3b25b),require(a0_0x4e3116(0x116))['config']());const yargs=require(a0_0x4e3116(0xfc)),{hideBin}=require(a0_0x4e3116(0x104)),bot_install_cmd=require(a0_0x4e3116(0x107)),bot_uninstall_cmd=require(a0_0x4e3116(0x109)),bot_update_cmd=require(a0_0x4e3116(0x103)),bot_start_cmd=require(a0_0x4e3116(0xfe)),bot_info_cmd=require(a0_0x4e3116(0xff)),auth_login_cmd=require(a0_0x4e3116(0x10b)),auth_logout_cmd=require(a0_0x4e3116(0x10f)),auth_me_cmd=require(a0_0x4e3116(0x101)),company_set_cmd=require(a0_0x4e3116(0xfd)),company_cmd=require(a0_0x4e3116(0x113)),device_add_cmd=require('./src/cmds/device/add'),device_info_cmd=require(a0_0x4e3116(0x108)),publish_cmd=require(a0_0x4e3116(0x100)),publish_all_cmd=require('./src/cmds/publish/all'),publish_dist_cmd=require(a0_0x4e3116(0x118)),instance=yargs(hideBin(process['argv']))[a0_0x4e3116(0x112)](a0_0x4e3116(0x115))['command'](...bot_install_cmd)[a0_0x4e3116(0xf7)](...bot_uninstall_cmd)[a0_0x4e3116(0xf7)](...bot_update_cmd)['command'](...bot_start_cmd)[a0_0x4e3116(0xf7)](...bot_info_cmd)[a0_0x4e3116(0xf7)](...auth_login_cmd)[a0_0x4e3116(0xf7)](...auth_logout_cmd)[a0_0x4e3116(0xf7)](...auth_me_cmd)[a0_0x4e3116(0xf7)](...company_cmd)[a0_0x4e3116(0xf7)](...company_set_cmd)[a0_0x4e3116(0xf7)](...device_add_cmd)[a0_0x4e3116(0xf7)](...device_info_cmd)[a0_0x4e3116(0xf7)](...publish_cmd)[a0_0x4e3116(0xf7)](...publish_all_cmd)[a0_0x4e3116(0xf7)](...publish_dist_cmd)[a0_0x4e3116(0x102)]('verbose',{'alias':'v','type':a0_0x4e3116(0x10c),'description':a0_0x4e3116(0xfb)}),commands=instance[a0_0x4e3116(0x10a)]()[a0_0x4e3116(0x10d)](),{argv}=instance;(!argv['_'][0x0]||commands[a0_0x4e3116(0x10e)](argv['_'][0x0])===-0x1)&&(console['log']('non-existing\x20or\x20no\x20command\x20specified'),process[a0_0x4e3116(0x106)](0x1));