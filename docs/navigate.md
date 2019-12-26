相比于之前的版本，Ionic4的路由/导航有了巨大的变化，总体来看，它是angular的路由和导航的一个加强版
因此学习Ionic4的路由和导航前必须先掌握angular的。

下面将结合ionic4的tabs工程分别细述


1.路由配置：
顶级配置来自app-routing.module.ts：
```typescript
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
```
这个路由配置就是一份原滋原味的angular路由配置
对应的路由出口位于app.component.html:
```html
  <ion-app>
     <ion-router-outlet></ion-router-outlet>
  </ion-app>
```
咦？咋是<ion-router-outlet>标签？
不急，后续一一道来
当在用户在浏览输入http://localhost:8100时，便会匹配到上面的路由，从而加载tabs.module
接着看tabs-routing.module.ts中的配置：
```typescript
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
```
在此分路由配置中，分别配置了"tabs"和""两个当前模块最顶级的父路由，并且把""转到了"tabs"上
在"tabs"中又有"tab1","tab2","tab3"和""4个子级路由，""同样被转到了"tab1"上
(提一手:多个页面选一个作为默认，记得使用官方的这个redirectTo方式，而不要直接将默认页面的路由设为"")
"tab1" 路径匹配了 tab1.module，他的路由又配置默认页面为Tab1Page。
终于 http://localhost:8100被几经匹配和转发，最后成了http://localhost:8100/tabs/tab1

Tab1Page 和 TabsPage也随之出现在了屏幕上

重要知识点: 
   (1)组件会优先选择“离它最近的路由出口”：对tabsPage来说，离它最近的是app.component上的路由出口
   而对tab1page来说，离它最近的路由出口是tabsPage上的路由出口。（这里有个坑，因为我们看tabsPage
   的模板代码时，并没有看到出口标签。其实是因为<ion-tabs>这个组件，它里面包含一个 <ion-router-outlet></ion-router-outlet>出口。如果我们用浏览器审核元素，是可以轻易发现的）
   
明白上述知识点：我们就知道如何配置属于各个tab(1,2,3)的子页面了
对于不想显示tabs的全屏页面，我们可以把他的路由配置到app-routing.module里。



2.执行路由跳转   
重要知识点:
     上面的疑问，为什么出口标签是<ion-router-outlet></ion-router-outlet>？
     在angular中出口标签是<router-outlet>,ionic4在此基础上做了加强，不但保留了全部<router-outlet>
     的功能，还赋予了其“栈”的能力，于是，就有了相应的路由动画，以及ionic4组件特有的生命周期钩子。
     熟悉之前版本的小伙伴，对此应该有着深刻的认识。
     
   
（1）直接使用带跳转功能的标签，如：
    
```html
  <ion-item routerDirection="forward" routerLink="./echarts">echarts demo</ion-item>
```
该标签中有 routerDirection="forward" 说明此时 是一个入栈(这个栈就是此时对应的<ion-router-outlet></ion-router-outlet>)操作。
入栈操作的同时也会带有入栈动画， 该组件也会被缓存。 与之对应的还有其他操作，可以查看ion-item标签的官方文档。

（2）调用方法跳转
  在angular中，我们可以使用Router的navigate()方法，进行跳转， 在ionic中，我们仍然可以这么做，因为<ion-router-outlet>包含<router-outlet>
  的全部功能, 但这会导致动画失效和ionic4组件特有的生命周期钩子失效。
  哈，ionic中有NavController, 我们可以使用:
```typescript
   constructor(private navCtrl: NavController,
                private route: ActivatedRoute) {
    }
    goToEchartsDemo() {
        this.navCtrl.navigateForward(['./echarts'], { relativeTo: this.route });
    }
```
这就达到和之前标签跳转同样的功能。更多的跳转知识，查看NavController对象了解详情


3.事实上，ionic4仍然保留了之前版本中的nav栈，<ion-nav>, 同样，自己去官网阅读了解更多。
  
 




