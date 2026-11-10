// Google Apps Script: stores tracker data as tracker.json in your Drive
function file_(){const f=DriveApp.getFilesByName("tracker.json");return f.hasNext()?f.next():DriveApp.createFile("tracker.json","{}")}
function doGet(){return ContentService.createTextOutput(file_().getBlob().getDataAsString()).setMimeType(ContentService.MimeType.JSON)}
function doPost(e){file_().setContent(e.postData.contents);return ContentService.createTextOutput("ok")}
