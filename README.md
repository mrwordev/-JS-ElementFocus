# -JS-ElementFocus
This is quiet simple perspective of how overlay pop up for focus an object. 
Instead of creating a whole bunch of div over another, I just simply create single DIV over such element and use box-shadow over it.

Compatibilit: Chrome 10 , Firefox 4.0 , IE 9.0 , Opera 10.5 , Safari 5.1

Ps. Resize tracking Included!

## How-To
####Variables
#####target
Direct accessible to element that being targeted, target element will be auto genereate once call toggle("element") function.
```js
	WorFocuser.target = document.getElementById("buttonA");
	var element = WorFocuser.target;
```
Example how to manually initiate target variable.

#####overlay
Direct accessible to overlay element. Overlay element can be manually create by calling createOverlay() funcion.
```js
	WorFocuser.overlay = WorFocuser.createOverlay();
```

####Methods
#####init()
First method to initiate WorFocuser
```js
	WorFocuser.init();
```
This will result in create overlay object in body element;

#####toggle(e)
Toggle overlay with focus on given element id.

e - Given element id.

```js
	WorFocuser.init();
	var btn = document.getElementById("buttonA");
	btn.addEventListener("click",function(){
		WorFocuser.toggle("buttonA");
	});
```

#####lostFocus()
Close focuser, tecnicly hide it, from visisble plain.

```js
	WorFocuser.init();
	WorFocuser.toggle("buttonA");

	var btn = document.getElementById("buttonB");
	btn.addEventListener("click",function(){
		WorFocuser.lostFocus();
	});
```
Once click on button B it will hide focuser from page.

#####relocation(e)
Relocate focus location and size to match current target of WorFocuser.

e - Given element object.(Optional)

```js
	WorFocuser.init();
	WorFocuser.toggle("buttonA");
	WorFocuser.relocation();

	var btn = document.getElementById("buttonB");
	btn.addEventListener("click",function(){
		WorFocuser.relocation(btn);
	});
```
Once click on button B it will change focus to button B instead click button A again to hide focus.