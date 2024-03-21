const mongoose = require('mongoose');
const Document = require("./Document")

mongoose.connect('mongodb://127.0.0.1:27017/google-docs-clone')
    .then(() => console.log('Connected to DB'));


const io = require('socket.io')(8000, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})


io.on("connection", async (socket) => {
    console.log("Connected")

    await deleteEmptyDocs()

    socket.on("get-document", async documentId => {
        const document = await findOrCreateDocument(documentId)
        socket.join(documentId)
        socket.emit('load-document', document.data)

        socket.on('send-changes', (delta) => {
            console.log(delta)
            socket.broadcast.to(documentId).emit('recieve-changes', delta)
        })
        socket.on('save-changes',async data=>{
            await Document.findByIdAndUpdate(documentId,{data})
        })
    })
})


const findOrCreateDocument = async(id)=>{
    if(id===null)return;

    const doc = await Document.findById(id)
    if(doc){
        return doc
    }
   return await Document.create({
        _id : id,
        data : ""
    })
}

const deleteEmptyDocs = async()=>{
    const allDocs = await Document.find()
   const emptyDocsId = allDocs.filter(d=>d.data.ops[0].insert==='\n').map(document=>document._id)
   emptyDocsId.forEach(async documentID=>{
    await Document.deleteOne({_id : documentID})
    console.log("Deleting empty document of ID : ",documentID)
   }) 
}