"use strict";(self.webpackChunktaskmanagementsystem=self.webpackChunktaskmanagementsystem||[]).push([[40],{241:(t,e,s)=>{s.d(e,{DJ:()=>o,eV:()=>c,t5:()=>l});let l={allProjects:[],allTasks:[]},o={FindProject:function(t){for(let e=0;e<allProjects.length;e++)if(t===l.allProjects[e].projectName)return allProjects[e].projectList},createProject:class{constructor(t){this.projectTitle=t,this.projectList=[],console.log(t)}},addToAllProjects:function(t){l.allProjects[l.allProjects.length]=t}},c={createTask:class{constructor(t,e,s,l){this.title=t,this.description=e,this.date=s,this.priority=l}},addingTask:function(t,e=r){l.allTasks[l.allTasks.length]=t,FindProject(e)[FindProject(e).length]=t},findingTask:function(t){for(let e=0;e<allProjects.length;e++)for(let s=0;s<allProjects[e].projectList.length;s++)if(t===allProjects[e].projectList[s].title)return console.log("found",s,e,allProjects[e].projectList[s].title),{x:s,i:e}}},r=new o.createProject("space trip");o.addToAllProjects(r)}},t=>{t.O(0,[712],(()=>(241,t(t.s=241)))),t.O()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLnRhc2suanMiLCJtYXBwaW5ncyI6IjZKQUVPLElBQUlBLEVBTUosQ0FBQ0MsWUFKWSxHQUlBQyxTQUhILElBUU5DLEVBd0NMLENBQUNDLFlBZEgsU0FBcUJDLEdBQ2pCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJTCxZQUFZTSxPQUFRRCxJQUV4QyxHQUFHRCxJQUFjTCxFQUFhQyxZQUFZSyxHQUFHRSxZQUl4QyxPQUFPUCxZQUFZSyxHQUFHRyxXQUc5QixFQUljQyxjQXRDZixNQUVJLFdBQUFDLENBQVlDLEdBQ1JDLEtBQUtELGFBQWFBLEVBQ2xCQyxLQUFLSixZQUFZLEdBQ2pCSyxRQUFRQyxJQUFJSCxFQUloQixHQTZCeUJJLGlCQW5CN0IsU0FBMEJDLEdBQ3RCakIsRUFBYUMsWUFBWUQsRUFBYUMsWUFBWU0sUUFBUVUsQ0FFOUQsR0FzQk9DLEVBd0RKLENBQUNDLFdBdERKLE1BR0ksV0FBQVIsQ0FBWVMsRUFBTUMsRUFBWUMsRUFBS0MsR0FFL0JWLEtBQUtPLE1BQU1BLEVBQ1hQLEtBQUtRLFlBQVlBLEVBQ2pCUixLQUFLUyxLQUFLQSxFQUNWVCxLQUFLVSxTQUFTQSxDQUtsQixHQXlDV0MsV0FwQ2YsU0FBb0JDLEVBQVFDLEVBQVFDLEdBR2hDM0IsRUFBYUUsU0FBU0YsRUFBYUUsU0FBU0ssUUFBUWtCLEVBRXBEckIsWUFBWXNCLEdBQVV0QixZQUFZc0IsR0FBU25CLFFBQVFrQixDQUd2RCxFQTRCMEJHLFlBMUIxQixTQUFxQkMsR0FHakIsSUFBSyxJQUFJdkIsRUFBSSxFQUFHQSxFQUFJTCxZQUFZTSxPQUFRRCxJQUdwQyxJQUFLLElBQUl3QixFQUFJLEVBQUdBLEVBQUk3QixZQUFZSyxHQUFnQixZQUFFQyxPQUFRdUIsSUFHeEQsR0FBR0QsSUFBVzVCLFlBQVlLLEdBQWdCLFlBQUV3QixHQUFVLE1BSXBELE9BRkFoQixRQUFRQyxJQUFJLFFBQVFlLEVBQUV4QixFQUFFTCxZQUFZSyxHQUFnQixZQUFFd0IsR0FBVSxPQUUxRCxDQUFDQSxJQUFFeEIsSUFRckIsR0FxQ0FxQixFQUFhLElBQUl4QixFQUFrQk8sY0FBYyxjQUNyRFAsRUFBa0JhLGlCQUFpQlcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYW5hZ2VtZW50c3lzdGVtLy4vc3JjL2FkZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGxldCBhbGxNYXRlcmlhbHM9KCgpPT57XG5cbiAgICBsZXQgYWxsUHJvamVjdHM9W107XG4gICAgbGV0IGFsbFRhc2tzPVtdO1xuXG5cbnJldHVybiB7YWxsUHJvamVjdHMsYWxsVGFza3N9XG5cbn0pKClcblxuXG5leHBvcnQgbGV0IFByb2plY3RNYW5hZ2VtZW50PSgoKT0+e1xuXG4gICAgY2xhc3MgY3JlYXRlUHJvamVjdHtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGU9cHJvamVjdFRpdGxlO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdD1bXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZSk7XG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0FsbFByb2plY3RzKE5ld1Byb2plY3QpIHtcbiAgICAgICAgYWxsTWF0ZXJpYWxzLmFsbFByb2plY3RzW2FsbE1hdGVyaWFscy5hbGxQcm9qZWN0cy5sZW5ndGhdPU5ld1Byb2plY3Q7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEZpbmRQcm9qZWN0KFByb2plY3ROYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGlmKFByb2plY3ROYW1lPT09YWxsTWF0ZXJpYWxzLmFsbFByb2plY3RzW2ldLnByb2plY3ROYW1lKVxuICAgICBcbiAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIHJldHVybiBhbGxQcm9qZWN0c1tpXS5wcm9qZWN0TGlzdDtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgIH1cblxuXG5cbnJldHVybntGaW5kUHJvamVjdCxjcmVhdGVQcm9qZWN0LGFkZFRvQWxsUHJvamVjdHN9XG5cblxufSkoKSBcblxuXG5leHBvcnQgbGV0IFRhc2tNYW5hZ2VtZW50PSgoKT0+e1xuXG4gICAgY2xhc3MgY3JlYXRlVGFza3tcblxuXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHkpe1xuICAgIFxuICAgICAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmRhdGU9ZGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHk9cHJpb3JpdHk7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRpbmdUYXNrKG5ld1Rhc2sscHJvamVjdD1zcGFjZVRyYXZlbHMpe1xuXG4gICAgICAgIFxuICAgICAgICBhbGxNYXRlcmlhbHMuYWxsVGFza3NbYWxsTWF0ZXJpYWxzLmFsbFRhc2tzLmxlbmd0aF09bmV3VGFza1xuICAgICAgICAvLyBwcm9qZWN0LnByb2plY3RMaXN0W3Byb2plY3QucHJvamVjdExpc3QubGVuZ3RoXT1uZXdUYXNrO1xuICAgICAgICBGaW5kUHJvamVjdChwcm9qZWN0KVsgRmluZFByb2plY3QocHJvamVjdCkubGVuZ3RoXT1uZXdUYXNrO1xuICAgIFxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRpbmdUYXNrKFRhc2tOYW1lKXtcblxuICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGFsbFByb2plY3RzW2ldW1wicHJvamVjdExpc3RcIl0ubGVuZ3RoOyB4KyspIHtcbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZihUYXNrTmFtZT09PWFsbFByb2plY3RzW2ldW1wicHJvamVjdExpc3RcIl1beF1bXCJ0aXRsZVwiXSl7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiLHgsaSxhbGxQcm9qZWN0c1tpXVtcInByb2plY3RMaXN0XCJdW3hdW1widGl0bGVcIl0pO1xuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybnt4LGl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgfVxuXG5cblxuXG5yZXR1cm4ge2NyZWF0ZVRhc2ssYWRkaW5nVGFzayxmaW5kaW5nVGFza31cblxuXG59KSgpXG5cblxuLy90aGUgYXJyeXMgc2hvdWxkIGhhdmUgYSBuYW1lIGFuZCB0aGUgdGFza3Mgc2hvdWxkIGtub3cgd2hlcmUgdGhleSBiZWxvbmcgdG9cblxuZnVuY3Rpb24gcGxhY2VUYXNraW5BbGxUYXNrcygpIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTWF0ZXJpYWxzLmFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPGFsbE1hdGVyaWFscy5hbGxQcm9qZWN0c1tcInByb2plY3RMaXN0XCJdLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBhbGxNYXRlcmlhbHMuYWxsVGFza3NbaV09YWxsTWF0ZXJpYWxzLmFsbFByb2plY3RzW1wicHJvamVjdExpc3RcIl1beF1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vY3JlYXRpbmcgZGVmYXVsdCBcbmxldCBzcGFjZVRyYXZlbHM9bmV3IFByb2plY3RNYW5hZ2VtZW50LmNyZWF0ZVByb2plY3QoXCJzcGFjZSB0cmlwXCIpO1xuUHJvamVjdE1hbmFnZW1lbnQuYWRkVG9BbGxQcm9qZWN0cyhzcGFjZVRyYXZlbHMpO1xuXG4iXSwibmFtZXMiOlsiYWxsTWF0ZXJpYWxzIiwiYWxsUHJvamVjdHMiLCJhbGxUYXNrcyIsIlByb2plY3RNYW5hZ2VtZW50IiwiRmluZFByb2plY3QiLCJQcm9qZWN0TmFtZSIsImkiLCJsZW5ndGgiLCJwcm9qZWN0TmFtZSIsInByb2plY3RMaXN0IiwiY3JlYXRlUHJvamVjdCIsImNvbnN0cnVjdG9yIiwicHJvamVjdFRpdGxlIiwidGhpcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb0FsbFByb2plY3RzIiwiTmV3UHJvamVjdCIsIlRhc2tNYW5hZ2VtZW50IiwiY3JlYXRlVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicHJpb3JpdHkiLCJhZGRpbmdUYXNrIiwibmV3VGFzayIsInByb2plY3QiLCJzcGFjZVRyYXZlbHMiLCJmaW5kaW5nVGFzayIsIlRhc2tOYW1lIiwieCJdLCJzb3VyY2VSb290IjoiIn0=