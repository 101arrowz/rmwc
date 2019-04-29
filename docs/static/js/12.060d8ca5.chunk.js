(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{806:function(e){e.exports=["<Drawer>\n  <DrawerHeader>\n    <DrawerTitle>DrawerHeader</DrawerTitle>\n    <DrawerSubtitle>Subtitle</DrawerSubtitle>\n  </DrawerHeader>\n  <DrawerContent>\n    <List>\n      <ListItem>Cookies</ListItem>\n      <ListItem>Pizza</ListItem>\n      <ListItem>Icecream</ListItem>\n    </List>\n  </DrawerContent>\n</Drawer>","function Example() {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      <div style={{ overflow: 'hidden', position: 'relative' }}>\n        <Drawer dismissible open={open}>\n          <DrawerHeader>\n            <DrawerTitle>DrawerHeader</DrawerTitle>\n            <DrawerSubtitle>Subtitle</DrawerSubtitle>\n          </DrawerHeader>\n          <DrawerContent>\n            <List>\n              <ListItem>Cookies</ListItem>\n              <ListItem>Pizza</ListItem>\n              <ListItem>Icecream</ListItem>\n            </List>\n          </DrawerContent>\n        </Drawer>\n\n        {/* Optional DrawerAppContent */}\n        <DrawerAppContent\n          style={{ minHeight: '15rem', padding: '1rem' }}\n        >\n          DrawerAppContent is an optional component that will resize\n          content when the dismissible drawer is open and closed. It\n          must be placed directly after the Drawer component.\n        </DrawerAppContent>\n      </div>\n\n      <div style={{ textAlign: 'center' }}>\n        <Button onClick={() => setOpen(!open)} raised>\n          Toggle Dismissible\n        </Button>\n      </div>\n    </>\n  );\n}","function Example() {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      <Drawer modal open={open} onClose={() => setOpen(false)}>\n        <DrawerHeader>\n          <DrawerTitle>DrawerHeader</DrawerTitle>\n          <DrawerSubtitle>Subtitle</DrawerSubtitle>\n        </DrawerHeader>\n        <DrawerContent>\n          <List>\n            <ListItem>Cookies</ListItem>\n            <ListItem>Pizza</ListItem>\n            <ListItem>Icecream</ListItem>\n          </List>\n        </DrawerContent>\n      </Drawer>\n\n      <Button onClick={() => setOpen(!open)} raised>\n        Toggle Modal\n      </Button>\n    </>\n  );\n}",'function Example() {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      {/** Make the drawer appear right-to-left */}\n      <Drawer\n        dir="rtl"\n        modal\n        open={open}\n        onClose={() => setOpen(false)}\n      >\n        {/** Set the content back to left-to-right */}\n        <DrawerHeader dir="ltr">\n          <DrawerTitle>Right Drawer</DrawerTitle>\n          <DrawerSubtitle>Subtitle</DrawerSubtitle>\n        </DrawerHeader>\n\n        <DrawerContent dir="ltr">\n          <List>\n            <ListItem>Cookies</ListItem>\n            <ListItem>Pizza</ListItem>\n            <ListItem>Icecream</ListItem>\n          </List>\n        </DrawerContent>\n      </Drawer>\n\n      <Button onClick={() => setOpen(!open)} raised>\n        Toggle Right Drawer\n      </Button>\n    </>\n  );\n}']},807:function(e){e.exports={npm:{},typescript:{DrawerHeaderProps:{documentation:{contents:["<p>An optional header for the Drawer.</p>\n"],contentsRaw:"An optional header for the Drawer.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerHeaderProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L15",methods:[],properties:[]},DrawerTitleProps:{documentation:{contents:["<p>An title for the DrawerHeader.</p>\n"],contentsRaw:"An title for the DrawerHeader.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerTitleProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L24",methods:[],properties:[]},DrawerSubtitleProps:{documentation:{contents:["<p>A subtitle for the DrawerHeader.</p>\n"],contentsRaw:"A subtitle for the DrawerHeader.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerSubtitleProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L33",methods:[],properties:[]},DrawerContentProps:{documentation:{contents:["<p>Content for Drawers.</p>\n"],contentsRaw:"Content for Drawers.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerContentProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L45",methods:[],properties:[]},DrawerAppContentProps:{documentation:{contents:["<p>For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes.</p>\n"],contentsRaw:"For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerAppContentProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L67",methods:[],properties:[]},DrawerProps:{documentation:{contents:["<p>A Drawer component.</p>\n"],contentsRaw:"A Drawer component.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"DrawerProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L83",methods:[],properties:[{documentation:{contents:["<p>Makes a dismissible drawer.</p>\n"],contentsRaw:"Makes a dismissible drawer.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"dismissible",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L91",type:"undefined | false | true"},{documentation:{contents:["<p>Makes a modal / temporary drawer.</p>\n"],contentsRaw:"Makes a modal / temporary drawer.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"modal",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L93",type:"undefined | false | true"},{documentation:{contents:["<p>Callback that fires when the Drawer is closed.</p>\n"],contentsRaw:"Callback that fires when the Drawer is closed.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"onClose",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L87",type:"undefined | (evt: DrawerOnOpenEventT) => void"},{documentation:{contents:["<p>Callback that fires when the Drawer is opened.</p>\n"],contentsRaw:"Callback that fires when the Drawer is opened.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"onOpen",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L89",type:"undefined | (evt: DrawerOnCloseEventT) => void"},{documentation:{contents:["<p>Opens or closes the Drawer.</p>\n"],contentsRaw:"Opens or closes the Drawer.",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"open",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L85",type:"undefined | false | true"}]},DrawerOnCloseEventT:{documentation:{contents:["<p>Drawers</p>\n"],contentsRaw:"Drawers",metadata:{}},fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"type alias",name:"DrawerOnCloseEventT",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L79",type:"RMWC.CustomEventT<{}>"},DrawerOnOpenEventT:{fileName:"src/drawer/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"type alias",name:"DrawerOnOpenEventT",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/748de1f81/src/drawer/index.tsx#L80",type:"RMWC.CustomEventT<{}>"}}}},866:function(e,t,r){"use strict";r.r(t);var n=r(31),a=r(0),i=r.n(a),s=r(40),l=r(807),o=r(806),c=r(53),d=r(85),m=r(60),p=r(27);t.default=function(){return i.a.createElement(s.b,{title:"Drawers",lead:"A navigation drawer slides in from the left and contains the navigation destinations for your app.",module:"@rmwc/drawer",styles:["@material/drawer/dist/mdc.drawer.css"],docsLink:"https://material.io/develop/web/components/drawers/",examples:o},i.a.createElement(s.f,null,"Permanent"),i.a.createElement(s.e,null,"These are drawers that are permanently fixed inside of a view."),i.a.createElement(s.c,null,i.a.createElement(c.a,null,i.a.createElement(c.d,null,i.a.createElement(c.g,null,"DrawerHeader"),i.a.createElement(c.f,null,"Subtitle")),i.a.createElement(c.c,null,i.a.createElement(d.a,null,i.a.createElement(m.d,null,"Cookies"),i.a.createElement(m.d,null,"Pizza"),i.a.createElement(m.d,null,"Icecream"))))),i.a.createElement(s.f,null,"Dismissible"),i.a.createElement(s.e,null,"These are drawers that can be toggled to an open or closed state inside of a view, but still takes up viewable space when closed."),i.a.createElement(s.c,null,function(){var e=i.a.useState(!1),t=Object(n.a)(e,2),r=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{overflow:"hidden",position:"relative"}},i.a.createElement(c.a,{dismissible:!0,open:r},i.a.createElement(c.d,null,i.a.createElement(c.g,null,"DrawerHeader"),i.a.createElement(c.f,null,"Subtitle")),i.a.createElement(c.c,null,i.a.createElement(d.a,null,i.a.createElement(m.d,null,"Cookies"),i.a.createElement(m.d,null,"Pizza"),i.a.createElement(m.d,null,"Icecream")))),i.a.createElement(c.b,{style:{minHeight:"15rem",padding:"1rem"}},"DrawerAppContent is an optional component that will resize content when the dismissible drawer is open and closed. It must be placed directly after the Drawer component.")),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{onClick:function(){return a(!r)},raised:!0},"Toggle Dismissible")))}),i.a.createElement(s.f,null,"Modal"),i.a.createElement(s.e,null,"These are drawers that can be temporarily displayed fixed on the side of the entire viewport."),i.a.createElement(s.c,null,function(){var e=i.a.useState(!1),t=Object(n.a)(e,2),r=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{modal:!0,open:r,onClose:function(){return a(!1)}},i.a.createElement(c.d,null,i.a.createElement(c.g,null,"DrawerHeader"),i.a.createElement(c.f,null,"Subtitle")),i.a.createElement(c.c,null,i.a.createElement(d.a,null,i.a.createElement(m.d,null,"Cookies"),i.a.createElement(m.d,null,"Pizza"),i.a.createElement(m.d,null,"Icecream")))),i.a.createElement(p.a,{onClick:function(){return a(!r)},raised:!0},"Toggle Modal"))}),i.a.createElement(s.f,null,"Right Side Drawers"),i.a.createElement(s.e,null,"`material-components-web` doesn't directly support right hand drawers, but it respects the `dir` attribute on DOM elements. This simple hack will allow you to get drawers that appear from the right hand side of your app. As an aside, the `dir` attribute can be used to invert many other behaviors where the element is anchored on the left."),i.a.createElement(s.c,null,function(){var e=i.a.useState(!1),t=Object(n.a)(e,2),r=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{dir:"rtl",modal:!0,open:r,onClose:function(){return a(!1)}},i.a.createElement(c.d,{dir:"ltr"},i.a.createElement(c.g,null,"Right Drawer"),i.a.createElement(c.f,null,"Subtitle")),i.a.createElement(c.c,{dir:"ltr"},i.a.createElement(d.a,null,i.a.createElement(m.d,null,"Cookies"),i.a.createElement(m.d,null,"Pizza"),i.a.createElement(m.d,null,"Icecream")))),i.a.createElement(p.a,{onClick:function(){return a(!r)},raised:!0},"Toggle Right Drawer"))}),i.a.createElement(s.a,{src:l,components:[c.a,c.d,c.g,c.f,c.c,c.b]}))}}}]);
//# sourceMappingURL=12.060d8ca5.chunk.js.map