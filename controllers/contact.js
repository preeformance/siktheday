const Contact = require('../models/Contact')


module.exports = {
    getContact: (req,res)=>{
        res.render('contact.ejs', {user: req.user})
    },
    createContactNote: async (req, res)=>{
        try{
            const contactNoteItem = req.body;
            console.log(await Contact.create({
                                            contactName:    contactNoteItem.contactName, 
                                            contactEmail:   contactNoteItem.contactEmail,
                                            contactType:    contactNoteItem.contactType,
                                            contactNote:    contactNoteItem.contactNote }))
            
            
            console.log('Note has been sent!')
            res.redirect('/contact')
        }catch(err){
            console.log(err)
        }
    }
}