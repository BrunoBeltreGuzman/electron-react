const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
       batteryApi: {},
       filesApi: {},
});
