const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'CRUD');
const filepath=`${dirpath}/apple.txt`;
fs.writeFileSync(filepath,"this is simple text file");
fs.readFile(filepath,'utf8',(err,item)=>{console.log(item)})
fs.appendFile(filepath,'and its name is aplle.txt',(err)=>{
  if(!err)
  {
  console.log("file is updated");
  }
})
fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
  if(!err)
  {
    console.log('file is renamed');
  }
})
//fs.unlinkSync('${dirpath}/fruit.txt');
