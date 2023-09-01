```html
<BaseSelect :options="OptionsList" @selectedElemnt="selectedItemFn" />
```

```js
interface optionInt {
  title: string;
  value: string;
}
```

```text

Props
:options  ga select ro'yxati array ko'rinishida inteface tipidaka  jo'natiladi

Emit
@selectedElemnt ga funksiya yoziladi va tanlangan elementni chiqarib beradi

```
