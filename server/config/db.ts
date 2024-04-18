let LOCAL = true;
let HostName, URI;
if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost";
}else{
    URI = "mongodb+srv://rojauhnnoble:qENp0Ff8whP6C345@cluster0.pfbxz0n.mongodb.net/";
    HostName = "MongoDB Atlas";
}

export{URI, HostName};
export const SessionSecret = "INFT2202SessionSecret";



