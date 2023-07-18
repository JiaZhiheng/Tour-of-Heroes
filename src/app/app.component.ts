import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 组件的 CSS 元素选择器
  templateUrl: './app.component.html', // 组件模板文件的位置
  styleUrls: ['./app.component.css'], // 组件私有 CSS 样式表文件的位置
})
export class AppComponent {
  title = 'Tour of Heroes'; // 英雄之旅
}
