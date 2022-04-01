(()=>{"use strict";var e,t={265:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([e.id,"body {\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  margin: 0;\n  background-color: aqua;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,wCAA0B;MAA1B,iCAA0B;MAA1B,0BAA0B;EAC1B,SAAS;EACT,sBAAsB;AACxB",sourcesContent:["body {\n  image-rendering: pixelated;\n  margin: 0;\n  background-color: aqua;\n}\n"],sourceRoot:""}]);const a=o},516:(e,t,n)=>{var s,i,r=n(260),o=n.n(r),a=(s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(Phaser.Physics.Arcade.Sprite);!function(e){e.WALKING_SIDE="link-nes-walk-side",e.WALKING_UP="link-nes-walk-up",e.WALKING_DOWN="link-nes-walk-down"}(i||(i={}));var p,l=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),h=function(e){function t(t,n,s,r,o){var a=e.call(this,t,n,s,r,o)||this;return a.movementSpeed=80,a.scene.add.existing(a),a.scene.physics.add.existing(a),a.cursors=a.scene.input.keyboard.createCursorKeys(),a.setCollideWorldBounds(!0),a.setGravityY(0),a.scene.anims.create({key:i.WALKING_DOWN,frames:a.scene.anims.generateFrameNumbers(r,{start:0,end:1}),frameRate:10,repeat:-1}),a.scene.anims.create({key:i.WALKING_SIDE,frames:a.scene.anims.generateFrameNumbers(r,{start:3,end:4}),frameRate:10,repeat:-1}),a.scene.anims.create({key:i.WALKING_UP,frames:a.scene.anims.generateFrameNumbers(r,{start:6,end:7}),frameRate:10,repeat:-1}),a}return l(t,e),t.prototype.update=function(){var e=this.cursors,t=e.up,n=e.right,s=e.down;e.left.isDown?(this.setFlipX(!0),this.setVelocity(-this.movementSpeed,0),this.anims.play(i.WALKING_SIDE,!0)):n.isDown?(this.setFlipX(!1),this.setVelocity(this.movementSpeed,0),this.anims.play(i.WALKING_SIDE,!0)):t.isDown?(this.setFlipX(!1),this.setVelocity(0,-this.movementSpeed),this.anims.play(i.WALKING_UP,!0)):s.isDown?(this.setFlipX(!1),this.setVelocity(0,this.movementSpeed),this.anims.play(i.WALKING_DOWN,!0)):(this.setVelocity(0,0),this.anims.stop())},t}(c);!function(e){e.IDLE="link-nes2-idle",e.WALKING="link-nes-ii-walking",e.DUCKING="link-nes-ii-ducking",e.JUMPING="link-nes-ii-jumping",e.LANDING="link-nes-ii-landing"}(p||(p={}));var u,d=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),y=function(e){function t(t,n,s,i,r){var o=e.call(this,t,n,s,i,r)||this;return o.gravity=1e3,o.jumpPower=260,o.movementSpeed=90,o.startLanding=0,o.landingCoolDown=125,o.scene.add.existing(o),o.scene.physics.add.existing(o),o.cursors=o.scene.input.keyboard.createCursorKeys(),o.setCollideWorldBounds(!0),o.setGravityY(o.gravity),o.scene.anims.create({key:p.IDLE,frames:[{key:i,frame:0}]}),o.scene.anims.create({key:p.WALKING,frames:o.scene.anims.generateFrameNumbers(i,{start:1,end:3}),frameRate:10,repeat:-1}),o.scene.anims.create({key:p.DUCKING,frames:[{key:i,frame:4}]}),o.scene.anims.create({key:p.JUMPING,frames:o.scene.anims.generateFrameNumbers(i,{frames:[4,3]}),frameRate:6,repeat:0}),o.scene.anims.create({key:p.LANDING,frames:[{key:i,frame:4}]}),o}return d(t,e),t.prototype.update=function(e,t){var n,s,i,r=this.cursors,o=r.right,a=r.down,c=r.left,l=r.space,h=this.body.touching.down;o.isDown&&!a.isDown?(this.setFlipX(!1),this.setVelocityX(this.movementSpeed)):c.isDown&&!a.isDown?(this.setFlipX(!0),this.setVelocityX(-this.movementSpeed)):this.setVelocityX(0),l.isDown&&h?this.setVelocityY(-this.jumpPower):a.isDown?(this.body.setSize(16,28),this.body.setOffset(0,4)):(this.body.setSize(16,32),this.body.setOffset(0,0)),h?((null===(s=this.anims.currentAnim)||void 0===s?void 0:s.key)!==p.LANDING||this.startLanding+this.landingCoolDown<e)&&((null===(i=this.anims.currentAnim)||void 0===i?void 0:i.key)===p.JUMPING||a.isDown?(this.startLanding=e,this.anims.play(p.LANDING,!0)):c.isDown||o.isDown?this.anims.play(p.WALKING,!0):a.isDown?this.anims.play(p.DUCKING):this.anims.play(p.IDLE)):(null===(n=this.anims.currentAnim)||void 0===n?void 0:n.key)!==p.JUMPING&&this.anims.play(p.JUMPING)},t}(c);!function(e){e[e.UP=0]="UP",e[e.RIGHT=1]="RIGHT",e[e.DOWN=2]="DOWN",e[e.LEFT=3]="LEFT"}(u||(u={}));const f=u;var m;!function(e){e.IDLE_UP="link-snes-idle-up",e.IDLE_SIDE="link-snes-idle-side",e.IDLE_DOWN="link-snes-idle-down",e.WALKING_UP="link-snes-walking-up",e.WALKING_SIDE="link-snes-walking-side",e.WALKING_DOWN="link-snes-walking-down"}(m||(m={}));var g,w=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),_=function(e){function t(t,n,s,i,r){var o=e.call(this,t,n,s,i,r)||this;return o.facingSide=f.DOWN,o.movementSpeed=80,o.scene.add.existing(o),o.scene.physics.add.existing(o),o.cursors=o.scene.input.keyboard.createCursorKeys(),o.setBodySize(16,16),o.body.setOffset(0,8),o.setCollideWorldBounds(!0),o.setGravityY(0),o.scene.anims.create({key:m.IDLE_UP,frames:[{key:i,frame:32}]}),o.scene.anims.create({key:m.IDLE_SIDE,frames:[{key:i,frame:16}]}),o.scene.anims.create({key:m.IDLE_DOWN,frames:[{key:i,frame:0}]}),o.scene.anims.create({key:m.WALKING_UP,frames:o.scene.anims.generateFrameNumbers(i,{start:33,end:40}),frameRate:15,repeat:-1}),o.scene.anims.create({key:m.WALKING_SIDE,frames:o.scene.anims.generateFrameNumbers(i,{start:17,end:24}),frameRate:15,repeat:-1}),o.scene.anims.create({key:m.WALKING_DOWN,frames:o.scene.anims.generateFrameNumbers(i,{start:1,end:8}),frameRate:15,repeat:-1}),o}return w(t,e),t.prototype.update=function(){var e=this.cursors,t=e.up,n=e.right,s=e.down,i=e.left;i.isDown?(this.facingSide=f.LEFT,this.setVelocityX(-this.movementSpeed),this.setFlipX(!0)):n.isDown?(this.facingSide=f.RIGHT,this.setVelocityX(this.movementSpeed),this.setFlipX(!1)):this.setVelocityX(0),t.isDown?(this.facingSide=f.UP,this.setVelocityY(-this.movementSpeed)):s.isDown?(this.facingSide=f.DOWN,this.setVelocityY(this.movementSpeed)):this.setVelocityY(0),i.isDown||n.isDown?this.anims.play(m.WALKING_SIDE,!0):s.isDown?this.anims.play(m.WALKING_DOWN,!0):t.isDown?this.anims.play(m.WALKING_UP,!0):this.facingSide===f.UP?this.anims.play(m.IDLE_UP):this.facingSide===f.DOWN?this.anims.play(m.IDLE_DOWN):this.anims.play(m.IDLE_SIDE)},t}(c);!function(e){e.WALKING_UP="link-gbc-walking-up",e.WALKING_SIDE="link-gbc-walking-side",e.WALKING_DOWN="link-gbc-walking-down",e.JUMPING="link-gbc-jumping",e.JUMPING_UP="ink-gbc-jumping-up",e.JUMPING_SIDE="ink-gbc-jumping-side",e.JUMPING_DOWN="ink-gbc-jumping-down",e.PUSHING_UP="link-gbc-pushing-up",e.PUSHING_SIDE="link-gbc-pushing-side",e.PUSHING_DOWN="link-gbc-pushing-down"}(g||(g={}));var k=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),N=function(e){function t(t,n,s,i,r){var o=e.call(this,t,n,s,i,r)||this;return o.facingSide=f.DOWN,o.movementSpeed=80,o.scene.add.existing(o),o.scene.physics.add.existing(o),o.cursors=o.scene.input.keyboard.createCursorKeys(),o.body.setSize(16,10),o.body.setOffset(0,6),o.setCollideWorldBounds(!0),o.scene.anims.create({key:g.WALKING_UP,frames:o.scene.anims.generateFrameNumbers(i,{frames:[8,9]}),frameRate:8,repeat:-1}),o.scene.anims.create({key:g.WALKING_SIDE,frames:o.scene.anims.generateFrameNumbers(i,{frames:[4,5]}),frameRate:8,repeat:-1}),o.scene.anims.create({key:g.WALKING_DOWN,frames:o.scene.anims.generateFrameNumbers(i,{frames:[0,1]}),frameRate:8,repeat:-1}),o.scene.anims.create({key:g.PUSHING_UP,frames:o.scene.anims.generateFrameNumbers(i,{frames:[10,11]}),frameRate:8,repeat:-1}),o.scene.anims.create({key:g.PUSHING_SIDE,frames:o.scene.anims.generateFrameNumbers(i,{frames:[6,7]}),frameRate:8,repeat:-1}),o.scene.anims.create({key:g.PUSHING_DOWN,frames:o.scene.anims.generateFrameNumbers(i,{frames:[2,3]}),frameRate:8,repeat:-1}),o}return k(t,e),t.prototype.update=function(e,t){var n=this.cursors,s=n.up,i=n.right,r=n.down,o=n.left;n.space;o.isDown?(this.setVelocityX(-this.movementSpeed),this.flipX=!0,this.facingSide=f.LEFT):i.isDown?(this.setVelocityX(this.movementSpeed),this.flipX=!1,this.facingSide=f.RIGHT):this.setVelocityX(0),r.isDown?(this.setVelocityY(this.movementSpeed),this.facingSide=f.DOWN):s.isDown?(this.setVelocityY(-this.movementSpeed),this.facingSide=f.UP):this.setVelocityY(0),o.isDown||i.isDown?this.body.touching.left||this.body.touching.right?this.anims.play(g.PUSHING_SIDE,!0):this.anims.play(g.WALKING_SIDE,!0):r.isDown?this.body.touching.down?this.anims.play(g.PUSHING_DOWN,!0):this.anims.play(g.WALKING_DOWN,!0):s.isDown?this.body.touching.up?this.anims.play(g.PUSHING_UP,!0):this.anims.play(g.WALKING_UP,!0):this.facingSide===f.UP?this.anims.play(g.WALKING_UP):this.facingSide===f.DOWN?this.anims.play(g.WALKING_DOWN):this.anims.play(g.WALKING_SIDE)},t}(c),b={key:"link-snes-spritesheet",url:n(600),frameConfig:{frameWidth:16,frameHeight:24}},D={key:"link-nes-spritesheet",url:n(328),frameConfig:{frameWidth:16,frameHeight:16}},I={key:"link-nes-2-spritesheet",url:n(457),frameConfig:{frameWidth:16,frameHeight:32}},v={key:"link-gbc-spritesheet",url:n(498),frameConfig:{frameWidth:16,frameHeight:16}},S=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();const O=function(e){function t(){return e.call(this,"sandbox")||this}return S(t,e),t.prototype.preload=function(){this.load.spritesheet(D),this.load.spritesheet(I),this.load.spritesheet(b),this.load.spritesheet(v)},t.prototype.create=function(){var e=this.sys.game.canvas,t=e.width,n=e.height;this.cameras.main.setBackgroundColor(16777215),this.platforms=this.add.group();var s=16,i=this.add.rectangle(128,8,t,s,0),r=this.add.rectangle(t-8,t/2,s,t,0),a=this.add.rectangle(t/2,n-8,t,s,0),c=this.add.rectangle(8,128,s,t,0),p=this.add.rectangle(80,208,s,32,0),l=this.add.rectangle(184,n-64,112,s,0);this.physics.add.existing(i,!0),this.physics.add.existing(r,!0),this.physics.add.existing(a,!0),this.physics.add.existing(c,!0),this.physics.add.existing(p,!0),this.physics.add.existing(l,!0),this.platforms.add(i),this.platforms.add(r),this.platforms.add(a),this.platforms.add(c),this.platforms.add(p),this.platforms.add(l),this.add.text(24,24,"Swap player!\n1. Link NES\n2. Link NES 2\n3. Link SNES\n4. Link GBC",{color:"#000000"}),this.keyOne=this.input.keyboard.addKey(o().Input.Keyboard.KeyCodes.ONE),this.keyTwo=this.input.keyboard.addKey(o().Input.Keyboard.KeyCodes.TWO),this.keyThree=this.input.keyboard.addKey(o().Input.Keyboard.KeyCodes.THREE),this.keyFour=this.input.keyboard.addKey(o().Input.Keyboard.KeyCodes.FOUR),this.setPlayer(D)},t.prototype.setPlayer=function(e){var t,n;if((null===(t=this.player)||void 0===t?void 0:t.texture.key)!==e.key){var s,i,r=e.key,o=e.frameConfig;this.player?(s=this.player.x,i=this.player.y+this.player.height/2-o.frameHeight/2,null===(n=this.player)||void 0===n||n.destroy()):(s=45,i=195),r===D.key?this.player=new h(this,s,i,r):r===I.key?this.player=new y(this,s,i,r):r===b.key?this.player=new _(this,s,i,r):r===v.key&&(this.player=new N(this,s,i,r)),this.physics.add.collider(this.player,this.platforms)}},t.prototype.update=function(e,t){this.keyOne.isDown?this.setPlayer(D):this.keyTwo.isDown?this.setPlayer(I):this.keyThree.isDown?this.setPlayer(b):this.keyFour.isDown&&this.setPlayer(v),this.player&&this.player.update(e)},t}(o().Scene);const A={type:o().AUTO,width:256,height:240,zoom:3,physics:{default:"arcade",arcade:{debug:!1}},scene:[O],pixelArt:!0};var P=n(379),G=n.n(P),W=n(795),L=n.n(W),E=n(569),K=n.n(E),U=n(565),x=n.n(U),C=n(216),j=n.n(C),F=n(589),T=n.n(F),R=n(265),V={};V.styleTagTransform=T(),V.setAttributes=x(),V.insert=K().bind(null,"head"),V.domAPI=L(),V.insertStyleElement=j();G()(R.Z,V);R.Z&&R.Z.locals&&R.Z.locals;var H=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),X=function(e){function t(t){return e.call(this,t)||this}return H(t,e),t}(o().Game);window.addEventListener("load",(function(){new X(A)}))},498:(e,t,n)=>{e.exports=n.p+"0d4f40804b895d539172.png"},457:(e,t,n)=>{e.exports=n.p+"abcbe40fe3763e917470.png"},328:(e,t,n)=>{e.exports=n.p+"5383875b1ac6fe0f7f00.png"},600:(e,t,n)=>{e.exports=n.p+"ead6e65485e44e177e1b.png"}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.exports}s.m=t,e=[],s.O=(t,n,i,r)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,i,r]=e[l],a=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(s.O).every((e=>s.O[e](n[c])))?n.splice(c--,1):(a=!1,r<o&&(o=r));if(a){e.splice(l--,1);var p=i();void 0!==p&&(t=p)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,i,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[o,a,c]=n,p=0;if(o.some((t=>0!==e[t]))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(c)var l=c(s)}for(t&&t(n);p<o.length;p++)r=o[p],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(l)},n=self.webpackChunkphaser_sandbox=self.webpackChunkphaser_sandbox||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[736],(()=>s(516)));i=s.O(i)})();
//# sourceMappingURL=main.js.map