const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', '..', 'Cofee App', 'assets', 'images')
const destDir = path.join(__dirname, '..', 'public', 'assets', 'images')

function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function copyFiles(){
  if(!fs.existsSync(srcDir)){
    console.warn('Source assets directory not found:', srcDir)
    return
  }
  ensureDir(destDir)
  const files = fs.readdirSync(srcDir)
  files.forEach(f=>{
    const s = path.join(srcDir,f)
    const d = path.join(destDir,f)
    try{ fs.copyFileSync(s,d) }catch(e){ console.error('copy failed',f,e) }
  })
  console.log('Assets copied to', destDir)
}

copyFiles()
