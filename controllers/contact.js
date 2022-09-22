const Contact = require('../models/Contact')


module.exports = {
    getContact: (req,res)=>{
        res.render('contact.ejs')
    },
    createContactNote: async (req, res)=>{
        try{
            const contactNoteItem = req.body;
            console.log(await Contact.create({contactDate:              contactNoteItem.contacDate,
                                            contactName:                contactNoteItem.contacName, 
                                            contactEmail:            contactNoteItem.contactEmail,
                                            contactType:     contactNoteItem.contactType,
                                            contactNote:    contactNoteItem.contactNote }))
            
            
            console.log('Note has been sent!')
            res.redirect('/contact')
        }catch(err){
            console.log(err)
        }
    }
}