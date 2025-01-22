import {app} from 'electron'
import path from 'path'
import { isDev } from './utils/env.js'
export const getPreloadPath = ()=>{
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    'dist-electron',
    'preload.cjs'
  )
}

export const getUIPath = () =>{
  // app.getAppPath() 获得当前应用的路径
  return path.join(app.getAppPath(),'dist-react','index.html')
}