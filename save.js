const __ADMIN__SAVEJSON__ = true;
var saveJSON = () => {
  if (Object.keys(raw_data).length == 0) {
    message("No data to export",'error')
    return
  }
  localStorage.setItem('sd',JSON.stringify(raw_data,null,2))
  message("--> Exported Data Succesfully!",'success')
}
var updateJSON = () => { 
  if (JSON.parse(localStorage.getItem('sd')) == null) {
    message("No data to import",'error')
    return
  }
  raw_data = JSON.parse(localStorage.getItem('sd')) 
  message("Imported Data Succesfully! <--",'success')
}
var overwriteJSON = () => {
  let saved_data = localStorage.getItem('sd')
  if (typeof saved_data !== 'object') {
    messagee('No data to Overwrite','error')
    return
  }
  Object.keys(saved_data).forEach(k => raw_data[k] = saved_data[k])
  message("Succesfully Done Overwrite")
}