const Sign=require('../model/Signup')

// http://localhost:5000/ADMIN/AdminSignUp
   const AdminSignUp=async(req,res)=>{
    const{Fname,Lname,Email,Password,check}=req.body;
    // let dis;
    let ExistingUser;
    try{
        ExistingUser = await Sign.findOne({Email:Email});
    }
    catch(err){
        console.log(err)
    }
    if(ExistingUser){
        return res.status(404).json({message:'User Already Existed'})
    }
    const dis = new Sign({
        Fname,
        Lname,
        Email,
        Password,
        check 
    })
    try{
        await dis.save();
       
        
    }catch(err){
        console.log(err)
    }
    
    return res.status(200).json({dis})
}

// http://localhost:5000/ADMIN/Display
    const AdminDisplay=async(req,res)=>{
        let got;
        try{
            got=await Sign.find();  
        }catch(err) {
            console.log(err)
        }
        if(!got){
            return res.status(404).json({message:'Page Error'})
        }
        return res.status(200).json({got})
}

// http://localhost:5000/ADMIN/AdminUpdate/:id
const AdminUpdate = async (req, res) => {
    let updata;
    const id = req.params.id;
    const { Fname, Lname, Email, Password, check } = req.body;

    try {
        updata = await Sign.findByIdAndUpdate(id, { Fname, Lname, Email, Password, check });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!updata) {
        return res.status(404).json({ message: 'Page Error' });
    }

    return res.status(200).json({ updata });
};


// http://localhost:5000/ADMIN/AdminDelete/:id
    const AdminDelete=async(req,res)=>{
        let del;
        const id =req.params.id;
        try {
             del = await Sign.findByIdAndDelete({_id:id})
            
        } catch (err) {
           console.log(err)
        }
        if(!del){
            return res.status(404).json({message: "User not exist"});
        }
        res.status(200).json({del});
       
    }





exports.AdminSignUp=AdminSignUp;
exports.AdminDisplay=AdminDisplay;
exports.AdminUpdate=AdminUpdate;
exports.AdminDelete=AdminDelete;

