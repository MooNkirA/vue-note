/* 综合示例项目路由 */
import VueBasicCommand from '@/sample/vue-basic-command'
import Counter from '@/sample/Counter'
import Notepad from '@/sample/Notepad'
import Weather from '@/sample/weather/Weather'
import Slideshow from '@/sample/slideshow/Slideshow'
import MusicPlayer from '@/sample/music-player/MusicPlayer'

export default [
  {
    path: '/vue-basic-command',
    name: 'vue-basic-command',
    component: VueBasicCommand,
  },
  {
    path: '/demo-counter',
    name: Counter.name,
    component: Counter,
  },
  {
    path: '/demo-notepad',
    name: Notepad.name,
    component: Notepad,
  },
  {
    path: '/demo-weather',
    name: Weather.name,
    component: Weather,
  },
  {
    path: '/demo-slideshow',
    name: Slideshow.name,
    component: Slideshow,
  },
  {
    path: '/demo-music-player',
    name: MusicPlayer.name,
    component: MusicPlayer,
  },
]
